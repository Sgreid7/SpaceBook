const axios = require("axios")
const path = require(`path`)

// Exports as sourceNodes for gatsby to store in GraphQL
exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  // getting all satellites from the observatory
  // working as intended
  const observatories = await axios({
    method: "GET",
    url: "https://sscweb.sci.gsfc.nasa.gov/WS/sscr/2/observatories",
    headers: {
      Accept: "application/json",
    },
  }).catch(error => {
    console.error("observatories GET error: ", error.message)
  })

  const getDetails = async resId => {
    // console.log("resId: ", resId)
    // takes in resourceId to get more information about satellite
    const details = await axios({
      method: "GET",
      url: `https://cdaweb.gsfc.nasa.gov/registry/hdp/Spase.xql?id=${resId}`,
      headers: {
        Accept: "application/json",
      },
    })

    const isObservatoryRegionNull = details.data.Location
      ? details.data.Location.ObservatoryRegion
      : null
    const observatoryRegion = Array.isArray(isObservatoryRegionNull)
      ? isObservatoryRegionNull
      : [isObservatoryRegionNull]
    return {
      description: details.data.ResourceHeader.Description,
      releaseDate: details.data.ResourceHeader.ReleaseDate,
      alternateNames: details.data.ResourceHeader.AlternateName,
      info: {
        ...details.data.ResourceHeader.InformationURL,
      },
      observatoryRegion: observatoryRegion,
    }
  }

  // console.log(observatories.data.Observatory[1])

  const promise1 = new Promise(async (resolve, reject) => {
    await Promise.all(
      observatories.data.Observatory[1].map(satellites => {
        // iterates over each satellite to get details and returns via promise
        const {
          Id,
          EndTime,
          Name,
          StartTime,
          Resolution,
          ResourceId,
        } = satellites
        // console.log({ ResourceId, Resolution, StartTime, EndTime, Name, Id })
        // console.log({ Name })
        const hasResourceId = ResourceId ? ResourceId : null

        if (hasResourceId) {
          const details = getDetails(hasResourceId)
          // console.log({ details })
          // https://nssdc.gsfc.nasa.gov/thumbnail/spacecraft/ace1.gif
          if (details) {
            details
              .then(result => {
                const node = {
                  nameID: Id,
                  resolution: Resolution,
                  endTime: EndTime[1],
                  startTime: StartTime[1],
                  name: Name,
                  resourceId: ResourceId,
                  details: result,
                  id: createNodeId(satellites.Id),
                  internal: {
                    type: "satellite",
                    contentDigest: createContentDigest(satellites),
                  },
                }
                actions.createNode(node)

                // console.log("DETAILS", node.details)
                // if (result) resolve()
                // resolve()
              })
              .catch(error => {
                console.log("details error:", error)
                reject()
              })
          }
        }
      })
    )
    return resolve()
  })
  return promise1
}

exports.createPages = async ({ graphql, actions }) => {
  const satelliteTemplate = path.resolve(`./src/templates/satelliteDetail.js`)
  const { createPage } = actions
  const { data } = await graphql(`
    query SatelliteInfo {
      allSatellite {
        edges {
          node {
            id
            name
            nameID
            resourceId
            startTime(formatString: "MMM DD, YYYY")
            endTime(formatString: "MMM DD, YYYY")
            details {
              description
            }
          }
        }
      }
    }
  `)

  const satellitePages = data.allSatellite.edges

  await Promise.all(
    satellitePages.map(({ node }) => {
      console.log(node)
      return createPage({
        // Path for this page — required
        path: `/satellites/${node.id}`,
        component: satelliteTemplate,
        // use the node props
        context: {
          id: node.id,
          name: node.name,
          nameID: node.nameID,
          resourceId: node.resourceId,
          startTime: node.startTime,
          endTime: node.endTime,
          details: node.details,
          description: node.details.description,
        },
      })
    })
  )
}

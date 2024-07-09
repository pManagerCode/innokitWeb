import { always, cond, equals, hasPath, includes, path, prop } from 'ramda'

export const checkActiveNavPath = (input, routePath) => {
  const name = prop('name', input)
  let entityId, reportId
  if (hasPath(['params', 'entityId'])) {
    entityId = path(['params', 'entityId'], input)
  }
  if (hasPath(['params', 'reportId'])) {
    reportId = path(['params', 'reportId'], input)
  }

  const inputPath = cond([
    [
      equals('app-investing-entity-id'),
      always(`/app/investing-entity/${entityId}`)
    ],
    [
      equals('adviser-investing-entity-id'),
      always(`/adviser/investing-entity/${entityId}`)
    ],
    [equals('Client'), always(`/client/${entityId}`)],
    [equals('app-reports-id'), always(`/app/reports/${reportId}`)]
  ])
  return includes(inputPath(name), routePath)
}

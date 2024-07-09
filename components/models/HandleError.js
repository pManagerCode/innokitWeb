import LogLevel from '@/plugins/LogLevel'

// TODO: this is not able to display the exact error information from XMLHttpRequest
export const handleError = (moduleName = '', funcName = '', error) => {
  if (error.response) {
    // Request made and server responded
    if (error.response.status === 400 || error.response.status === 500) {
      LogLevel.warn(`${moduleName}.${funcName} >
${error.response.status} error: ${error.response.data}`)
    } else {
      LogLevel.error(`${moduleName}.${funcName} >
${error.response.status} error: ${error.response.data}`)
    }
  } else if (error.request) {
    // The request was made but no response was received
    if (error.request.status === 401) {
      LogLevel.warn(`${moduleName}.${funcName} >
${error.request}`)
    } else {
      LogLevel.error(`${moduleName}.${funcName} >
${error.request}`)
    }
  } else {
    // Something happened in setting up the request that triggered an Error
    if (error.message === 'Invalid token specified') {
      LogLevel.warn(`${moduleName}.${funcName} >
${error.message}`)
    } else {
      LogLevel.error(`${moduleName}.${funcName} >
${error.message}`)
    }
  }
}

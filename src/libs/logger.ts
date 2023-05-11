import logger from 'pino'

const message = `, time: ${new Date().toISOString()}`

const pinoProvider = logger({
  timestamp: () => message
  }
)

const logService = (provider: any) => {
  return {
    info: (message: string) => {
      provider.info(message)
    },
    error: (message: string) => {
      provider.error(message)
    },
    debug: (message: string) => {
      provider.debug(message)
    },
    warn: (message: string) => {
      provider.warn(message)
    }
  }
} 

export default logService(pinoProvider)
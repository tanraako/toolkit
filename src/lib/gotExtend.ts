import { Got } from 'got'

export function gotExtendForBetterError(got: Got) {
    console.log('GOOOOOOOT')
    return got.extend({
      hooks: {
        beforeError: [
          (error: any) => {
            const { response } = error as any // J'ai un warning qui dit que response n'est pas dans le type error alors que si, peut etre qu'il faut mettre à jour Typescript...
  
            if (response && response.body) {
              try {
                const { message } = JSON.parse(response.body)
                error.message = `[${response.statusCode}](${response.url}) ${message}`
              } catch (e) {
                // do nothing
              }
            }
  
            return error
          }
        ]
      }
    })
  }
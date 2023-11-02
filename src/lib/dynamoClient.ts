import { DynamoDBClient } from '@aws-sdk/client-dynamodb'

export class DynamoClient {
  public buildDynamoClient(endpoint?: string, region?: string): DynamoDBClient {
    console.log('Build DynamoClient')
    const client = new DynamoDBClient({
      endpoint: endpoint || undefined,
      region: region || undefined
    })

    return client
  }
}
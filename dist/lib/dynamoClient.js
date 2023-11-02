"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamoClient = void 0;
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
class DynamoClient {
    buildDynamoClient(endpoint, region) {
        console.log('Build DynamoClient');
        const client = new client_dynamodb_1.DynamoDBClient({
            endpoint: endpoint || undefined,
            region: region || undefined
        });
        return client;
    }
}
exports.DynamoClient = DynamoClient;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dynamoClient_1 = require("./lib/dynamoClient");
const gotExtend_1 = require("./lib/gotExtend");
module.exports = {
    DynamoClient: dynamoClient_1.DynamoClient,
    gotExtendForBetterError: gotExtend_1.gotExtendForBetterError
};

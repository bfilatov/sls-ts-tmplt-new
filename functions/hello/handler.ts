import { APIGatewayProxyHandler } from 'aws-lambda';
import * as _ from 'lodash';
import 'source-map-support/register';

export const hello: APIGatewayProxyHandler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      function: 'Hello v0.0.5',
      _: _.VERSION
    }),
  };
};

/**
 * This is the application server run by Serverless that will serve the static content as well as the index pages for
 * all other routes.
 */

import { APIGatewayEvent, Context, Handler } from "aws-lambda";
import { createServer, proxy } from "aws-serverless-express";
import { app } from "./server/server";

const BINARY_MIME_TYPES = ["image/jpeg", "image/png", "image/x-icon"];

const server = createServer(app, undefined, BINARY_MIME_TYPES);

export const handler: Handler<APIGatewayEvent> = (
  event: APIGatewayEvent,
  context: Context
) => proxy(server, event, context);

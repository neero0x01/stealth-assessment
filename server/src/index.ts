import 'dotenv/config.js';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import schema from './graphql/schema'
import dbConnection from "./dbConnector";
import apiRoutes from "./routes";

interface MyContext {
    token?: string;
}

async function bootstrapApolloServer() {
    const port = process.env.PORT || 5000;
    const app = express();
    dbConnection();

    const httpServer = http.createServer(app);

    const server = new ApolloServer<MyContext>({
        schema,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });

    await server.start();

    app.use("/", apiRoutes);

    app.use(
        '/graphql',
        cors<cors.CorsRequest>(),
        bodyParser.json({ limit: "50mb" }),

        expressMiddleware(server, {
            context: async ({ req }) => ({ token: req.headers.token }),
        }),
    );

    await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));
    console.log(`🚀 Server ready at http://localhost:5000/`);
}

bootstrapApolloServer();
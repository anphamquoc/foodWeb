const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const app = express();
const mongoose = require("mongoose");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolver");
const jwt = require("jsonwebtoken");
const userTypeDefs = require("./typeDefs/User");
require("dotenv").config();
// const { merge } = require("lodash");

async function startServer() {
  const apolloServer = new ApolloServer({
    typeDefs: [userTypeDefs, typeDefs],
    // resolvers: _.merge({}, userResolver, resolvers),
    resolvers: resolvers,

    context: async ({ res, req }) => {
      const authHeader = await req.header("Authorization");
      if (!authHeader) {
        return {
          isAuth: false,
        };
      }

      const token = authHeader.split(" ")[1];
      if (!token || token === "") {
        return {
          isAuth: false,
        };
      }
      let decodedToken;
      try {
        decodedToken = jwt.decode(token, "somesecretkey");
        if (!decodedToken || decodedToken.exp <= Date.now() / 1000) {
          return {
            isAuth: false,
          };
        }
      } catch (error) {
        console.log(error.message);
        return {
          isAuth: false,
        };
      }
      return {
        userId: decodedToken.userId,
        role: decodedToken.role,
        isAuth: true,
      };
    },
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.use((req, res) => {
    res.send("Hello world");
  });

  await mongoose.connect(process.env.MONGODB, {
    useUnifiedTopology: true,
  });
  console.log("mongodb connected");
  app.listen(8080, () => console.log(`Server listen at port ${8080}`));
}
// app.use(isAuth);
startServer();

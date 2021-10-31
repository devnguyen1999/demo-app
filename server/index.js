import startApolloServer from "./graphql";
import connectToDB from './db';

(async () => {
  try {
    await connectToDB();
    await startApolloServer();
  } catch {
    console.log("Not able to run GraphQL server.");
  }
})();

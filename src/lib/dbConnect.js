const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.DB_URL;
const dbName = process.env.DB_NAME
export const collections = {
  SERVICES:"services",
  SERVICE_DETAILS:"serviceDetails"
}
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
//cName = collections name
export const dbConnect = (cName) => {
  return client.db(dbName).collection(cName)
}


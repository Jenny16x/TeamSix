require("dotenv").config();
const { MongoClient } = require("mongodb");
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri);

(async () => {
  try {
    await client.connect();

    const dbRole = await client.db("Pitcher_Salaries").command({ hello: 1 });

    console.log(
      `Role of database - Host: ${dbRole.me}  Is primary: ${dbRole.isWritablePrimary}`
    );

    // Accessing ‘Pitcher_Info_DB’ collection object
    const pitcherData = await client.db("Pitcher_Salaries").collection("Pitcher_Info_DB");

    console.log("Collection name: ", pitcherData.collectionName);


    await client.close();
  } catch (e) {
    console.log("Error: ", e.message);
  }
})();
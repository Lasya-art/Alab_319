import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb+srv://lasyagwd:eNXHEiiEDHW1X8MN@cluster0.nsek3.mongodb.net/");

let conn;
try {
  conn = await client.connect();
} catch (e) {
  console.error(e);
}

let db = conn.db("sample_training");

export default db;

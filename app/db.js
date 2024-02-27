import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://lit0goguma:lit0goguma@cluster0.zeevc39.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

const database = client.db("forum");
const post = database.collection("post");

export async function run() {
  try {
    const result = await post.find().toArray();
    console.log(result);
  } finally {
    await client.close();
  }
}

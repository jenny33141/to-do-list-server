const { MongoClient } = require("mongodb");

const getTotal = async () => {
  const uri =
    "mongodb+srv://jenny33141:621162@practice-cluster-0yqk4.mongodb.net/test?retryWrites=true&w=majority";

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  try {
    await client.connect();
    const db = await client.db("joinus");
    const response = await db
      .collection("todo")
      .find()
      .toArray();

    return response;
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

const addItem = async item => {
  const uri =
    "mongodb+srv://jenny33141:621162@practice-cluster-0yqk4.mongodb.net/test?retryWrites=true&w=majority";
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  try {
    await client.connect();
    const db = await client.db("joinus");
    await db
      .collection("todo")
      .insertOne({ item: item, created_at: new Date() });
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

module.exports = {
  getTotal,
  addItem
};

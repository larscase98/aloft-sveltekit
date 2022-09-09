import { MongoClient } from 'mongodb';

/** @type {MongoClient} */
let client;

// rarely use this directly, create helper functions at bottom to use collections.
export const connect = async () => {
  let uri = import.meta.env.VITE_MONGO_URI;

  if (!uri) {
    console.log('ERROR: please add Mongo URI to .env file');
    return;
  }

  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
  }

  return client;
};

export const getDb = async () => (await connect()).db(import.meta.env.VITE_MONGO_DB);
export const getContactFormsCollection = async () => (await getDb()).collection('contactforms');

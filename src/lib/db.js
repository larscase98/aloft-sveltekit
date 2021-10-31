import { MongoClient } from 'mongodb';

import keys from '$lib/keys';

// cache the connection in case of quick subsequent requests, keeps the same connection open
let cached = global.mongoose;
if (!cached) cached = global.mongoose = { conn: null, promise: null };

export const connectToDb = async () => {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    };

    cached.promise = MongoClient.connect(keys.mongoURI, opts)
      .then(client => {
        console.log('Connected to mongo');
        return { client, db: client.db(keys.mongodb) };
      })
      .catch(err => {
        console.log('Error connecting to mongo:', err);
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};

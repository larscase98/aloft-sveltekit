import { connectToDb } from '$lib/db';

export const post = async request => {
  const b = JSON.parse(request.body);

  const dbConn = await connectToDb();
  const db = dbConn.db;

  if (request.body && b) {
    const form = {
      name: b.name,
      email: b.email,
      ...(b.subject && { subject: b.subject }), //conditionally add prop
      message: b.message,
      date: new Date()
    };

    const insertRes = await db.collection('contactforms').insertOne(form);

    console.log(insertRes);

    return { body: String(!!insertRes) };
  }

  return { status: 400, body: String(false) };
};

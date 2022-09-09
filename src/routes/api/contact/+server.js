import { error } from '@sveltejs/kit';

import { getContactFormsCollection } from '$lib/db';

const MIN_MSG_LEN = 8;

/** @type {import('./$types').RequestHandler} */
export const POST = async ({ request }) => {
  const b = await request.json();

  if (request.body && b) {
    let message = String(b.message).trim();

    if (message.length <= MIN_MSG_LEN)
      throw error(400, `Please add a message longer than ${MIN_MSG_LEN} characters.`);

    const form = {
      name: String(b.name),
      email: String(b.email),
      ...(b.subject && { subject: String(b.subject) }),
      message,
      date: new Date()
    };

    try {
      const collection = await getContactFormsCollection();
      await collection.insertOne(form);

      return new Response(
        JSON.stringify({
          message: 'Success! Thanks for your message, we will get back to you soon.'
        }),
        { status: 200 }
      );
    } catch (err) {
      console.log(err);
      console.log('^ error saving contact form ^');

      throw error(500, 'Server error, please try again later.');
    }
  }

  throw error(400, 'Must pass correct POST body to this endpoint');
};

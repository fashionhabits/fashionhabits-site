// netlify/functions/create-checkout.js
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  try {
    const { line_items } = JSON.parse(event.body || '{}');
    if (!line_items || !Array.isArray(line_items) || line_items.length === 0) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing line_items' }) };
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items,
      // TODO: change these URLs to your real domain
      success_url: 'https://fashionhabits.example/success',
      cancel_url: 'https://fashionhabits.example/cancel'
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: session.url })
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Server error: ' + err.message })
    };
  }
};

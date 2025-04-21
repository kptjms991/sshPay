import { NextApiRequest, NextApiResponse } from 'next';
import Binance from 'binance-api-node';

const client = Binance({
  apiKey: process.env.BINANCE_API_KEY!,
  apiSecret: process.env.BINANCE_API_SECRET!,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { symbol, quantity } = req.body;

    try {
      const order = await client.order({
        symbol,
        side: 'BUY',
        type: 'MARKET',
        quantity,
      });
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
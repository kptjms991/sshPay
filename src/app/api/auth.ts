import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY || 'default_secret_key';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { nid, phoneNumber, password } = req.body;

    if (!nid || !phoneNumber || !password) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Simulate user lookup and password hashing
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Generate JWT token
    const token = jwt.sign({ nid, phoneNumber }, SECRET_KEY, { expiresIn: '1h' });

    return res.status(200).json({ token, hashedPassword });
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
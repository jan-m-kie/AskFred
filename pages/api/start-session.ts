import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { input } = req.body;

  // Simuliere eine Session-Erstellung mit zufälliger ID
  const sessionId = Math.random().toString(36).substring(2, 15);
  const message = `Session started with input: ${input}. Session ID: ${sessionId}`;

  res.status(200).json({ message });
}

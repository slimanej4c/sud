import fs from 'fs';
import Cookies from "js-cookie";
const cookieValue = Cookies.get('cok');
export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const fileContent = await fs.promises.readFile('pages/api/log.txt', 'utf-8');
      res.status(200).json({ content: cookieValue  });
    } catch (error) {
      console.error('Error reading file:', error);
      res.status(500).json({ error: 'Error reading file' });
    }
  } else if (req.method === 'POST') {
    try {
      await fs.promises.writeFile('pages/api/log.txt', req.body.content);
      res.status(200).json({ message: 'File written successfully' });
    } catch (error) {
      console.error('Error writing file:', error);
      res.status(500).json({ error: 'Error writing file' });
    }
  } else {
    res.status(404).json({ error: 'Invalid request method' });
  }
}
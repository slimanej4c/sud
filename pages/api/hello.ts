// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cookies from "js-cookie";

export default function handler(req, res) {
  const cookieValue = Cookies.get();
  console.log('hiiiiiiii helo',cookieValue)
  //const cookie = req.cookies.get("token")?.value;
  //console.log(cookie);
  res.status(200).json({ name: cookieValue})
}
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handle(
  res: NextApiResponse,
  req: NextApiRequest,
) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.TRANSPORTER_MAIL,
      pass: process.env.TRANSPORTER_PASS,
    },
  });
  const info = await transporter.sendMail({
    from: req.body.email,
    to: process.env.USER_MAIL,
    replyTo: req.body.email,
    subject: `Contato através do website: ${process.env.HOST}`,
    text: req.body.message,
    html: `<b>${req.body.name}</b><br><br>${req.body.message}`,
  });

  res.send(info);
}

import {Router} from "express";
import {TOptions} from "./TOptions";
import {createTransport} from "nodemailer";

export function createRouter({transport, from}: TOptions): Router {
  const transporter = createTransport(transport);
  const router = Router();

  router.post("/", async (req, res) => {
    const {to, subject, text, html} = req.body;
    const info = await transporter.sendMail({
      from,
      to,
      subject,
      text,
      html,
    });
    res.json(info);
  });

  return router;
}

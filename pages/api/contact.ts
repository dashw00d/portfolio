import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

interface ContactPayload {
  name?: string;
  email?: string;
  company?: string;
  project?: string;
  timeline?: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
}

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  CONTACT_TO,
  CONTACT_FROM,
  CONTACT_BCC,
} = process.env;

function missingMailConfig() {
  return !SMTP_HOST || !SMTP_PORT || !(SMTP_USER && SMTP_PASS) || !(CONTACT_TO || CONTACT_FROM || SMTP_USER);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, message: "Method not allowed." });
  }

  const { name, email, company, project, timeline }: ContactPayload = req.body ?? {};

  if (!name || !email || !project) {
    return res
      .status(422)
      .json({ success: false, message: "Name, email, and project details are required." });
  }

  if (missingMailConfig()) {
    console.warn("SMTP environment variables are not fully configured. Contact form submission was logged instead.");
    console.info({ name, email, company, project, timeline, submittedAt: new Date().toISOString() });
    return res.status(200).json({ success: true, message: "Message received locally. Configure SMTP to forward it." });
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT ?? 587),
    secure: Number(SMTP_PORT ?? 587) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const recipient = CONTACT_TO ?? SMTP_USER ?? CONTACT_FROM ?? email;
  const fromAddress = CONTACT_FROM ?? SMTP_USER ?? "portfolio-contact@localhost";

  const subject = `New inquiry from ${name}`;
  const textBody = `Name: ${name}
Email: ${email}
Company: ${company ?? "--"}
Timeline: ${timeline ?? "--"}

Project details:
${project}
`;

  const htmlBody = `
    <h2 style="margin:0 0 16px;font-size:20px;font-family:Inter,Arial,sans-serif;color:#063533;">New inquiry</h2>
    <table style="width:100%;border-collapse:collapse;font-family:Inter,Arial,sans-serif;color:#1f2933;font-size:14px;">
      <tbody>
        <tr>
          <td style="padding:6px 0;font-weight:600;width:110px;">Name</td>
          <td style="padding:6px 0;">${name}</td>
        </tr>
        <tr>
          <td style="padding:6px 0;font-weight:600;">Email</td>
          <td style="padding:6px 0;">${email}</td>
        </tr>
        <tr>
          <td style="padding:6px 0;font-weight:600;">Company</td>
          <td style="padding:6px 0;">${company ?? "&mdash;"}</td>
        </tr>
        <tr>
          <td style="padding:6px 0;font-weight:600;">Timeline</td>
          <td style="padding:6px 0;">${timeline ?? "&mdash;"}</td>
        </tr>
      </tbody>
    </table>
    <div style="margin-top:20px;padding:16px;background:#f5f7fa;border-radius:12px;line-height:1.6;color:#1f2933;">
      <p style="margin:0 0 8px;font-weight:600;">Project details</p>
      <p style="margin:0;white-space:pre-line;">${project}</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: fromAddress,
      to: recipient,
      bcc: CONTACT_BCC,
      replyTo: email,
      subject,
      text: textBody,
      html: htmlBody,
    });

    return res.status(200).json({ success: true, message: "Message sent successfully." });
  } catch (error) {
    console.error("Contact form mail error:", error);
    return res.status(500).json({ success: false, message: "Failed to send email." });
  }
}

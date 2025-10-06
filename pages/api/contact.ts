import type { NextApiRequest, NextApiResponse } from "next";

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

const WEBHOOK_URL = process.env.CONTACT_WEBHOOK_URL;

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

  const payload = {
    name,
    email,
    company: company ?? "",
    project,
    timeline: timeline ?? "",
    submittedAt: new Date().toISOString(),
    source: "portfolio-contact-form",
  };

  if (!WEBHOOK_URL) {
    console.warn(
      "CONTACT_WEBHOOK_URL not configured. Configure it to forward contact form submissions."
    );
    console.info("Received contact submission:", payload);
    return res
      .status(200)
      .json({
        success: true,
        message: "Message received locally. Configure CONTACT_WEBHOOK_URL to forward it.",
      });
  }

  try {
    const webhookResponse = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!webhookResponse.ok) {
      const text = await webhookResponse.text();
      console.error("Failed to forward contact submission:", text);
      return res
        .status(502)
        .json({ success: false, message: "Unable to forward the message right now." });
    }

    return res
      .status(200)
      .json({ success: true, message: "Message sent successfully." });
  } catch (error) {
    console.error("Contact form error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Unexpected error while sending your message." });
  }
}

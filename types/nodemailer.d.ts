declare module 'nodemailer' {
  interface TransportAuth {
    user?: string;
    pass?: string;
  }

  interface TransportOptions {
    host?: string;
    port?: number;
    secure?: boolean;
    auth?: TransportAuth;
  }

  interface MailAddress {
    name?: string;
    address?: string;
  }

  type AddressLike = string | string[] | MailAddress | MailAddress[];

  interface SendMailOptions {
    from?: AddressLike;
    to?: AddressLike;
    cc?: AddressLike;
    bcc?: AddressLike;
    replyTo?: AddressLike;
    subject?: string;
    text?: string;
    html?: string;
  }

  interface SentMessageInfo {
    messageId: string;
    accepted: Array<string | MailAddress>;
    rejected: Array<string | MailAddress>;
    pending?: Array<string | MailAddress>;
    response: string;
    envelope?: {
      from?: string;
      to?: string[];
    };
  }

  interface Transporter {
    sendMail(mail: SendMailOptions): Promise<SentMessageInfo>;
  }

  export function createTransport(options: TransportOptions): Transporter;
}

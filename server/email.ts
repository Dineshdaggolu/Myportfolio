import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY);

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  try {
    await mailService.send({
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text,
      html: params.html,
    });
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}

export function createContactNotificationEmail(contactData: {
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string | Date;
}) {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
      <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 30px; border-radius: 10px; color: white;">
        <h1 style="color: #00d4aa; margin: 0 0 20px 0;">New Contact Message from Portfolio</h1>
        
        <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #00d4aa; margin: 0 0 15px 0;">Contact Details</h2>
          <p><strong>Name:</strong> ${contactData.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${contactData.email}" style="color: #00d4aa;">${contactData.email}</a></p>
          <p><strong>Subject:</strong> ${contactData.subject}</p>
          <p><strong>Date:</strong> ${new Date(contactData.createdAt).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}</p>
        </div>
        
        <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #00d4aa; margin: 0 0 15px 0;">Message</h2>
          <p style="line-height: 1.6; white-space: pre-wrap;">${contactData.message}</p>
        </div>
        
        <div style="text-center; margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.2);">
          <p style="color: #a0a0a0; font-size: 14px;">
            This email was sent automatically from your portfolio contact form.
          </p>
        </div>
      </div>
    </div>
  `;

  const text = `
New Contact Message from Portfolio

From: ${contactData.name} (${contactData.email})
Subject: ${contactData.subject}
Date: ${new Date(contactData.createdAt).toLocaleDateString()}

Message:
${contactData.message}

---
This email was sent automatically from your portfolio contact form.
  `;

  return { html, text };
}
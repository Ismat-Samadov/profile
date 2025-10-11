// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const { name, email, message } = await request.json();

    // Validate the required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    console.log('Contact form submission received:', { name, email });

    const myEmail = process.env.NOTIFICATION_TO_EMAIL || 'ismetsemedov@gmail.com';

    // Send notification email to you
    await sendEmail({
      to: myEmail,
      subject: `New contact message from ${name}`,
      text: `You received a new contact message from your portfolio website:

Name: ${name}
Email: ${email}
Message:

${message}

Sent at: ${new Date().toLocaleString()}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact Message</h2>
          <p>You received a new contact message from your portfolio website:</p>

          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>

          <p style="color: #6b7280; font-size: 12px;">Sent at: ${new Date().toLocaleString()}</p>
        </div>
      `
    });

    console.log('Notification email sent to you');

    // Send confirmation email to the user
    await sendEmail({
      to: email,
      subject: 'Thank you for contacting me!',
      text: `Hi ${name},

Thank you for reaching out! I've received your message and will get back to you as soon as possible.

Your message:
${message}

Best regards,
Ismat Samadov
Machine Learning Engineer
https://ismat.pro
ismetsemedov@gmail.com`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Thank you for contacting me!</h2>

          <p>Hi ${name},</p>

          <p>Thank you for reaching out! I've received your message and will get back to you as soon as possible.</p>

          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Your message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>

          <p>Best regards,</p>
          <p><strong>Ismat Samadov</strong><br>
          Machine Learning Engineer<br>
          <a href="https://ismat.pro" style="color: #2563eb;">https://ismat.pro</a><br>
          <a href="mailto:ismetsemedov@gmail.com" style="color: #2563eb;">ismetsemedov@gmail.com</a></p>
        </div>
      `
    });

    console.log('Confirmation email sent to user');

    // Return a success response
    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending contact message:', error);

    // Return an error response
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or contact directly at ismetsemedov@gmail.com' },
      { status: 500 }
    );
  }
}
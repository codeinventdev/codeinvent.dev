import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, service, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Create transporter using domain email SMTP
    // Configure with your domain's SMTP settings
    const smtpPort = parseInt(process.env.SMTP_PORT || '587');
    const isSecure = process.env.SMTP_SECURE === 'true';
    
    // Validate port/security combination
    if (smtpPort === 465 && !isSecure) {
      console.warn('Warning: Port 465 typically requires SMTP_SECURE=true');
    }
    if (smtpPort === 587 && isSecure) {
      console.warn('Warning: Port 587 typically requires SMTP_SECURE=false (uses STARTTLS)');
    }
    
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.codeinvent.dev',
      port: smtpPort,
      secure: isSecure, // true for 465 (SSL), false for 587 (STARTTLS)
      auth: {
        user: process.env.EMAIL_USER || 'dev@codeinvent.dev',
        pass: process.env.EMAIL_PASS || 'your-email-password'
      },
      tls: {
        rejectUnauthorized: false, // Accept self-signed certificates if needed
        ciphers: 'SSLv3' // Fallback for older servers
      },
      // Connection timeout
      connectionTimeout: 60000,
      greetingTimeout: 30000,
      socketTimeout: 60000
    });

    // Email content for CodeInvent
    const mailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: 'dev@codeinvent.dev', // Your business email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: 'JetBrains Mono', monospace; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0a0a0a; color: #00ff41; border: 1px solid #00ff41;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #00ff41; font-size: 24px; margin: 0;">CodeInvent</h1>
            <p style="color: #00ff41; margin: 5px 0;">&gt; INVENT_CODE.INNOVATE_FUTURE</p>
          </div>
          
          <div style="background-color: #1a1a1a; padding: 20px; border: 1px solid #333; margin-bottom: 20px;">
            <h2 style="color: #00ff41; margin-top: 0;">New Contact Form Submission</h2>
            
            <div style="margin: 15px 0;">
              <strong style="color: #00ff41;">Name:</strong>
              <span style="color: #ffffff; margin-left: 10px;">${name}</span>
            </div>
            
            <div style="margin: 15px 0;">
              <strong style="color: #00ff41;">Email:</strong>
              <span style="color: #ffffff; margin-left: 10px;">${email}</span>
            </div>
            
            ${phone ? `
            <div style="margin: 15px 0;">
              <strong style="color: #00ff41;">Phone:</strong>
              <span style="color: #ffffff; margin-left: 10px;">${phone}</span>
            </div>
            ` : ''}
            
            ${service ? `
            <div style="margin: 15px 0;">
              <strong style="color: #00ff41;">Service:</strong>
              <span style="color: #ffffff; margin-left: 10px;">${service}</span>
            </div>
            ` : ''}
            
            <div style="margin: 15px 0;">
              <strong style="color: #00ff41;">Message:</strong>
              <div style="color: #ffffff; margin-top: 10px; padding: 15px; background-color: #0a0a0a; border: 1px solid #333; white-space: pre-wrap;">${message}</div>
            </div>
          </div>
          
          <div style="text-align: center; font-size: 12px; color: #666;">
            <p>This email was sent from the CodeInvent website contact form.</p>
            <p>Please respond to the customer at: ${email}</p>
          </div>
        </div>
      `
    };

    // Auto-reply email to the customer
    const autoReplyOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: email,
      subject: 'Thank you for contacting CodeInvent!',
      html: `
        <div style="font-family: 'JetBrains Mono', monospace; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0a0a0a; color: #00ff41; border: 1px solid #00ff41;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #00ff41; font-size: 24px; margin: 0;">CodeInvent</h1>
            <p style="color: #00ff41; margin: 5px 0;">&gt; INVENT_CODE.INNOVATE_FUTURE</p>
          </div>
          
          <div style="background-color: #1a1a1a; padding: 20px; border: 1px solid #333; margin-bottom: 20px;">
            <h2 style="color: #00ff41; margin-top: 0;">Thank you for your message!</h2>
            
            <p style="color: #ffffff; line-height: 1.6;">
              Hi ${name},
            </p>
            
            <p style="color: #ffffff; line-height: 1.6;">
              Thank you for reaching out to CodeInvent! We have received your message and will get back to you within 24 hours.
            </p>
            
            <p style="color: #ffffff; line-height: 1.6;">
              Our team is excited to discuss your project and help bring your ideas to life with cutting-edge technology solutions.
            </p>
            
            <div style="margin: 20px 0; padding: 15px; background-color: #0a0a0a; border: 1px solid #333;">
              <p style="color: #00ff41; margin: 0; font-weight: bold;">Your message:</p>
              <p style="color: #ffffff; margin: 10px 0 0 0; white-space: pre-wrap;">"${message}"</p>
            </div>
            
            <p style="color: #ffffff; line-height: 1.6;">
              Best regards,<br>
              <strong style="color: #00ff41;">The CodeInvent Team</strong>
            </p>
          </div>
          
          <div style="text-align: center; font-size: 12px; color: #666;">
            <p>CodeInvent - Premium Web & Mobile App Development</p>
            <p>Email: dev@codeinvent.dev | Phone: +91 7020615995</p>
          </div>
        </div>
      `
    };

    // Send both emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(autoReplyOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}

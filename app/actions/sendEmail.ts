'use server'

import { transporter } from '../lib/email';
import { FormData } from "@/app/lib/schema";

export async function sendEmail(data: FormData) {
  try {
    const { name, email, phone, services, message } = data;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENT,
      replyTo: email,
      subject: `New ${services} Request from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone.countryCode} ${phone.number}
        Service: ${services}
        Message: ${message}
      `,
      html: `
        <h2>New Service Request</h2>
        <p><strong>Service Type:</strong> ${services}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone.countryCode} ${phone.number}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    return { success: true, message: 'Your message has been sent successfully!' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Failed to send message. Please try again.' };
  }
}
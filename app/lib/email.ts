import nodemailer from 'nodemailer';

if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
  throw new Error("Missing EMAIL_USER or EMAIL_PASSWORD in environment variables");
}

export const transporter = nodemailer.createTransport({
  host: "smtp.dondominio.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

transporter.verify((error, success) => {
  if (error) {
    console.error("Error verifying transporter:", error);
  } else {
    console.log("Transporter is ready to send emails.");
  }
});
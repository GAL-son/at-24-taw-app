import nodemailer from 'nodemailer';
import dotenv from "dotenv";
dotenv.config();

export const sendMail = async (from: string, to: string, subject: string, html: string) => {
    const MAIL_USERNAME = process.env.MAIL_USERNAME;
    const MAIL_PASSWORD = process.env.MAIL_PASSWORD;
    const MAIL_HOST = process.env.MAIL_HOST

    if(!(MAIL_PASSWORD && MAIL_USERNAME && MAIL_HOST)) {
        throw new Error("Missing email credentials");
    }

    const transporter = nodemailer.createTransport({
        service: MAIL_HOST,
        auth: {
            user: MAIL_USERNAME,
            pass: MAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: from,
        to: to,
        subject: subject,
        html: html
    };

    transporter.sendMail(mailOptions, (error: any, info: any)=> {
        if (error) {
            console.error(error);
            throw new Error(error)
        } else {
            console.info('Email sent: ' + info.response);
        }
    });
}
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
    const res = await request.json();
    const { name, senderemail, subject, msg } = res;
    let status;
    if (!name || !senderemail || !subject || !msg) {
        status = "fail";
    } else if (name === "" || senderemail === "" || subject === "" || msg === "") {
        status = "notfill";
    } else {
        status = "success";
        const transporter = nodemailer.createTransport({
            port: 465,
            host: "smtp.gmail.com",
            auth: {
                user: process.env.AUTH_USER,
                pass: process.env.AUTH_PASS,
            },
            secure: true,
        })
        await new Promise((resolve, reject) => {
            // verify connection configuration
            transporter.verify(function (error, success) {
                if (error) {
                    console.log(error);
                    reject(error);
                } else {
                    console.log("Server is ready to take our messages");
                    resolve(success);
                }
            });
        });
        const mailData = {
            from: `${name} <"${senderemail}">`,
            to: "ahmed.saeed.12855@gmail.com",
            replyTo: senderemail,
            subject: subject,
            html: `<div style='font-size:25px;'>${msg}</div><p style='font-weight: 900;font-size: 30px;'>Sent from: ${senderemail}</p>`
        }
        await new Promise((resolve, reject) => {
            // send mail
            transporter.sendMail(mailData, (err, info) => {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    console.log(info);
                    resolve(info);
                }
            });
        });
    }
    return NextResponse.json({ status: status })
}
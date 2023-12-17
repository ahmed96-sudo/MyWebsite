import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
    require('dotenv').config()
    const res = await request.json()
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
                user: "ahmed.saeed.12855@gmail.com",
                pass: "yyog gbqh eimm xxix",
            },
            secure: true,
        })
        const mailData = {
            from: `${name} <"${senderemail}">`,
            to: process.env.myemail,
            replyTo: senderemail,
            subject: subject,
            html: `<div style='font-size:25px;'>${msg}</div><p style='font-weight: 900;font-size: 30px;'>Sent from: ${senderemail}</p>`
        }
        transporter.sendMail(mailData, function (err, info) {
            if(err)
                console.log(err)
            else
                console.log(info)
        });
    }
    return NextResponse.json({ status: status })
}
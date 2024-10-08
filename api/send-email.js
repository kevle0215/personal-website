const nodemailer = require("nodemailer");

export default async function handler(req, res) {

    if (req.method === "POST") {
        const { name, email, reason } = req.body;



        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `New message from ${name} ${email}`,
            text: reason,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ status: "Email sent successfully!" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to send email." });
        }
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
}
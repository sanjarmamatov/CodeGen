import nodemailer from 'nodemailer'

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ksula0155@gmail.com',
        pass: 'Gmail123Darkside', // TODO: replace this with global object reference
    },
})

function createEmail(sub, email, html, cb) {
    const mailOptions = {
        from: '"Magicians" <coders@codeGen.com>', // sender address
        to: email, // list of receivers
        subject: sub, // Subject line
        html, // html body
    }
    transporter.sendMail(mailOptions, (error, info) => {
      cb(error, info)
    })
}

export default createEmail

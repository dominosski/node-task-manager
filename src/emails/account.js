const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = process.env.mailApiKey

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'domix852@gmail.com',
        subject: 'Welcome to the app',
        text: `Dear ${name}, thank you for joining our app. Let's get to work.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'domix852@gmail.com',
        subject: 'Goodbye from the app',
        text: `Dear ${name}, we're sorry to hear you're leaving us. Hope to see you soon again.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
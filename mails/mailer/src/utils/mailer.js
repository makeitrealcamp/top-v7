const nodemailer = require('nodemailer');

exports.transporter = nodemailer.createTransport({
  host: 'smtp.aol.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  }
})

exports.verify = async (transporter) => {
  const connection = await transporter.verify()
  if(connection) {
    console.log('Sever is ready to take our messages')
  }
}

exports.welcome = (user) => {
  return {
    from: `"${process.env.MAIL_USERNAME}" <${process.env.MAIL_USER}>`,
    to: user.email,
    subject: 'Welcome',
    html: `
      <div>
        <h1>Welcome ${user.name}</h1>
      </div>
    `,
    text: `Welcome\n\n${user.name}`,
  }
}

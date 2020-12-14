const nodemailer = require('nodemailer');

(async () => {
  const account = await nodemailer.createTestAccount()

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: account.user,
      pass: account.pass,
    }
  })

  // const status = await transporter.verify()
  // console.log(status)
  const user = { email: 'maria@test.com', name: 'Maria' }

  const styles = {
    container: 'background-color: blue; border: 1px solid black; color: white;'
  }

  const preview = await transporter.sendMail({
    from: '"Simón Hoyos" <simon@test.com>',
    to: user.email,
    subject: 'Welcome',
    html: `
      <div style="${styles.container}">
        <h1>Welcome</h1>
        <p>hello ${user.name}</p>
      </div>
    `,
    text: `Welcome\nhelo ${user.name}`
  })

  console.log(nodemailer.getTestMessageUrl(preview))
})()

import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: ['barclayrexcigars@gmail.com', 'rex@superdistros.com'], // Your email where you'll receive emails
      from: 'info@barclayrex.com', // your website email address here
      subject: `Barclay Rex : New Reservation`,
      html: `<h2 style="text-align: center">New Reservation from ${req.body.email}</h2><br /><br /><h3>Customer Name: ${req.body.name}<br />
      Customer Phone Number: ${req.body.phone}<br />
      Email: ${req.body.email}<br />
      Party Size: ${req.body.partySize}<br />
      Date: ${req.body.date?.toLocaleString()}</h3>`
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
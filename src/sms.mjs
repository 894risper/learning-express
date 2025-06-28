// sms.js or inside your existing server.js
import express from "express";
import africastalking from "africastalking";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Initialize Africa's Talking
const africasTalking = africastalking({
  apiKey: "atsk_4b75a61a57a1c9cb1646c9b96033b87eb05f6b7881217d6e85a7f58dc0dc9c2198199844",      // Replace with your sandbox/live API key
  username: "sandbox"          // Use "sandbox" or your live username
});

const sms = africasTalking.SMS;

// Route to send SMS
app.post('/api/send-sms', async (req, res) => {
  const { to, message } = req.body;

  try {
    const response = await sms.send({
      to: [`+${to}`],           // e.g. +2547XXXXXXXX
      message: message,
      from: "AFRICASTKNG"       // This is the approved sandbox sender name
    });
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

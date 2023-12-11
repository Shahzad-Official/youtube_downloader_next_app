import axios from "axios";

interface ContactUs {
  subject: string;
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}
export default async function sendEmail({
  subject,
  firstName,
  lastName,
  email,
  message,
}: ContactUs) {
  const body = JSON.stringify({
    subject,
    firstName,
    lastName,
    email,
    message,
  });
  try {
    const response = await axios.post(
      `https://youtube-downloaders.com/api/contact-us`,
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.data;
    return data;
  } catch (err) {
    console.log("send email error => " + err);
  }
}

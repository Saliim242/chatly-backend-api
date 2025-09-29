import { resendClient, sender } from "../utils/resend.email.js";
import { createWelcomeEmailTemplate } from "../emails/email.temple.js";

export const sendWelcomeEmail = async (email, name, clientUl) => {
  try {
    const { data, error } = await resendClient.emails.send({
      from: `${sender.name} <${sender.email}>`,
      to: email,
      subject: `Welcome to Chattify`,
      html: createWelcomeEmailTemplate(name, clientUl),
    });

    if (error) {
      console.log(`Error sending email: ${error.message}`);
      throw new Error(`Error sending email: ${error.message}`);
    }
    console.log(`Email sent successfully: ${data}`);
  } catch (error) {
    console.log(`Error sending email: ${error.message}`);
    throw new Error(`Error sending email: ${error.message}`);
  }
};

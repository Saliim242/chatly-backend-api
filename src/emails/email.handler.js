import { Resend } from "resend";

const api_key = process.env.RESEND_API_KEY;

// Initialize the Resend client with your API key
const resend = new Resend(api_key);

(async function () {
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["delivered@resend.dev"],
    subject: "Hello World",
    html: "<strong>It works!</strong>",
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
})();

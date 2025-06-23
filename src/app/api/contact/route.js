import { sendMail } from "@/util/mailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      platform,
      category,
      description,
    } = body;

    // Email to Client
    const clientHtml = `
      <h2>Thank you for choosing Phenomenal Productions!</h2>
      <p>Dear ${firstName},</p>
      <p>We have received your request regarding a new ${platform} project.</p>
      <p>Our team will reach out to you shortly.</p>
      <br />
      <p><strong>Phenomenal Productions</strong></p>
    `;

    await sendMail({
      to: email,
      subject: "Thanks for reaching out - Phenomenal Productions",
      html: clientHtml,
    });

    // Email to Provider
    const providerHtml = `
      <h2>New Client Request</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Platform:</strong> ${platform}</p>
      <p><strong>Category:</strong> ${category}</p>
      <p><strong>Description:</strong> ${description}</p>
    `;

    await sendMail({
      to: "abiodunojo453@gmail.com",
      subject: "New Client Form Submission",
      html: providerHtml,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}

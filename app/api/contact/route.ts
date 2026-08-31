import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing");

      return NextResponse.json(
        {
          error: "Server configuration error.",
        },
        {
          status: 500,
        }
      );
    }

    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const subject = String(body.subject || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          error: "All fields are required.",
        },
        {
          status: 400,
        }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          error: "Please enter a valid email address.",
        },
        {
          status: 400,
        }
      );
    }

    if (
      name.length > 100 ||
      email.length > 200 ||
      subject.length > 200 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        {
          error: "One or more fields are too long.",
        },
        {
          status: 400,
        }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Teynur Yuseinov <website@teynuryuseinov.be>",
      to: ["contact@teynuryuseinov.be"],

      replyTo: email,

      subject: `[Portfolio] ${subject}`,

      html: `
        <!DOCTYPE html>
        <html>
          <body
            style="
              margin: 0;
              padding: 0;
              background: #f4f4f4;
              font-family: Arial, Helvetica, sans-serif;
              color: #111111;
            "
          >
            <div
              style="
                max-width: 640px;
                margin: 0 auto;
                padding: 40px 20px;
              "
            >
              <div
                style="
                  background: #ffffff;
                  padding: 32px;
                  border: 1px solid #dddddd;
                "
              >
                <p
                  style="
                    margin: 0 0 8px;
                    font-size: 12px;
                    color: #777777;
                  "
                >
                  Portfolio contact form
                </p>

                <h1
                  style="
                    margin: 0 0 32px;
                    font-size: 28px;
                    line-height: 1.2;
                  "
                >
                  New message
                </h1>

                <div style="margin-bottom: 24px;">
                  <p
                    style="
                      margin: 0 0 6px;
                      font-size: 12px;
                      color: #777777;
                    "
                  >
                    Name
                  </p>

                  <p
                    style="
                      margin: 0;
                      font-size: 16px;
                    "
                  >
                    ${escapeHtml(name)}
                  </p>
                </div>

                <div style="margin-bottom: 24px;">
                  <p
                    style="
                      margin: 0 0 6px;
                      font-size: 12px;
                      color: #777777;
                    "
                  >
                    Email
                  </p>

                  <p
                    style="
                      margin: 0;
                      font-size: 16px;
                    "
                  >
                    <a
                      href="mailto:${escapeHtml(email)}"
                      style="color: #111111;"
                    >
                      ${escapeHtml(email)}
                    </a>
                  </p>
                </div>

                <div style="margin-bottom: 24px;">
                  <p
                    style="
                      margin: 0 0 6px;
                      font-size: 12px;
                      color: #777777;
                    "
                  >
                    Subject
                  </p>

                  <p
                    style="
                      margin: 0;
                      font-size: 16px;
                    "
                  >
                    ${escapeHtml(subject)}
                  </p>
                </div>

                <div>
                  <p
                    style="
                      margin: 0 0 10px;
                      font-size: 12px;
                      color: #777777;
                    "
                  >
                    Message
                  </p>

                  <p
                    style="
                      margin: 0;
                      font-size: 16px;
                      line-height: 1.7;
                      white-space: pre-wrap;
                    "
                  >
                    ${escapeHtml(message)}
                  </p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,

      text: `
New portfolio message

Name:
${name}

Email:
${email}

Subject:
${subject}

Message:
${message}
      `.trim(),
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          error: error.message || "Could not send message.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        id: data?.id,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        error: "Something went wrong while sending the message.",
      },
      {
        status: 500,
      }
    );
  }
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
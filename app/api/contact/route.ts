import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing");

      return NextResponse.json(
        {
          error: "RESEND_API_KEY is missing",
        },
        {
          status: 500,
        }
      );
    }

    const body = await request.json();

    const {
      name,
      email,
      subject,
      message,
    } = body;

    if (
      !name ||
      !email ||
      !subject ||
      !message
    ) {
      return NextResponse.json(
        {
          error: "All fields are required.",
        },
        {
          status: 400,
        }
      );
    }

    const { data, error } =
      await resend.emails.send({
        from: "Portfolio <onboarding@resend.dev>",

        to: [
          "contact@teynuryuseinov.be",
        ],

        replyTo: email,

        subject: `[Portfolio] ${subject}`,

        html: `
          <div
            style="
              font-family: Arial, sans-serif;
              max-width: 600px;
              margin: 0 auto;
              line-height: 1.6;
            "
          >
            <h2>
              New portfolio message
            </h2>

            <p>
              <strong>Name</strong><br>
              ${escapeHtml(name)}
            </p>

            <p>
              <strong>Email</strong><br>
              ${escapeHtml(email)}
            </p>

            <p>
              <strong>Subject</strong><br>
              ${escapeHtml(subject)}
            </p>

            <p>
              <strong>Message</strong>
            </p>

            <p style="white-space: pre-wrap;">
              ${escapeHtml(message)}
            </p>
          </div>
        `,
      });

    if (error) {
      console.error(
        "RESEND ERROR:",
        error
      );

      return NextResponse.json(
        {
          error: error.message,
          details: error,
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error(
      "CONTACT API ERROR:",
      error
    );

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      {
        status: 500,
      }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
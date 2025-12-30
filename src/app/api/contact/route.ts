import { createTransport } from "nodemailer";
import type { Transporter } from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

// Konfiguracja transporter Gmail
const createTransporter = (): Transporter | null => {
  const email = process.env.GMAIL_EMAIL;
  const password = process.env.GMAIL_APP_PASSWORD;

  if (!email || !password) {
    return null;
  }

  return createTransport({
    service: "gmail",
    auth: {
      user: email,
      pass: password,
    },
  });
};

export async function POST(request: NextRequest) {
  try {
    const transporter = createTransporter();

    if (!transporter) {
      console.error(
        "Gmail nie jest skonfigurowany - brak GMAIL_EMAIL lub GMAIL_APP_PASSWORD"
      );
      return NextResponse.json(
        {
          error:
            "Serwis email nie jest skonfigurowany. Skontaktuj się z administratorem.",
        },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { name, email, subject, message } = body;

    // Walidacja
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Wszystkie pola są wymagane" },
        { status: 400 }
      );
    }

    // Walidacja emaila
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Nieprawidłowy adres email" },
        { status: 400 }
      );
    }

    // Funkcja do escape'owania HTML (zabezpieczenie przed XSS)
    const escapeHtml = (text: string): string => {
      const map: { [key: string]: string } = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      };
      return text.replace(/[&<>"']/g, (m: string) => map[m] || m);
    };

    // Escape danych wejściowych
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = message
      .replace(/\n/g, "<br>")
      .replace(/[&<>"']/g, (m: string) => {
        const map: { [key: string]: string } = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#039;",
        };
        return map[m] || m;
      });

    // Wysyłanie emaila przez Gmail SMTP
    const info = await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_EMAIL}>`,
      to: "urbanskisoftware@gmail.com",
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #c084fc 100%);
                color: white;
                padding: 20px;
                border-radius: 8px 8px 0 0;
                margin-bottom: 0;
              }
              .content {
                background: #f9fafb;
                padding: 30px;
                border-radius: 0 0 8px 8px;
                border: 1px solid #e5e7eb;
                border-top: none;
              }
              .field {
                margin-bottom: 20px;
              }
              .label {
                font-weight: 600;
                color: #7c3aed;
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 5px;
              }
              .value {
                color: #1f2937;
                font-size: 16px;
              }
              .message-box {
                background: white;
                padding: 15px;
                border-radius: 6px;
                border-left: 4px solid #a855f7;
                margin-top: 10px;
              }
              .footer {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e5e7eb;
                font-size: 12px;
                color: #6b7280;
                text-align: center;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">📧 Nowa wiadomość z portfolio</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Od</div>
                <div class="value">${safeName} (${safeEmail})</div>
              </div>
              
              <div class="field">
                <div class="label">Temat</div>
                <div class="value">${safeSubject}</div>
              </div>
              
              <div class="field">
                <div class="label">Wiadomość</div>
                <div class="message-box">
                  ${safeMessage}
                </div>
              </div>
              
              <div class="footer">
                <p>Ta wiadomość została wysłana z formularza kontaktowego na portfolio.</p>
                <p>Możesz odpowiedzieć bezpośrednio na ten email.</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
Nowa wiadomość z portfolio

Od: ${name} (${email})
Temat: ${subject}

Wiadomość:
${message}

---
Ta wiadomość została wysłana z formularza kontaktowego na portfolio.
Możesz odpowiedzieć bezpośrednio na ten email.
      `,
    });

    console.log("Email wysłany pomyślnie:", info.messageId);

    return NextResponse.json(
      { message: "Wiadomość została wysłana pomyślnie", id: info.messageId },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    let errorMessage = "Wystąpił błąd podczas wysyłania wiadomości";
    if (error instanceof Error) {
      if (error.message.includes("Invalid login")) {
        errorMessage =
          "Nieprawidłowe dane logowania Gmail. Sprawdź GMAIL_EMAIL i GMAIL_APP_PASSWORD.";
      } else if (error.message.includes("authentication")) {
        errorMessage = "Błąd autoryzacji Gmail. Sprawdź hasło aplikacji.";
      } else {
        errorMessage = `Błąd: ${error.message}`;
      }
    }

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

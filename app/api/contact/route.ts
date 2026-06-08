import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

// Inicializace Resendu s naším skrytým klíčem
const resend = new Resend(process.env.RESEND_API_KEY);

// Bezpečnostní schéma pro validaci vstupů
const contactSchema = z.object({
  name: z.string().min(2, "Jméno musí mít aspoň 2 znaky"),
  email: z.string().email("Neplatný formát e-mailu"),
  message: z.string().min(100, "Zpráva musí mít aspoň 100 znaků"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validace dat
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ error: "Neplatná data" }, { status: 400 });
    }

    const { name, email, message } = result.data;

    // Odeslání e-mailu tobě
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "auraeditzonyoutube@gmail.com",
      subject: `Nová zpráva z portfolia od: ${name}`,
      html: `
        <h2>Nová zpráva z webového portfolia</h2>
        <p><strong>Jméno:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Zpráva:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Chyba při odesílání e-mailu:", error);
    return NextResponse.json({ error: "Serverová chyba" }, { status: 500 });
  }
}

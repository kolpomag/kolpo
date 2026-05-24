import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Mail gerekli' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'Kolpo Sinyal <onboarding@resend.dev>', // Resend'in varsayılan gönderici adresi
      to: 'kolpomag@gmail.com', // BURAYA KENDİ E-POSTA ADRESİNİ YAZ (Resend'e kayıt olacağın adres)
      subject: `YENİ SİNYAL: ${email}`,
      text: `yeni bir e-posta katıldı: ${email}\n\nBu adresi gece postası listene ekleyebilirsin.`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Sinyal koptu' }, { status: 500 });
  }
}
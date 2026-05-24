import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Mail gerekli' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'Kolpo Sinyal <onboarding@resend.dev>',
      to: 'senin_kendi_mailin@gmail.com', // Buraya kayıt olduğun kendi e-postanı yazdığından emin ol
      subject: `YENİ SİNYAL: ${email}`,
      text: `Dehlize yeni bir e-posta katıldı: ${email}\n\nBu adresi gece postası listene ekleyebilirsin.`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Sinyal koptu' }, { status: 500 });
  }
}
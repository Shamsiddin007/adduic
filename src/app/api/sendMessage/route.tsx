import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const botToken = '7535315420:AAH_JjFac7nJkNQx1QMhHe9Fykia0jwkVtA';
    const chatId = '1019151252';

    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const response = await fetch(telegramApiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: message }),
    });

    if (!response.ok) {
      throw new Error('Telegramga yuborishda xatolik yuz berdi');
    }

    return NextResponse.json({ success: true, message: 'Xabar yuborildi!' });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Nomaʼlum xatolik yuz berdi';
    return NextResponse.json(
      { success: false, message: 'Xatolik yuz berdi', error: errorMessage },
      { status: 500 }
    );
  }
}

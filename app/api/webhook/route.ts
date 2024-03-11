import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const payingAcct = localStorage.getItem('payingAcct');
    if (!payingAcct) {
        return NextResponse.json({message: 'payingAcct not found in localStorage'} );
    }

    const webhookPayingAcct = await request.json()

    if (payingAcct === webhookPayingAcct?.payingAcct) {
        return NextResponse.json({ message: 'Webhook processed successfully' });
    } else {
        return NextResponse.json({ message: 'Unauthorized'});
    }
}

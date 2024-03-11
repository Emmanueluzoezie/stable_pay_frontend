import { NextResponse } from "next/server";
import { toast } from "react-hot-toast";

export async function POST(request: Request) {
    const payingAcct = localStorage.getItem('payingAcct');
    if (!payingAcct) {
        return NextResponse.json({message: 'payingAcct not found in localStorage'} );
    }

    const data = await request.json()

    if (payingAcct === data?.receiver) {
        toast.success("payment is received successfully")
        return NextResponse.json({ 
            sender: data.sender,
            receiver: data.receiver,
            description: data.description
        });
    } else {
        return NextResponse.json({ message: 'Unauthorized'});
    }
}

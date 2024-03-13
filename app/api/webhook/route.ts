// import { NextResponse } from "next/server";
// import { toast } from "react-hot-toast"
// import {sendDataToClients} from "../../../websocket/websocket"

// export async function POST(request: Request) {
//     // const payingAcct = localStorage.getItem('payingAcct');
//     // const payingAcct = '9vJtdHz8CoMsRJUQvf8PgjCWEdmqKHguLPCfWbhMhTR4';
//     // if (!payingAcct) {
//     //     return NextResponse.json({message: 'payingAcct not found in localStorage'} );
//     // }

//     const data = await request.json()

//     // if (payingAcct.toString().toLowerCase() === data?.receiver.toString().toLowerCase()) {
//     //     toast.success("payment is received successfully")
//     //     return NextResponse.json({ 
//     //         sender: data.sender,
//     //         receiver: data.receiver,
//     //         description: data.description
//     //     });
//     // } 
//     // if ("9vJtdHz8CoMsRJUQvf8PgjCWEdmqKHguLPCfWbhMhTR4" === data?.receiver) {
//     sendDataToClients(data);
//     return NextResponse.json(data);
//     // } 
//     // else {
//     //     return NextResponse.json({ message: 'Unauthorized'});
//     // }
// }


import { NextResponse } from "next/server";
import { sendDataToClients } from "../../../websocket/websocket";
import { toast } from "react-hot-toast";

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // Assuming 'receiver' is a key in the JSON data
        if (data?.receiver) {
            sendDataToClients(data);
            return NextResponse.json(data);
        } else {
            return NextResponse.json({ message: 'Unauthorized' });
        }
    } catch (error) {
        console.error("An error occurred:", error);
        return NextResponse.json({ message: 'Unauthorized' }); // Return an error response for any other errors
    }
}
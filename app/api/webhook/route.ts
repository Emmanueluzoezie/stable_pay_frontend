import { NextApiRequest, NextApiResponse } from "next";

export async function POST(request: NextApiRequest, response: NextApiResponse) {
    const payingAcct = localStorage.getItem('payingAcct');

    if (!payingAcct) {
        return response.status(400).json({ message: 'payingAcct not found in localStorage' });
    }

    const webhookPayingAcct = request.body.payingAcct;

    if (payingAcct === webhookPayingAcct) {
        // Process the webhook
        response.status(200).json({ message: 'Webhook processed successfully' });
    } else {
        // Reject the request
        response.status(403).json({ message: 'Unauthorized' });
    }
}
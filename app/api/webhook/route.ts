import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const payingAcct = localStorage.getItem('payingAcct');

    const webhookPayingAcct = req.body.payingAcct;

    if (payingAcct === webhookPayingAcct) {

        res.status(200).json({ message: 'Webhook processed successfully' });
    } else {
        // Reject the request
        res.status(403).json({ message: 'Unauthorized' });
    }
}
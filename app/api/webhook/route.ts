import { NextApiRequest, NextApiResponse } from "next";

export function Get(req: NextApiRequest, res: NextApiResponse) {
    const payingAcct = localStorage.getItem('payingAcct');
    if (!payingAcct) {
        return res.status(400).json({ message: 'payingAcct not found in localStorage' });
    }

    const webhookPayingAcct = req.body.payingAcct;

    if (payingAcct === webhookPayingAcct) {
        res.status(200).json({ message: 'Webhook processed successfully' });
    } else {
        res.status(403).json({ message: 'Unauthorized' });
    }
}
type QrCode = {
    amount: string | number,
    memo: string, 
    message: string,
    label: string
}

type Merchant = {
    merchantPublicKey: string
}

type Reference = {
    reference: string
}
type QrCode = {
    amount: string | number
    memo: string
    message: string
    label: string
    recipient: string
    reference: string[]
    splToken: string
}

type Merchant = {
    merchantPublicKey: string
}

type Reference = {
    reference: string
}
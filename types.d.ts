type QrCode = {
    amount: string | number
    memo: string
    message: string
    label: string
    recipient: string
    refrences: string[]
    splToken: string
}

type QrCodes = {
    amount: string | number
    memo: string
    message: string
    label: string
    recipient: string
    refrences: string[]
    splToken: string
}

type Merchant = {
    merchantPublicKey: string
}

type Reference = {
    reference: string
}
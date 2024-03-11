import QrCodeForm from "../components/QrCodeForm";

export default function QrCode() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between py-2">
            <h2 className="font-bold text-2xl text-gray-600">Get QR CODE Stable pay</h2>
            <QrCodeForm />
        </main>
    );
}
import QrCodeForm from "../components/QrCodeForm";

export default function QrCode() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h2>Stable pay</h2>
            <QrCodeForm />
        </main>
    );
}
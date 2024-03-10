import MerchantForm from "../components/MerchantForm";

export default function Merchant() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <h2>Merchant Stable pay</h2>
            <MerchantForm />
        </main>
    );
}
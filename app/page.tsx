import RegisterForm from "./components/RegisterForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Stable pay</h2>
      <RegisterForm />
    </main>
  );
}

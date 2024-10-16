import { AuthWindow } from "@/widgets/auth";
import Link from "next/link";

export default function AuthPage() {
  return (
    <div className="">
      <header className="container text-center p-5 my-5">
        <Link href="/">
          <span>.dotstat</span>
        </Link>
      </header>

      <main className="container">
        <div className="mx-auto max-w-96">
          <AuthWindow renderCard />
        </div>
      </main>
    </div>
  );
}

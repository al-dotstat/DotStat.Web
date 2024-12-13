import { AuthWindow } from "@/widgets/auth";
import Link from "next/link";
import { Suspense } from "react";

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
          <Suspense>
            <AuthWindow renderCard />
          </Suspense>
        </div>
      </main>
    </div>
  );
}

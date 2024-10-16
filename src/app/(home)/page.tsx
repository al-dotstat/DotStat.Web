"use client";

import { useAuthUser } from "@/entities/me";
import { Button } from "@/shared/ui/button";
import { Skeleton } from "@/shared/ui/skeleton";
import Link from "next/link";

export default function HomePage() {
  const { isSuccess, isLoading } = useAuthUser();

  return (
    <main className="w-screen h-screen flex items-center justify-center">
      {isLoading ? (
        <Skeleton className="rounded w-48 h-9" />
      ) : (
        <Button asChild>
          <Link href={isSuccess ? "/app" : "/auth"}>
            {isSuccess ? "Перейти в приложение" : "Войти"}
          </Link>
        </Button>
      )}
    </main>
  );
}

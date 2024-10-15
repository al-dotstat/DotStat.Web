import { Button } from "@/shared/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Button asChild>
        <Link href="/app">Перейти в приложение</Link>
      </Button>
    </div>
  );
}

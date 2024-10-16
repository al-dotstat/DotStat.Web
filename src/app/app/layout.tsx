import { AuthAvatar } from "@/entities/me";
import ALIcon from "@/shared/ui/icon/alIcon";
import Link from "next/link";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="">
        <nav className="flex justify-between items-center p-2 container shadow rounded m-auto my-5 bg-background">
          <span>.stat</span>
          <AuthAvatar />
        </nav>
      </header>
      <div className="container m-auto mt-5">{children}</div>
      <footer className="bg-background shadow p-5 m-5 rounded">
        <Link
          className="text-foreground flex gap-2 w-fit mx-auto"
          href="https://anemonlabs.ru"
          target="_blank"
        >
          <ALIcon size={30} />
          <div className="flex flex-col">
            <span className="text-sm text-foreground/75 leading-none">
              сайт сделал
            </span>
            <span className="text-md leading-none">AnemonLabs</span>
          </div>
        </Link>
      </footer>
    </>
  );
}

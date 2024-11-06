import Link from "next/link";
import React from "react";
import ALIcon from "../icon/alIcon";

const footer: React.FC = () => {
  return (
    <footer className="bg-foreground text-background shadow p-10 my-5 mx-auto rounded container self-end">
      <Link
        className="flex gap-2 w-fit mx-auto"
        href="https://anemonlabs.ru"
        target="_blank"
      >
        <ALIcon size={30} color="null" className="fill-background" />
        <div className="flex flex-col">
          <span className="text-sm text-background/75 leading-none">
            сайт сделал
          </span>
          <span className="text-md leading-none">AnemonLabs</span>
        </div>
      </Link>
    </footer>
  );
};

export default React.memo(footer);

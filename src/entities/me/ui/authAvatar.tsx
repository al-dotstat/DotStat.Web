"use client";

import React from "react";
import { useAuthUser } from "../hooks";
import { Skeleton } from "@/shared/ui/skeleton";
import { IconUser } from "@tabler/icons-react";
import Link from "next/link";
import { Button } from "@/shared/ui/button";

const AuthAvatar: React.FC = () => {
  const { data, isSuccess, isLoading } = useAuthUser();

  if (isLoading) return <Skeleton className="rounded-full w-10 h-10" />;
  if (!isSuccess)
    return (
      <Button asChild>
        <Link href="/auth" className="flex flex-col items-center">
          <IconUser size={20} />
          <span>Войти</span>
        </Link>
      </Button>
    );

  return (
    <Link href="/app/profile">
      <Button variant="outline" className="rounded-full" size="icon">
        <div className="h-8 w-8 flex items-center justify-center">
          {data.firstName[0].toUpperCase()}
        </div>
      </Button>
    </Link>
  );
};

export default React.memo(AuthAvatar);

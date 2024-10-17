"use client";

import React from "react";
import { useAuthUser } from "../../../entities/me/hooks";
import Block from "@/shared/ui/block";
import { Skeleton } from "@/shared/ui/skeleton";
import { AuthProfileData } from "@/entities/me";
import { ChangePassword } from "@/features/auth";

export interface ProfileCardProps {}

const ProfileCard: React.FC<ProfileCardProps> = ({}) => {
  const { isSuccess } = useAuthUser();

  return (
    <div className="mx-auto max-w-96">
      <h1 className="text-2xl font-bold">Профиль</h1>
      <Block asChild>
        <main className="space-y-5 p-5 mt-5">
          <AuthProfileData />
          {isSuccess ? <ChangePassword /> : <Skeleton className="h-9 w-36" />}
        </main>
      </Block>
    </div>
  );
};

export default React.memo(ProfileCard);

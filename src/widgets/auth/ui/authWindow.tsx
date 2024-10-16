"use client";

import { LoginForm, RegisterForm } from "@/features/auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useState } from "react";

export interface AuthWindowProps {
  renderCard?: boolean;
}

const AuthWindow: React.FC<AuthWindowProps> = ({ renderCard }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo");
  const [tab, setTab] = useState<"login" | "register">("login");

  const redirect = useCallback(() => {
    router.push(redirectTo ?? "/app");
  }, [redirectTo, router]);

  const tabToLogin = useCallback(() => {
    setTab("login");
  }, []);

  const loginForm = <LoginForm onLogin={redirect} />;
  const registerForm = <RegisterForm onRegistered={tabToLogin} />;

  return (
    <Tabs
      defaultValue="login"
      value={tab}
      onValueChange={(val) => setTab(val as "login" | "register")}
    >
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Войти</TabsTrigger>
        <TabsTrigger value="register">Регистрация</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        {renderCard ? (
          <Card>
            <CardHeader>
              <CardTitle>Вход</CardTitle>
            </CardHeader>
            <CardContent>{loginForm}</CardContent>
          </Card>
        ) : (
          loginForm
        )}
      </TabsContent>
      <TabsContent value="register">
        {renderCard ? (
          <Card>
            <CardHeader>
              <CardTitle>Регистрация</CardTitle>
            </CardHeader>
            <CardContent>{registerForm}</CardContent>
          </Card>
        ) : (
          registerForm
        )}
      </TabsContent>
    </Tabs>
  );
};

export default React.memo(AuthWindow);

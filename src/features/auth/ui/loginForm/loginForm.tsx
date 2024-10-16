"use client";

import { useLogin } from "@/entities/user";
import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { formSchema, FormSchema } from "./formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "@/shared/types/user";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { IconExclamationMark, IconLoader } from "@tabler/icons-react";
import { Alert, AlertTitle } from "@/shared/ui/alert";

export interface LoginFormProps {
  onLogin?: (data: User) => void;
  onPendingStatusChange?: (isPending: boolean) => void;
  onErrorMessage?: (message: string) => void;
  customSubmitButton?: React.ReactNode;
  customErrorAlert?: React.ReactNode;
}

const LoginForm: React.FC<LoginFormProps> = ({
  onLogin,
  onPendingStatusChange,
  onErrorMessage,
  customSubmitButton,
  customErrorAlert,
}) => {
  const { mutate, isPending, isError, isSuccess, error, data } = useLogin();
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = useCallback(
    (data: FormSchema) => {
      mutate(data);
    },
    [mutate]
  );

  useEffect(() => {
    if (onPendingStatusChange) onPendingStatusChange(isPending);
  }, [onPendingStatusChange, isPending]);

  useEffect(() => {
    if (isError && onErrorMessage) onErrorMessage(error.message);
  }, [onErrorMessage, isError, error]);

  useEffect(() => {
    if (isSuccess && onLogin) onLogin(data);
  }, [onLogin, isSuccess, data]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  {...field}
                  required
                  placeholder="Введите адрес электронной почты"
                  autoComplete="work email"
                  disabled={isPending}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Пароль</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  {...field}
                  required
                  placeholder="Введите пароль"
                  autoComplete="current-password"
                  disabled={isPending}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {customSubmitButton ? (
          customSubmitButton
        ) : (
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending && <IconLoader className="animate-spin" />}
            Войти
          </Button>
        )}

        {isError &&
          (customErrorAlert ? (
            customErrorAlert
          ) : (
            <Alert variant="destructive">
              <IconExclamationMark className="h-4 w-4" />
              <AlertTitle>{error.message}</AlertTitle>
            </Alert>
          ))}
      </form>
    </Form>
  );
};

export default React.memo(LoginForm);

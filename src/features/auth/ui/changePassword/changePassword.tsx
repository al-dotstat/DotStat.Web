"use client";

import { useChangePassword } from "@/entities/user";
import Modal from "@/shared/ui/modal";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { formSchema, FormSchema } from "./formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/shared/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { IconExclamationMark, IconLoader } from "@tabler/icons-react";
import { Alert, AlertTitle } from "@/shared/ui/alert";

export interface ChangePasswordProps {}

const ChangePassword: React.FC<ChangePasswordProps> = ({}) => {
  const { mutate, isPending, isError, isSuccess, error } = useChangePassword();
  const [isOpen, setOpen] = useState(false);
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormSchema) => {
    mutate(data);
  };

  useEffect(() => {
    if (isSuccess) {
      setOpen(false);
    }
  }, [isSuccess]);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Изменить пароль</Button>
      <Modal isOpen={isOpen} onOpenChange={setOpen} title="Изменить пароль">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
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
                      placeholder="Придумайте пароль"
                      autoComplete="new-password"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Подтвердите пароль</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      {...field}
                      required
                      placeholder="Введите пароль ещё раз"
                      autoComplete="new-password"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {isError && (
              <Alert variant="destructive">
                <IconExclamationMark className="h-4 w-4" />
                <AlertTitle>{error.message}</AlertTitle>
              </Alert>
            )}

            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending && <IconLoader className="animate-spin" />}
              Сохранить
            </Button>
          </form>
        </Form>
      </Modal>
    </>
  );
};

export default React.memo(ChangePassword);

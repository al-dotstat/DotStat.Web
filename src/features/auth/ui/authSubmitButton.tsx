import { Button } from "@/shared/ui/button";
import { IconLoader } from "@tabler/icons-react";
import React from "react";

export interface AuthSubmitButtonProps {
  title: string;
  isPending: boolean;
}

const AuthSubmitButton: React.FC<AuthSubmitButtonProps> = ({
  title,
  isPending,
}) => {
  return (
    <Button type="submit" className="w-full" disabled={isPending}>
      {isPending && <IconLoader className="animate-spin" />}
      {title}
    </Button>
  );
};

export default React.memo(AuthSubmitButton);

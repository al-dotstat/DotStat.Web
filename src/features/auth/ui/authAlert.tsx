import { Alert, AlertTitle } from "@/shared/ui/alert";
import { IconExclamationMark } from "@tabler/icons-react";
import React from "react";

export interface AuthAlertProps {
  message: string;
}

const AuthAlert: React.FC<AuthAlertProps> = ({ message }) => {
  return (
    <Alert variant="destructive">
      <IconExclamationMark className="h-4 w-4" />
      <AlertTitle>{message}</AlertTitle>
    </Alert>
  );
};

export default React.memo(AuthAlert);

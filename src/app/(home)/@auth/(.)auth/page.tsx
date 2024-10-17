"use client";

import Modal from "@/shared/ui/modal";
import { AuthWindow } from "@/widgets/auth";
import { useRouter } from "next/navigation";

export default function AuthModalPage() {
  const router = useRouter();

  return (
    <Modal
      isOpen={true}
      onOpenChange={(val) => {
        if (!val) router.back();
      }}
    >
      <AuthWindow />
    </Modal>
  );
}

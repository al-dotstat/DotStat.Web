"use client";

import { apiClient } from "@/shared/api/axios";
import { Complex } from "@/shared/types/complex";
import { Button } from "@/shared/ui/button";
import { Label } from "@/shared/ui/label";
import Modal from "@/shared/ui/modal";
import { Switch } from "@/shared/ui/switch";
import { IconDownload, IconLoader } from "@tabler/icons-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

export interface ParseComplexProps {
  id: Complex["id"];
}

const ParseComplex: React.FC<ParseComplexProps> = ({ id }) => {
  const [open, setOpen] = useState(false);
  const [include, setInclude] = useState({
    includeFlats: false,
    includeParkings: false,
    includeStorages: false,
    includeCommercials: false,
  });
  const [isPending, setPending] = useState(false);

  const onClick = () => {
    if (
      !include.includeCommercials &&
      !include.includeParkings &&
      !include.includeFlats &&
      !include.includeStorages
    ) {
      toast.error("Выберите хотя-бы один тип помещения");
      return;
    }
    setPending(true);
    apiClient
      .downloadFile(`api/complexes/${id}/parse`, include)
      .then(() => setOpen(false))
      .finally(() => setPending(false));
  };

  return (
    <>
      <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
        {isPending ? <IconLoader className="animate-spin" /> : <IconDownload />}
      </Button>
      <Modal
        isOpen={open}
        onOpenChange={setOpen}
        footer={
          <Button onClick={onClick} disabled={isPending} className="w-full">
            {isPending && <IconLoader className="animate-spin" />}
            Скачать
          </Button>
        }
      >
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Switch
              id={`$solocomplex{id}_parse_includeFlats`}
              checked={include.includeFlats}
              disabled={isPending}
              onCheckedChange={(checked) =>
                setInclude({ ...include, includeFlats: checked })
              }
            />
            <Label htmlFor={`$solocomplex{id}_parse_includeFlats`}>
              Квартиры
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch
              id={`$solocomplex{id}_parse_includeParkings`}
              checked={include.includeParkings}
              disabled={isPending}
              onCheckedChange={(checked) =>
                setInclude({ ...include, includeParkings: checked })
              }
            />
            <Label htmlFor={`$solocomplex{id}_parse_includeParkings`}>
              Паркинг
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch
              id={`$solocomplex{id}_parse_includeStorages`}
              checked={include.includeStorages}
              disabled={isPending}
              onCheckedChange={(checked) =>
                setInclude({ ...include, includeStorages: checked })
              }
            />
            <Label htmlFor={`$solocomplex{id}_parse_includeStorages`}>
              Кладовые
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch
              id={`$solocomplex{id}_parse_includeCommercials`}
              checked={include.includeCommercials}
              disabled={isPending}
              onCheckedChange={(checked) =>
                setInclude({ ...include, includeCommercials: checked })
              }
            />
            <Label htmlFor={`$solocomplex{id}_parse_includeCommercials`}>
              Коммерция
            </Label>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default React.memo(ParseComplex);

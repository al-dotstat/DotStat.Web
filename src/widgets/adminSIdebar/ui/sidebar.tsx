import { ComplexQueueFilters } from "@/features/filters";
import Block from "@/shared/ui/block";
import LogoIcon from "@/shared/ui/icon/logoIcon";
import Link from "next/link";
import React from "react";

export interface AdminSidebarProps {}

const AdminSidebar: React.FC<AdminSidebarProps> = ({}) => {
  return (
    <aside className="sticky top-5 flex flex-col gap-5 h-fit items-center">
      <Link href="/app" className="flex items-end">
        <LogoIcon size={50} />
      </Link>
      <Block className="p-5 w-72 max-xl:w-60 h-fit">
        <ComplexQueueFilters />
      </Block>
    </aside>
  );
};

export default React.memo(AdminSidebar);

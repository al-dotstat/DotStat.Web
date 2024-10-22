import Block from "@/shared/ui/block";
import { ComplexBigCardOrdered } from "@/widgets/complex";
import { notFound } from "next/navigation";

export default function Page({ params }: { params: { id: string } }) {
  const idInt = parseInt(params.id);
  if (isNaN(idInt)) notFound();

  return (
    <Block asChild>
      <main className="p-5">
        <ComplexBigCardOrdered id={idInt} />
      </main>
    </Block>
  );
}

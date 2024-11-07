import { ComplexTableDynamic } from "@/entities/complex";
import { ComplexBigCardOrdered } from "@/widgets/complex";
import { notFound } from "next/navigation";

export default function Page({ params }: { params: { id: string } }) {
  const idInt = parseInt(params.id);
  if (isNaN(idInt)) notFound();

  return (
    <div className="space-y-5">
      <main className="p-5">
        <ComplexBigCardOrdered id={idInt} />
      </main>
      <ComplexTableDynamic id={idInt} />
    </div>
  );
}

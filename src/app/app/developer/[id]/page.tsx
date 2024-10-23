import { DeveloperBigCard } from "@/entities/developer";
import Block from "@/shared/ui/block";
import { DeveloperComplexList } from "@/widgets/complex";
import { notFound } from "next/navigation";

export default function DeveloperPage({ params }: { params: { id: string } }) {
  const idInt = parseInt(params.id);
  if (isNaN(idInt)) notFound();

  return (
    <div className="space-y-5">
      <Block asChild>
        <main className="p-5">
          <DeveloperBigCard id={idInt} />
        </main>
      </Block>

      <Block className="p-5">
        <h2 className="mb-5 text-xl font-bold">Жилые комплексы</h2>
        <DeveloperComplexList id={idInt} />
      </Block>
    </div>
  );
}

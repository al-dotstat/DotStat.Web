import { ComplexFilters, ComplexList } from "@/entities/complex";
import Block from "@/shared/ui/block";

export default function AppPage() {
  return (
    <div className="flex gap-5">
      <Block asChild>
        <aside className="p-5 w-72 max-xl:w-60 sticky h-fit">
          <ComplexFilters />
        </aside>
      </Block>

      <main className="w-full">
        <h1 className="font-semibold text-2xl">Список жилых комплексов</h1>
        <ComplexList />
      </main>
    </div>
  );
}

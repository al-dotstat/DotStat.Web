import { ComplexFilters } from "@/features/filters";
import Block from "@/shared/ui/block";
import { FilteredComplexList } from "@/widgets/complex";

export default function AppPage() {
  return (
    <div className="flex max-lg:flex-col max-lg:items-center gap-5">
      <Block asChild>
        <aside className="lg:sticky lg:top-24 p-5 w-72 max-xl:w-60 h-fit">
          <ComplexFilters />
        </aside>
      </Block>

      <main className="w-full px-5">
        <h1 className="font-semibold text-2xl">Список жилых комплексов</h1>
        <FilteredComplexList />
      </main>
    </div>
  );
}

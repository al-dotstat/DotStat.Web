import Block from "@/shared/ui/block";
import { OrderHistory } from "@/widgets/order";
import { ProfileCard } from "@/widgets/user";

export default function ProfilePage() {
  return (
    <div className="flex flex-col items-center space-y-5">
      <h1 className="text-2xl font-bold">Профиль</h1>
      <ProfileCard />
      <h2 className="text-xl font-semibold">История заказов</h2>
      <Block className="p-5">
        <OrderHistory />
      </Block>
    </div>
  );
}

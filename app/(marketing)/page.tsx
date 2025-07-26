import { getCurrentUser } from "@/lib/session";
import { getUserSubscriptionPlan } from "@/lib/subscription";
import HeroLanding from "@/components/sections/hero-landing";

export default async function IndexPage() {
  const user = await getCurrentUser();

  let isPaid = false;
  if (user && user.id) {
    try {
      const subscriptionPlan = await getUserSubscriptionPlan(user.id);
      isPaid = subscriptionPlan.isPaid;
    } catch (error) {
      console.error("Error getting subscription plan:", error);
    }
  }

  return (
    <>
      <HeroLanding isPaid={isPaid} />
    </>
  );
}

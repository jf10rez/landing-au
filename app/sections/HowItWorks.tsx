import { HowItWorksHorizontal } from "@/app/components/animation/HowItWorksHorizontal";
import type { Messages } from "@/app/lib/i18n/dictionaries";

export function HowItWorks({ dict }: { dict: Messages }) {
  return <HowItWorksHorizontal t={dict.howItWorks} />;
}
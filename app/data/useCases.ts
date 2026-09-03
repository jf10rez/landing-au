import { UseCase } from "@/app/types";
import type { Messages } from "@/app/lib/i18n/dictionaries";

export function getUseCases(dict: Messages): UseCase[] {
  return dict.useCases.items.map((item) => ({
    id: item.id,
    clientType: item.clientType,
    problem: item.problem,
    solution: item.solution,
    metrics: item.metrics,
  }));
}
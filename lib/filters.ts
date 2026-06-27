export function getBudgetLabel(budget: number) {
  if (budget === 0) return "Free";
  if (budget === 1) return "Under €10";
  if (budget === 2) return "Under €20";
  return "Any budget";
}
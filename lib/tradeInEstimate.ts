export type Condition = "Excellent" | "Good" | "Fair" | "Poor";

export const conditions: Condition[] = ["Excellent", "Good", "Fair", "Poor"];

const conditionMultipliers: Record<Condition, number> = {
  Excellent: 1,
  Good: 0.88,
  Fair: 0.7,
  Poor: 0.5,
};

export type TradeInEstimateInput = {
  year: number;
  mileage: number;
  condition: Condition;
};

export type TradeInEstimateResult = {
  low: number;
  high: number;
};

/**
 * Rough, demo-only placeholder valuation. Not a real appraisal model —
 * it exists purely to give visitors a ballpark range before booking an
 * in-person inspection.
 */
export function estimateTradeInValue({
  year,
  mileage,
  condition,
}: TradeInEstimateInput): TradeInEstimateResult {
  const currentYear = new Date().getFullYear();
  const age = Math.max(currentYear - year, 0);

  const baseValue = Math.max(32000 - age * 1500, 3000);
  const mileagePenalty = Math.min(Math.max(mileage, 0) / 1000, 18) * 220;
  const afterMileage = Math.max(baseValue - mileagePenalty, 1500);
  const finalValue = afterMileage * conditionMultipliers[condition];

  const low = Math.max(Math.round((finalValue * 0.9) / 100) * 100, 500);
  const high = Math.max(Math.round((finalValue * 1.1) / 100) * 100, low + 500);

  return { low, high };
}

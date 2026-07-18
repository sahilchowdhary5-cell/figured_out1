import type { DimensionKey } from "@/lib/types";

/** Default dimension requirements — all at 50. Override per role. */
export const dims = (overrides: Partial<Record<DimensionKey, number>>): Record<DimensionKey, number> => ({
  analytical: 50,
  creative: 50,
  social: 50,
  structured: 50,
  autonomous: 50,
  riskTolerant: 50,
  leadership: 50,
  technical: 50,
  communication: 50,
  commercial: 50,
  detailOriented: 50,
  pressureTolerant: 50,
  ...overrides,
});

import type { RoleDetail } from "@/lib/types";
import { TECH_ROLES } from "./tech";
import { FINANCE_ROLES } from "./finance";
import { BUSINESS_ROLES } from "./business";
import { DESIGN_ROLES } from "./design";
import { OTHER_ROLES } from "./other";

// Original 16 roles kept inline to avoid circular imports with lib/data/roles.ts
// All new domain-specific roles are imported from their respective files above.

export { TECH_ROLES, FINANCE_ROLES, BUSINESS_ROLES, DESIGN_ROLES, OTHER_ROLES };

export const ALL_EXTENDED_ROLES: RoleDetail[] = [
  ...TECH_ROLES,
  ...FINANCE_ROLES,
  ...BUSINESS_ROLES,
  ...DESIGN_ROLES,
  ...OTHER_ROLES,
];

export const EXTENDED_ROLE_FAMILIES = [
  "Technology",
  "Finance",
  "Business",
  "Design",
  "Marketing",
  "Operations",
  "People",
  "Healthcare",
  "Legal",
  "Engineering",
  "Government",
  "Education",
  "Entrepreneurship",
  "Strategy",
] as const;

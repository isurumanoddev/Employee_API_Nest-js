export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  designation: string;
  nearestCity: string;
  tier: EmployeeTier;
  status: EmployeeStatus;
}

export enum EmployeeTier {
  TIER_ONE = 1,
  TIER_TWO = 2,
  TIER_THREE = 3,
  TIER_FOUR = 4,
}

export enum EmployeeStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  RESIGNED = 'RESIGNED',
}

export type InterestAreaId = "frontend" | "java" | "games" | "aiData";

export interface InterestArea {
  id: InterestAreaId;
  title: string;
  description: string;
}

export interface InterestsContent {
  title: string;
  areas: InterestArea[];
}

export interface Option {
  label: string;
  score: number;
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
}

export type AnswersMap = Record<string, number | undefined>;

export interface Category {
  label: string;
  band?: string;
}

export interface Question {
  position: Number;
  exam: string;
  examDate: string;
  questionType: string;
  difficulty: string;
  questionCognitive: string;
  questionTags: [];
  questionStr: string;
  a: Number;
  b: Number;
  c: Number;
  d: Number;
  averageCorrect: Number;
  totalCorrectPts: Number;
}

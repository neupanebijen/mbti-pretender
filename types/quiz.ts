// 1. Literal Types: This prevents typos like 'INFG' instead of 'INFJ'
import { MbtiCode } from "./mbti-definitions";
//   The payload to send to the go backend
export interface QuizPayload {
  score_type: MbtiCode;
  answers: String[],
}

//   Backend Response
export interface QuizResponse {
  message: string;
  status: string;
  id?: string
}

//   Error types
export interface ApiError {
  error: Boolean
  message: String
}

// 1. Literal Types: This prevents typos like 'INFG' instead of 'INFJ'
export type MbtiType = 
  | 'INTJ' | 'INFJ' | 'ENTP' | 'ENFP' 
  | 'ISTP' | 'ISFP' | 'ESTP' | 'ESFP' 
  | 'ISTJ' | 'ISFJ' | 'ESTJ' | 'ESFJ' 
  | 'ENTJ' | 'ENFJ' | 'INTP' | 'INFP';

//   The payload to send to the go backend
  export interface QuizPayload {
    score_type: MbtiType; 
    final_score: number 
  }

//   Backend Response
  export interface QuizResponse {
    message: string; 
    status: string ; 
    id?: string
  }

//   Error types
  export interface ApiError {
    error: Boolean 
    message: String
  }
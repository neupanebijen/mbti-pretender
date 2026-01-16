// // Define the structure of your data for better auto-complete
// import { QuizPayload, QuizResponse } from "@/types/quiz"

import { QuizPayload } from "@/types/quiz"

const API_URL = '/api/results' 

export const submitToBackend = async (payload: QuizPayload) => {
  const response = await fetch(API_URL, {
    method: "POST", 
    headers: {
      'Content-Type': 'application/json', 
    }, 
    body: JSON.stringify({
      score_type: payload.score_type, 
      final_score: payload.final_score , 
      answers: payload.answers
    })
  })


  if (!response.ok) {
    const errorMessage = await response.json().catch(() => {})
    throw new Error(errorMessage.error ?? `Status error ${response.status}`)
  }

  return response.json() 
}
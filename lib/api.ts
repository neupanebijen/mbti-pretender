// Define the structure of your data for better auto-complete
import { QuizPayload, QuizResponse } from "@/types/quiz"

export const postSingleResult = async (payload: QuizPayload) : Promise<QuizResponse> => {
    const response = await fetch('http://localhost:8000/score/postSingleResult', {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(payload)
      })


     //   Response failute
      if(!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.message || `HTTP Error: ${response.status}`)
      }

      return await response.json()
}
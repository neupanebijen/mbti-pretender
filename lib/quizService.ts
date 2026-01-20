import { geminiModel } from "./gemini";
import { QUIZ_ANALYSIS_PROMPT } from "@/constants/prompt";

export async function analyzeQuizWithAI(mbtiType: string, questions: string[], answers: string[]) {
    const quizData = questions.map((q, i) => ({
        question: q,
        answer: answers[i] || "no answer provided"
    }))

    const prompt = QUIZ_ANALYSIS_PROMPT(mbtiType, quizData)
    try {
        const result = await geminiModel.generateContent(prompt)
        const text = result.response.text()

        const data = JSON.parse(text.trim())

        if (!data.scores || !Array.isArray(data.scores)) {
            throw new Error("Invalid AI response format")
        }
        return data
    } catch (error) {
        console.error("AI analysis failed: ", error)

        return { scores: Array(10).fill(5), error: true }
    }
}


// This is the API call function
import { MBTI_ANALYSIS_INSTRUCTION } from '@/prompts/system';
import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
    throw new Error("Missing GEMINI_API_KEY in environment variables");
}

const genAI = new GoogleGenerativeAI(apiKey);

export const geminiModel = genAI.getGenerativeModel({
    model: "gemini-3-flash-preview",
    systemInstruction: MBTI_ANALYSIS_INSTRUCTION,
    generationConfig: {
        responseMimeType: "application/json"
    }
});
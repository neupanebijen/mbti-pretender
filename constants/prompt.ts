export const QUIZ_ANALYSIS_PROMPT = (mbtiType: string, data: { question: string, answer: string }[]) => {
    const formattedQA = data
        .map((item, index) => `Q${index + 1}: ${item.question}\nA: ${item.answer}`)
        .join('\n\n');

    return `
      Target Type: ${mbtiType}
      Input Data:
      ${formattedQA}
      
      Return JSON format: { "scores": [number, number, ...] }
    `.trim();
}
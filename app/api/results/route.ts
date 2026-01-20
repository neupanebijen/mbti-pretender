import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { analyzeQuizWithAI } from '@/lib/quizService';
import { MBTI_QUESTIONS } from '@/constants/mbti';
import { MbtiCode } from '@/types/mbti-definitions';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { score_type, answers } = body;

        // Always validate the data before hitting the DB
        if (!score_type === undefined) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        if (!(score_type in MBTI_QUESTIONS)) {
            return NextResponse.json({ error: `Invalid MBTI code: ${score_type}` }, { status: 400 })
        }

        const officialQuestion = MBTI_QUESTIONS[score_type as MbtiCode]

        const resultScores = await analyzeQuizWithAI(score_type, officialQuestion, answers)
        const totalScore = resultScores.scores.reduce((total: number, currentValue: number) => total + currentValue)

        const result = await prisma.quizResult.create({
            data: {
                score_type: score_type,
                final_score: totalScore,
                answers: answers || []
            }
        });

        console.log(result)

        return NextResponse.json({ score: result.final_score }, { status: 201 });
    } catch (error) {
        console.error("Database Error: ", error)
        return NextResponse.json(
            { error: "Failed to save result to database" },
            { status: 500 }
        )
    }

}

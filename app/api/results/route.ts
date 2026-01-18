import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { randomInt } from 'crypto';

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

        const calculatedScore = calculateScore()

        const result = await prisma.quizResult.create({
            data: {
                score_type: score_type,
                final_score: calculatedScore,
                answers: answers || []
            }
        });

        return NextResponse.json({ score: result.final_score }, { status: 201 });
    } catch (error) {
        console.error("Database Error: ", error)
        return NextResponse.json(
            { error: "Failed to save result to database" },
            { status: 500 }
        )
    }

}

const calculateScore = () => {
    return randomInt(0, 100)
}

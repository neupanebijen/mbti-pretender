import {NextResponse} from 'next/server' 
import {prisma} from '@/lib/prisma' 

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { score_type, final_score, answers } = body;

        // Always validate the data before hitting the DB
        if (!score_type || final_score === undefined) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const result = await prisma.quizResult.create({
            data: {
                score_type: score_type,
                final_score: final_score, 
                answers: answers || []
            }
        });

        return NextResponse.json(result, { status: 201 });
    } catch (error) {
        console.error("Database Error: ", error)
        return NextResponse.json(
            {error: "Failed to save result to database"}, 
            {status : 500}
        )
    }

}
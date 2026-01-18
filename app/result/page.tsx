// This is the quiz for the result page

import ResultView from "@/components/ResultView";
import { MbtiCode } from "@/types/mbti-definitions";
import { redirect } from "next/navigation";

interface ResultPageProps {
    searchParams: Promise<{
        score?: string,
        type?: string,
    }>
}

export default async function Result({ searchParams }: ResultPageProps) {
    const params = await searchParams


    const type = params.type as MbtiCode
    if (!type) redirect('/select-type')

    const rawScore = parseInt(params.score || "0", 10)

    const score = Math.min(Math.max(rawScore, 0), 100)

    return (
        <>
            <ResultView score={score} type={type} />
        </>
    )
}
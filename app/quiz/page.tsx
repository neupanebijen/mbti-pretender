// This is the page for the quiz
import QuizContainer from "@/components/QuizContainer";
import { MBTI_MAP, MBTI_QUESTIONS } from "@/constants/mbti"
import { MbtiCode } from "@/types/mbti-definitions";
import { redirect } from "next/navigation"

export default async function Quiz({ searchParams }: { searchParams: Promise<{ type?: string }> }) {
    const query = await searchParams
    const selectedType = query.type

    if (!selectedType || !(selectedType in MBTI_MAP)) {
        redirect('/select-type'); // Now TypeScript can "see" the argument correctly
    }

    const mbtiData = MBTI_MAP[selectedType as keyof typeof MBTI_MAP]
    const questions = MBTI_QUESTIONS[selectedType as keyof typeof MBTI_QUESTIONS]

    return (
        <>
            <div className="text-center my-6">
                <h3 className="text-3xl font-bold text-indigo-300 mb-2 drop-shadow-glow-bright">
                    Welcome <span className="text-white drop-shadow-glow-bright">{mbtiData.label}</span>
                </h3>
                <h4 className="text-lg font-medium text-indigo-100 drop-shadow-glow-bright">
                    The{" "}
                    <span className="font-semibold text-yellow-300 drop-shadow-glow-bright">{mbtiData.code}</span>{" "}
                    test. Can you pretend to be one?
                </h4>
            </div>
            <div>
                <div className="bg-white rounded-xl shadow-lg px-8 w-full max-w-3xl mx-auto">
                    <QuizContainer type={selectedType as MbtiCode} questions={questions} />
                </div>
            </div>
        </>
    )
}
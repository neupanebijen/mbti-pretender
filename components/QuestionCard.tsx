import { MbtiType } from '@/types/quiz';


interface QuestionCardProps {
    question: string, 
    step: number, 
    totalSteps: number; 
    targetType: MbtiType; 
    onNext: () => void; 
    isLast: boolean; 
    loading: boolean; 
}

export default function QuestionCard({
    question, 
    step, 
    totalSteps, 
    targetType, 
    onNext, 
    isLast, 
    loading
}: QuestionCardProps) {
    const progressPercent = (step/totalSteps) * 100 

    return (
        <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
            {/* Progress Bar */}
            <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-gray-400 uppercase tracking-widest">

                    <span>Progress</span>
                    <span>{step}</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 transition-all duration-500 ease-out" style={{width:`${progressPercent}`}}>
                    </div>
                </div>
            
            </div>

            {/* Persona Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border borer-amber-200 rounded-full">
                <span className="text-amber-600 tex-sm">🎭</span>
                <span className="text-xs font-bold text-amber-800 uppercase">Acting as: {targetType}</span>
            </div>

            {/* The Question */}
            <div className="space-y-4">
                <h2 className="tex-2xl font-bold text-gray-900 leading-tight">
                    {question}
                </h2>
                <p className="text-sm text-gray-500 italic">
                    Write a response that would convince an AI you are an {targetType}.
                </p>
            </div>

            {/* Input Area */}
            <textarea placeholder="Type your character's response here..." className="w-full h-10 p-4 border-2 border-gray-100 rounded-xl focus:border-blue-500 focus:ring-blue-50 outline-none transition-all resize-none text-gray-700"></textarea>


            {/* Navigation */}
            <button onClick={onNext} disabled={loading}  className={`w-full py-4 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2 ${loading ? 'bg-gray-400 cursor-not-allowed': 'bg-blue-600 hover:bg-blue-700 active:scale-[0.98]'}`}>
                {loading ? (
                    <>
                        <span className="animate-spin text-4xl">🌀</span>
                        Analyzing Performance....
                    </>
                ): (isLast ? 'Finish & See Results': 'Submit Answer')}
            </button>
        </div>
    )
} // 
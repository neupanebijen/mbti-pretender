import { MbtiType } from "@/types/quiz";    

interface ResultViewProps{
    score: number; 
    type: MbtiType; 
    onRestart: () => void 
}

export default function ResultView({score, type, onRestart}: ResultViewProps) {
    const getFeedback = () => {
        if (score >= 80) return {label: "Master Pretender", color: "text-green-600", bg: "bg-green-50"}
        if (score >= 50) return {label: "Good Effort", color: "text-blue-600", bg: "bg-blue-50"}
        return {label: "Breaking Character", color: "text-red-600", bg: "bg-red-50"}
    }

    const feedback = getFeedback()

    return (
        <div className="text-center space-y-8 animate-in fade-in zoom-in duration-700">
            {/* Trophy/Status Icon */}
            <div className="flex justify-center">
                <div className={`w-24 h-24 rounded-full flex items-center justify-center text-5xl shadow-inner ${feedback.bg}`}>
                    {score >= 80 ? '👑': score>= 50 ? '🥈' : '🎭' }
                </div>
            </div>

            {/* Score Reveal */}
            <div className="space-y-2">
                <h2 className={`text-6xl font-black tracking-tighter ${feedback.color}`}>
                    {score}%
                </h2>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                    Accuracy as {type}
                </p>
            </div>

            {/* Feedback Card */}
            <div className={`p-6 rounded-2xl border ${feedback.bg} border-opacity-50`}>
                <h3 className={`text-xl font-bold ${feedback.color}`}>
                    {feedback.label}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                The AI analyzed your linguistic patterns and behavioral choices.
                You demonstrated a {score}% alignment with the core traits of the {type} personality.
                </p>
            </div>

            {/* Action Area */}
            <div className="pt-4 space-y-3">
                <button onClick={onRestart} className="w-full py-4 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-all active:scale-95 shadow-lg">
                    Try another Persona    
                </button> 
                <button onClick={() => window.print()} className="w-full py-2 text-gray-400 text-sm hover:text-gray-600 transition-colors">
                    Download Results (PDF)
                </button>
            </div>

        </div>
    )
}
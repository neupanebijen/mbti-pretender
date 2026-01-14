interface StartScreenProps {
    onStart: () => void; 
}

export default function StartScreen({onStart} : StartScreenProps) {
    return(
        <div className="text-center space-y-8 py-4">
            {/* Icon or graphic placeholder */}
            <div className="flex justify-center">
                <span className="text-4xl">🎭</span>
            </div>

            {/* Hero Text */}
            <div className="space-y-3">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
                    The MBTI <span className="text-blue-600">Pretender</span>
                </h1>

                <div className="text-lg text-gray-500 max-w-sm mx-auto">
                    Can you fool the system? You'll be assigned a personality type. 
                    Your goal: <span className="font-semibold text-gray-700">Stay in character.</span>
                </div>
            </div>

            {/* Instruction list */}
            <div className="bg-gray-50 p-6 rounded-xl text-left border border-gray-100">
                <h3 className="text-sm font-bold text-gray-400 uppercase mb-3">How it works</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex gap-3">
                        <span className="font-bold text-blue-500">1.</span>
                            Receive a random MBTI target (e.g., INTJ)
                    </li>
                    <li className="flex gap-3">
                        <span className="font-bold text-blue-500">2.</span>
                            Answer 10 behavioral questions as that person.
                    </li>
                    <li className="flex gap-3">
                        <span className="font-bold text-blue-500">3.</span>
                        See your "Acting Accuracy" from our Go backend.
                    </li>
                </ul>
            </div>

            {/* Action Button */}
            <button onClick={onStart} className="w-full py-4 bg-black text-white text-lg font-bold rounded-xl hover:bg-gray-800 transform transition-all active:scale-95 shadow-lg hover:shadow-xl">
                Begin Challenge
            </button>
        </div>
    )
}
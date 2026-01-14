'use client'

import {useState} from 'react'
import { MbtiType } from '@/types/quiz';
import { postSingleResult } from '@/lib/api';
import StartScreen from './StartScreen';
import ResultView from './ResultView';
import QuestionCard from './QuestionCard';

type GameState = 'START'|'QUIZ' |'RESULT'

const QUESTIONS = [
    "How do you feel about large social gatherings?",
    "Do you prefer a strict schedule or going with the flow?",
    "How do you handle conflict with a friend?",
    "Are you more focused on the big picture or small details?",
    "Do you make decisions based on logic or feelings?",
    "How do you recharge after a long day?",
    "Do you enjoy trying new things or sticking to routines?",
    "Are you more of a listener or a talker?",
    "How do you react to unexpected changes?",
    "Do you value efficiency over harmony?"
  ];


export default function QuizContainer () {
    const [gameState, setGameState] = useState<GameState>('START')

    const [assignedType, setAssignedType] = useState<MbtiType>('INTJ')

    const [currentStep, setCurrentStep] = useState(0)

    const [isSubmitting, setIsSubmitting] = useState(false)

    const [finalScore, setFinalScore] = useState<number | null>(null) 

    const startChallenge = () => {
        setAssignedType('INTJ')
        setCurrentStep(0)
        setFinalScore(null) 
        setGameState('QUIZ')
    }

    const handleNext = () => {
        if (currentStep < 9) {
            setCurrentStep(prev => prev + 1) 
        } else {
            submitToBackend() 
        }
    }

    const submitToBackend = async () => {
        setIsSubmitting(true)
        const calculateScore = Math.floor(Math.random() * 100)

        const payload = {
            score_type: assignedType, 
            final_score: calculateScore
        }
    

        try {
            await postSingleResult(payload) 
            setGameState('RESULT')
        } catch(e) {
            console.error("Submission Failed", e)
            alert('There has been an error with sending you data. Please stay tuned till fixed')
        } finally {
            setIsSubmitting(false)
        }
    }

        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
              <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8">
                
                {/* 1. START screen */}
                {gameState === 'START' && (
                  <StartScreen onStart={startChallenge} />
                )}
          
                {/* 2. QUIZ screen */}
                {gameState === 'QUIZ' && (
                  <QuestionCard 
                    question={QUESTIONS[currentStep]}
                    step={currentStep + 1}
                    totalSteps={QUESTIONS.length}
                    targetType={assignedType}
                    onNext={handleNext} // The logic we just wrote!
                    isLast={currentStep === QUESTIONS.length - 1}
                    loading={isSubmitting}
                  />
                )}
          
                {/* 3. RESULT screen */}
                {gameState === 'RESULT' && (
                  <ResultView 
                    score={finalScore ?? 0} 
                    type={assignedType}
                    onRestart={() => setGameState('START')}
                  />
                )}
          
              </div>
            </div>
          );
}
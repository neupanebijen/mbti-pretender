'use client'

import {useState} from 'react'

import { MbtiType } from '@/types/quiz';

import StartScreen from './StartScreen';
import ResultView from './ResultView';
import QuestionCard from './QuestionCard';

import { submitToBackend } from '@/lib/api';

import useQuizSession from '@/hooks/useQuizSession';

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
    const {state, actions} = useQuizSession() 

    const startChallenge = () => {
        actions.resetSession()
    }

    const handleNext = () => {
        if (!state.answerText.trim()) {
          alert('Empty field')
          return 
        }


        const newAnswers = [...state.answers, state.answerText] 
        actions.setAnswers(newAnswers)  
        console.log(newAnswers) 

        actions.setAnswerText('')
        if (state.currentStep < 9) {
            actions.setCurrentStep(prev => prev + 1) 
        } else {
            submitData(newAnswers) 
        }
    }

    const submitData = async (newAnswers: String[]) => {
        actions.setIsSubmitting(true)
        const calculateScore = Math.floor(Math.random() * 100)

        const payload = {
            score_type: state.assignedType, 
            final_score: calculateScore, 
            answers: newAnswers
        }
    

        try {
            const response = await submitToBackend(payload) 
            if(response) actions.setGameState('RESULT')
        } catch(e) {
            console.error("Submission Failed", e)
            alert('There has been an error with sending you data. Please stay tuned till fixed')
        } finally {
            actions.setIsSubmitting(false)
        }
    }

        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
              <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8">
                
                {/* 1. START screen */}
                {state.gameState === 'START' && (
                  <StartScreen onStart={startChallenge} />
                )}
          
                {/* 2. QUIZ screen */}
                {state.gameState === 'QUIZ' && (
                  <QuestionCard 
                    question={QUESTIONS[state.currentStep]}
                    step={state.currentStep + 1}
                    totalSteps={QUESTIONS.length}
                    targetType={state.assignedType}
                    onNext={handleNext} // The logic we just wrote!
                    isLast={state.currentStep === QUESTIONS.length - 1}
                    loading={state.isSubmitting}
                    answerText = {state.answerText}
                    setAnswerText = {actions.setAnswerText} 
                  />
                )}
          
                {/* 3. RESULT screen */}
                {state.gameState === 'RESULT' && (
                  <ResultView 
                    score={state.finalScore ?? 0} 
                    type={state.assignedType}
                    onRestart={() => actions.setGameState('START')}
                  />
                )}
          
              </div>
            </div>
          );
}
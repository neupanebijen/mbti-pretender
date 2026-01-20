
import { MbtiCode } from "@/types/mbti-definitions";
import { useState } from "react";

type GameState = 'START' | 'QUIZ' | 'RESULT'

const useQuizSession = () => {
  const [gameState, setGameState] = useState<GameState>('START');
  const [answers, setAnswers] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answerText, setAnswerText] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [assignedType, setAssignedType] = useState<MbtiCode>("INTJ")
  const [finalScore, setFinalScore] = useState<number>(0)

  // The "Factory Reset" function
  const resetSession = () => {
    setAnswers([]);
    setAnswerText('');
    setCurrentStep(0);
    setGameState('QUIZ');
    setAssignedType('INTJ')
    // Any other states to wipe...
  };

  return {
    state: { gameState, answers, currentStep, answerText, isSubmitting, assignedType, finalScore },
    actions: { setGameState, setAnswers, setCurrentStep, setFinalScore, setAssignedType, setAnswerText, setIsSubmitting, resetSession }
  };
}

export default useQuizSession
'use client'

import QuestionCard from './QuestionCard';

import { submitToBackend } from '@/lib/api';

import useQuizSession from '@/hooks/useQuizSession';
import { MbtiCode } from '@/types/mbti-definitions';
import { useRouter } from 'next/navigation';


interface QuizContainerProps {
  type: MbtiCode,
  questions: string[]
}

export default function QuizContainer({ type, questions }: QuizContainerProps) {
  const { state, actions } = useQuizSession()
  const router = useRouter()


  const handleNext = () => {
    if (!state.answerText.trim()) {
      alert('Empty field')
      return
    }


    const newAnswers = [...state.answers, state.answerText]
    actions.setAnswers(newAnswers)

    actions.setAnswerText('')
    if (state.currentStep < questions.length - 1) {
      actions.setCurrentStep(prev => prev + 1)
    } else {
      submitData(newAnswers)
    }
  }

  const submitData = async (newAnswers: String[]) => {
    actions.setIsSubmitting(true)

    const payload = {
      score_type: type,
      answers: newAnswers
    }


    try {
      const response = await submitToBackend(payload)
      if (response) router.push(`/result?type=${type}&score=${response.score}`)
    } catch (e) {
      console.error("Submission Failed", e)
      alert('There has been an error with sending you data. Please stay tuned till fixed')
    } finally {
      actions.setIsSubmitting(false)
    }
  }

  return (
    <div className="py-15 bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8">
        {/*QUIZ screen */}
        <QuestionCard
          question={questions[state.currentStep]}
          step={state.currentStep + 1}
          totalSteps={questions.length}
          targetType={type}
          onNext={handleNext} // The logic we just wrote!
          isLast={state.currentStep === questions.length - 1}
          loading={state.isSubmitting}
          answerText={state.answerText}
          setAnswerText={actions.setAnswerText}
        />
      </div>
    </div>
  );
}
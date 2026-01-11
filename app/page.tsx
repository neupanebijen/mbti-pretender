'use client'

import {useState} from 'react'

// Static Data: Constants for the game in prototype
const MBTI_TYPES = ['INTJ', 'ENFP', 'ISTP', 'INFJ', 'ESTJ', 'ENTP'];
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

const MBTIGame = () => {

  const [gameState, setGameState] = useState<'START' | 'QUIZ' | 'RESULT'>('START')
  const [assignedType, setAssignedType] = useState('')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [inputValue, setInputValue] = useState('') 
  
  

  // Logic
  const startChallenge = () => {
    const randomType = MBTI_TYPES[Math.floor(Math.random() * MBTI_TYPES.length)]
    setAssignedType(randomType) 
    setGameState('QUIZ') 
  }

  const handleAnswer = () => {
    setInputValue('') 
    if(currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1) 
    } else {
      finishGame() 
    }
  }

  const finishGame = async () => {
    setIsSubmitting(true) 
  
    const randomScore = Math.floor(Math.random() * 100)

    const payload = {
      scoreType: assignedType, 
      finalScore: randomScore
    }

    try{
      const response = await fetch('http://localhost:8000score/postSingleResult', {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(payload)
      })

      if (response.ok) {
        setGameState('RESULT')
      } else {
        alert("Failed to send datat to Go backend. Is the server running")
      }
    } catch (error) {
      console.error("Error connecting to the backend: ", error )
      alert(`Your score is: ${randomScore}. Could not connect to localhost:8000. Ensure go server is running`)
      setGameState('START')
    } finally {
      setIsSubmitting(false) 
    }
  }

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50 text-black">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
        {/* Start screen */}
        {gameState === 'START' && (
          <>
            <h1 className="text-2xl font-bold mb-4">MBTI Pretender</h1>
            <p className="mb-6">Can you act like a different personality type?</p>
            <button onClick={startChallenge} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Start Prototype</button>
          </>
        )}

        {/* Quiz Screen */}
        {gameState ==='QUIZ' &&(
          <>
            <div className="mb-4 text-sm font-semibold text-blue-500">Pretend to be : {assignedType}</div>
            <h2 className="text-xl mb-4">Question {currentQuestion +1} </h2>
            <p className="mb-6 font-medium">{QUESTIONS[currentQuestion]}</p>
            <textarea value={inputValue}
             onChange={e => setInputValue(e.target.value)} 
             className="w-full border p-2 rounded mb-4" 
             placeholder={`Answer for question no. ${currentQuestion + 1}`}>
              
            </textarea>
            <button disabled={isSubmitting} onClick={handleAnswer} className="w-full bg-green-600 text-white py-2 rounded-lg disabled:bg-gray-400">
                {currentQuestion === QUESTIONS.length -1 ? 'Finish & Get AI Score': 'Next Question'}
              </button>
          </>
        )}

        {/* Result Screen */}
        {gameState === 'RESULT' && (
          <>
            <h1 className="text-3xl font-bold text-green-600 mb-2">Success!</h1>
            <p className="mb-4">Your result has been sent to the Go backend.</p>
            <button onClick={() => window.location.reload()} className="text-blue-600 underline">
              Try again
            </button>
          </>
        )}
      </div>
    </main>
  )
}

export default MBTIGame 
// This is the select-type default page
import MbtiCard from "@/components/MbtiCard";
import { MBTI_LIST } from "@/constants/mbti"
import { MbtiDefinition } from "@/types/mbti-definitions"

export default function SelectTypePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 flex flex-col items-center py-10">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-800">Select Your MBTI Type</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl px-2">
        {MBTI_LIST.map((mbti: MbtiDefinition) => (
          <MbtiCard key={mbti.code} mbti={mbti}/> 
        ))}
      </div>
    </div>
  );
}

// List of 16 UI cards 
// A select that matches the state of the current UI card. 
// Randomize the page to select the type. 
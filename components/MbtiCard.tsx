// This is the Mbti card component: 
// Currently used in: select-type
import { MbtiDefinition } from "@/types/mbti-definitions"
import Link from "next/link";

interface MbtiCardProps {
    mbti: MbtiDefinition, 
}

export default function MbtiCard({mbti}: MbtiCardProps) {
  return (

          <div
            key={mbti.code}
            className="bg-white rounded-xl shadow-md flex flex-col items-center p-6 hover:bg-blue-50 transition-colors duration-200"
          >
            <img
              src={mbti.image}
              alt={`Image of ${mbti.code} MBTI type`}
              className="w-24 h-24 rounded-full border-4 border-blue-200 shadow-sm mb-4 bg-gray-50"
            />
            <h3 className="text-xl font-bold text-gray-700 mb-2">{mbti.code}</h3>
            <p className="text-gray-500 text-sm mb-2">{mbti.label}</p>
            <Link href={{
                pathname: '/quiz', 
                query: {type: mbti.code}, 
            }} className="mt-2 px-4 py-2 rounded bg-gradient-to-r from-blue-400 to-purple-400 text-white font-semibold shadow hover:scale-105 hover:from-blue-500 hover:to-purple-500 transition-all duration-150">
              Select
            </Link>
          </div>
  );
}

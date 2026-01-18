export type MbtiCode = 
  // Analysts
  | 'INTJ' | 'INTP' | 'ENTJ' | 'ENTP'
  // Diplomats
  | 'INFJ' | 'INFP' | 'ENFJ' | 'ENFP'
  // Sentinels
  | 'ISTJ' | 'ISFJ' | 'ESTJ' | 'ESFJ'
  // Explorers
  | 'ISTP' | 'ISFP' | 'ESTP' | 'ESFP';

export interface MbtiDefinition {
    code: MbtiCode, 
    image: string, 
    label: string 
}
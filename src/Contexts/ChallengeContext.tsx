import { createContext, useState, ReactNode } from 'react';
import challenges from '../../challenges.json';


interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengeContextData {
  level: number;
  currentExperience: number;
  challengeCompleted: number;
  activeChallenge: Challenge;
  experienceToNextLevel: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
}

interface ChallengeProviderProps {
  children: ReactNode;
}

export const ChallengeContext = createContext({} as ChallengeContextData );

export function ChallengeProvider({ children }: ChallengeProviderProps ) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience ] = useState(0);
  const [challengeCompleted, setChallengeCompleted] = useState(0);

  const [ activeChallenge, setActiveChallenge ] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4,2)



  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];


    setActiveChallenge(challenge)
  }

  function resetChallenge() {
    setActiveChallenge(null)
  }

  return (
    <ChallengeContext.Provider 
      value={{ 
        level,
        currentExperience,
        challengeCompleted,
        levelUp,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel,
      }}
    >
      {children}
    </ChallengeContext.Provider>
  )
}
import { useState, useEffect } from 'react';
import { MASTER_WORD_LIST } from './data/words';
import SetupScreen from './components/SetupScreen';
import PlayScreen from './components/PlayScreen';
import RoundEndScreen from './components/RoundEndScreen';
import GameOverScreen from './components/GameOverScreen';
import InstructionScreen from './components/InstructionScreen';

export default function App() {
  const [gameState, setGameState] = useState('instructions'); 
  const [teams, setTeams] = useState([]);
  const [unplayedWords, setUnplayedWords] = useState([...MASTER_WORD_LIST]);
  const [gameWords, setGameWords] = useState([]); 
  const [currentRound, setCurrentRound] = useState(1);
  const [remainingWords, setRemainingWords] = useState([]);
  const [currentWord, setCurrentWord] = useState('');
  const [activeTeamIdx, setActiveTeamIdx] = useState(0);
  const [timeLeft, setTimeLeft] = useState(45);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isTimerRunning && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0 && isTimerRunning) {
      setIsTimerRunning(false);
      handleTurnEnd();
    }
    return () => clearInterval(timer);
  }, [isTimerRunning, timeLeft]);

  const startGame = () => {
    if (teams.length >= 2) {
      let pool = unplayedWords.length < 40 ? [...MASTER_WORD_LIST] : [...unplayedWords];
      const shuffledPool = pool.sort(() => Math.random() - 0.5);
      const selected40 = shuffledPool.slice(0, 40);
      
      setUnplayedWords(shuffledPool.slice(40));
      setGameWords(selected40);
      shuffleAndSetWords(selected40);
      setGameState('play');
    }
  };

  const shuffleAndSetWords = (wordList) => {
    const shuffled = [...wordList].sort(() => Math.random() - 0.5);
    setRemainingWords(shuffled);
    setCurrentWord(shuffled[0]);
  };

  const handleCorrect = () => {
    const updatedTeams = [...teams];
    updatedTeams[activeTeamIdx].score += 1;
    setTeams(updatedTeams);
    nextWord();
  };

  const nextWord = () => {
    const newRemaining = remainingWords.filter((w) => w !== currentWord);
    if (newRemaining.length === 0) {
      setIsTimerRunning(false);
      setGameState('roundEnd');
    } else {
      setRemainingWords(newRemaining);
      setCurrentWord(newRemaining[0]);
    }
  };

  const handleTurnEnd = () => {
    setIsTimerRunning(false);
    setTimeLeft(45);
    
    const updatedTeams = [...teams];
    const currentTeam = updatedTeams[activeTeamIdx];
    currentTeam.turnIdx = (currentTeam.turnIdx + 1) % currentTeam.players.length;
    setTeams(updatedTeams);
    setActiveTeamIdx((prevIdx) => (prevIdx + 1) % teams.length);
  };

  const startNextRound = () => {
    if (currentRound === 3) {
      setGameState('gameOver');
    } else {
      setCurrentRound(currentRound + 1);
      shuffleAndSetWords(gameWords);
      setActiveTeamIdx(0);
      setTimeLeft(45);
      setGameState('play');
    }
  };

  const resetGame = () => {
    setTeams(teams.map(t => ({ ...t, score: 0, turnIdx: 0 })));
    setCurrentRound(1);
    setGameState('setup');
  };

  // State Machine Routing
  // State Machine Routing
  switch (gameState) {
    case 'instructions':
      return <InstructionScreen onNext={() => setGameState('setup')} />;
    case 'setup':
      return <SetupScreen teams={teams} setTeams={setTeams} startGame={startGame} />;
    case 'play':
      return (
        <PlayScreen 
          teams={teams} activeTeamIdx={activeTeamIdx} currentRound={currentRound}
          remainingWords={remainingWords} currentWord={currentWord}
          timeLeft={timeLeft} isTimerRunning={isTimerRunning}
          setIsTimerRunning={setIsTimerRunning} handleCorrect={handleCorrect}
          nextWord={nextWord} handleTurnEnd={handleTurnEnd}
        />
      );
    case 'roundEnd':
      return <RoundEndScreen currentRound={currentRound} startNextRound={startNextRound} />;
    case 'gameOver':
      return <GameOverScreen teams={teams} resetGame={resetGame} />;
    default:
      return null;
  }
}
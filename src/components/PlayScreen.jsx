export default function PlayScreen({ teams, activeTeamIdx, currentRound, remainingWords, currentWord, timeLeft, isTimerRunning, setIsTimerRunning, handleCorrect, nextWord, handleTurnEnd }) {
  const currentTeam = teams[activeTeamIdx];
  const speaker = currentTeam.players[currentTeam.turnIdx];
  const guessers = currentTeam.players.filter((_, i) => i !== currentTeam.turnIdx).join(' & ');

  const getRoundInstructions = () => {
    if (currentRound === 1) return "Explain the word without saying it!";
    if (currentRound === 2) return "Say ONLY ONE word as a clue!";
    return "Act it out! No talking allowed!";
  };

  return (
    <div className="min-h-screen bg-[#EAB308] bg-[url('/doodles.jpg')] bg-cover bg-center bg-blend-overlay text-[#991b1b] p-6 flex flex-col items-center">
      <div className="w-full max-w-md flex justify-between items-center mb-6 bg-black text-white p-3 rounded-xl font-bold border-4 border-[#991b1b]">
        <div>Round {currentRound} — {remainingWords.length} Cards Left</div>
        <div className="text-amber-400">Team: {currentTeam.name}</div>
      </div>

      <div className="bg-[#fef3c7] border-4 border-black rounded-xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-full max-w-md text-center transform -rotate-1">
        <p className="text-lg font-bold text-black mb-2">{speaker} explains to {guessers}</p>
        <p className="text-sm font-bold text-red-600 mb-6 bg-red-100 p-2 rounded border border-red-300">
          {getRoundInstructions()}
        </p>
        
        <div className="text-5xl font-black mb-8 text-black my-8 break-words leading-tight">
          {isTimerRunning ? currentWord : "????"}
        </div>

        <div className={`text-6xl font-black mb-8 ${timeLeft <= 10 ? 'text-red-600 animate-pulse' : 'text-[#991b1b]'}`}>
          ⏱️ {timeLeft}s
        </div>

        {!isTimerRunning && timeLeft === 45 ? (
          <button onClick={() => setIsTimerRunning(true)} className="w-full bg-[#EAB308] text-black border-4 border-black font-black text-2xl py-4 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-1 transition-all">
            START TURN
          </button>
        ) : (
          <div className="flex gap-4">
            <button onClick={handleCorrect} disabled={!isTimerRunning} className="flex-1 bg-green-500 text-white border-4 border-black font-black text-xl py-4 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-1 transition-all disabled:opacity-50">
              ✅ GOT IT!
            </button>
            {currentRound !== 1 && (
              <button onClick={nextWord} disabled={!isTimerRunning} className="flex-1 bg-red-500 text-white border-4 border-black font-black text-xl py-4 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-1 transition-all disabled:opacity-50">
                ⏭️ PASS
              </button>
            )}
          </div>
        )}
      </div>

      {isTimerRunning && (
         <button onClick={handleTurnEnd} className="mt-8 text-black font-bold underline decoration-2 bg-white/80 px-4 py-1 rounded">
           End Turn Early
         </button>
      )}
    </div>
  );
}
export default function GameOverScreen({ teams, resetGame }) {
  const sortedTeams = [...teams].sort((a, b) => b.score - a.score);
  return (
    <div className="min-h-screen bg-[#EAB308] bg-[url('/doodles.jpg')] bg-cover bg-center bg-blend-overlay p-6 flex flex-col items-center justify-center">
      <div className="bg-[#fef3c7] border-4 border-black rounded-xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-full max-w-md text-center transform rotate-1">
        <h1 className="text-5xl font-black text-[#991b1b] mb-2 tracking-tighter">🏆 WINNER 🏆</h1>
        <h2 className="text-3xl font-bold text-black mb-8">{sortedTeams[0].name}</h2>
        
        <div className="space-y-3 text-left mb-8">
          {sortedTeams.map((t, i) => (
            <div key={i} className="flex justify-between items-center bg-white border-2 border-black p-4 rounded font-bold text-lg">
              <span className="text-black">{i + 1}. {t.name}</span>
              <span className="text-[#991b1b] text-2xl font-black">{t.score} pts</span>
            </div>
          ))}
        </div>

        <button onClick={resetGame} className="w-full bg-[#EAB308] text-black border-4 border-black font-black text-2xl py-4 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-1 transition-all">
          PLAY AGAIN 🔄
        </button>
      </div>
    </div>
  );
}
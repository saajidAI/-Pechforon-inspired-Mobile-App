export default function RoundEndScreen({ currentRound, startNextRound }) {
  return (
    <div className="min-h-screen bg-[#EAB308] bg-[url('/doodles.jpg')] bg-cover bg-center bg-blend-overlay text-[#991b1b] p-6 flex flex-col items-center justify-center">
      <div className="bg-[#fef3c7] border-4 border-[#991b1b] rounded-xl p-8 shadow-[6px_6px_0px_0px_#991b1b] w-full max-w-md text-center">
        <h2 className="text-4xl font-black mb-4">Round {currentRound} Complete!</h2>
        <p className="text-xl font-bold text-black mb-8">All 40 cards were guessed.</p>
        <button onClick={startNextRound} className="w-full bg-[#991b1b] text-white border-4 border-black font-black text-2xl py-4 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-1 transition-all">
          {currentRound === 3 ? 'SEE FINAL SCORES 🏆' : `START ROUND ${currentRound + 1} ▶`}
        </button>
      </div>
    </div>
  );
}
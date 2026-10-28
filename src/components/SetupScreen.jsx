import { useState } from 'react';

export default function SetupScreen({ teams, setTeams, startGame }) {
  const [teamName, setTeamName] = useState('');
  const [p1, setP1] = useState('');
  const [p2, setP2] = useState('');
  const [p3, setP3] = useState('');

  const handleAddTeam = () => {
    if (teamName && p1 && p2) {
      const players = [p1, p2, p3].filter(name => name.trim() !== '');
      setTeams([...teams, { name: teamName, players, score: 0, turnIdx: 0 }]);
      setTeamName(''); setP1(''); setP2(''); setP3('');
    }
  };

  return (
    <div className="min-h-screen bg-[#EAB308] bg-[url('/doodles.jpg')] bg-cover bg-center bg-blend-overlay text-[#991b1b] p-6 font-sans flex flex-col items-center">
      <h1 className="text-5xl font-black mb-2 tracking-tighter drop-shadow-md">প্যাঁচফোড়ন</h1>
      
      <div className="text-center mb-8 max-w-md px-2">
        <p className="text-sm font-black text-[#991b1b] mb-3 uppercase drop-shadow-sm tracking-wide">
          Acting, Posing, Mimicking are allowed in every round
        </p>
        <p className="text-sm font-bold text-black leading-relaxed bg-[#fef3c7] p-4 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          প্যাঁচ deck এর সব শব্দ guess করা হয়ে গেলেই এক রাউন্ড শেষ হয়। ঐ কার্ডগুলোই আবার shuffle করে নতুন প্যাঁচ deck বানিয়ে পরের রাউন্ডে যেতে হবে। ৩ রাউন্ড শেষে যে টিমের বা যার পয়েন্ট সবচেয়ে বেশি তারাই বিজয়ী।
        </p>
      </div>
      
      <div className="bg-[#fef3c7] border-4 border-[#991b1b] rounded-xl p-6 shadow-[6px_6px_0px_0px_#991b1b] w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-[#991b1b] pb-2">👥 Add Teams</h2>
        <input className="w-full mb-3 p-3 border-2 border-[#991b1b] rounded font-bold" placeholder="Team Name" value={teamName} onChange={(e) => setTeamName(e.target.value)} />
        <input className="w-full mb-3 p-3 border-2 border-[#991b1b] rounded font-bold" placeholder="Player 1 Name" value={p1} onChange={(e) => setP1(e.target.value)} />
        <input className="w-full mb-3 p-3 border-2 border-[#991b1b] rounded font-bold" placeholder="Player 2 Name" value={p2} onChange={(e) => setP2(e.target.value)} />
        <input className="w-full mb-4 p-3 border-2 border-[#991b1b] rounded font-bold" placeholder="Player 3 Name (Optional)" value={p3} onChange={(e) => setP3(e.target.value)} />
        
        <button onClick={handleAddTeam} className="w-full bg-[#EAB308] text-black border-4 border-black font-black text-xl py-3 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-1 transition-all mb-6">
          + ADD TEAM
        </button>

        <div className="space-y-2 mb-6">
          {teams.map((t, i) => (
            <div key={i} className="flex justify-between items-center bg-white border-2 border-black p-3 rounded font-bold">
              <span className="text-lg">{t.name}</span>
              <span className="text-xs text-gray-600 text-right w-1/2">{t.players.join(' & ')}</span>
            </div>
          ))}
        </div>

        {teams.length >= 2 && (
          <div className="mt-6 border-t-2 border-[#991b1b] pt-6">
            <button onClick={startGame} className="w-full bg-[#991b1b] text-white border-4 border-black font-black text-2xl py-4 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-1 transition-all">
              PLAY NOW! ▶
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
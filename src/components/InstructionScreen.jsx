import React from 'react';

export default function InstructionScreen({ onNext }) {
  return (
    <div className="min-h-screen bg-[#fde047] bg-[url('/doodles.jpg')] bg-repeat bg-[length:800px_800px] bg-blend-multiply flex flex-col items-center justify-center p-4 md:p-8 font-sans">
      
      {/* The "Paper" Card matching the physical manual */}
      <div className="bg-[#fef6ca] max-w-lg w-full rounded-md shadow-2xl overflow-hidden border-2 border-gray-400">
        
        {/* Header - Reusing your custom Title */}
        <div className="flex justify-center pt-8 pb-4">
           <h1 
             className="text-5xl font-bengali text-[#991b1b] tracking-wide"
             style={{ textShadow: '-2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff, -3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000, 3px 3px 0 #000, 6px 6px 0 #000' }}
           >
             প্যাঁচফোড়ন
           </h1>
        </div>

        <div className="px-6 pb-6 mt-2">
          
          {/* Section 1: Game Components */}
          <div className="mb-6">
            <span className="bg-[#5c6983] text-white px-3 py-1 rounded-sm text-sm font-bold shadow-md">
              খেলার সামগ্রী
            </span>
            <ul className="mt-3 text-gray-800 font-bold text-sm space-y-1 ml-1">
              <li>৪০ টি শব্দ</li>
              <li>১ টি ইন-গেম টাইমার</li>
              <li>Minimum ৪ জন সাথী</li>
            </ul>
          </div>

          {/* Section 2: Brief Description */}
          <div className="bg-[#3b4559] text-white text-center py-1.5 font-bold text-sm shadow-md">
            সংক্ষিপ্ত বিবরণ
          </div>
          
          <div className="bg-[#dfdbca] p-4 text-sm font-bold text-gray-800 leading-relaxed text-justify mb-6 shadow-inner border border-[#d1cdbc]">
            ৪০ শব্দের shuffled প্যাঁচ Deck নিয়ে খেলা শুরু হবে। প্রতি দলে turnwise একজন clue দিবে (cluegiver) এবং আরেকজন guess করবে (guesser)। প্রতি দল তার turn-এ ৪৫ সেকেন্ডে সর্বোচ্চ শব্দ guess করার চেষ্টা করবে। এভাবে প্রতি রাউন্ডে যত শব্দ guess করতে পারবে তা হবে দলের পয়েন্ট। Cluegiver স্ক্রিনে আসা শব্দ guess করাতে যেকোনো কিছু বলতে পারবে, এমনকি mimic করে বা অভিনয় করে বুঝানোর চেষ্টা করতে পারবে। তবে রাউন্ড যত সামনে আগাবে clue দেওয়ার ক্ষমতা তত কমতে থাকবে।
          </div>

          {/* Section 3: Rules Table */}
          <table className="w-full text-center border-collapse border border-gray-500 font-bold text-sm">
            <thead>
              <tr className="bg-[#3b4559] text-white">
                <th className="border border-gray-500 py-2 font-normal w-1/4">রাউন্ড</th>
                <th className="border border-gray-500 py-2 font-normal w-1/4">শব্দ সংখ্যা</th>
                <th className="border border-gray-500 py-1 font-normal w-1/4 leading-tight">Guess<br/>সংখ্যা</th>
                <th className="border border-gray-500 py-1 font-normal w-1/4 leading-tight">Pass<br/>করা যাবে?</th>
              </tr>
            </thead>
            <tbody className="bg-[#dfdbca] text-gray-800">
              <tr>
                <td className="border border-gray-500 py-2">১ম</td>
                <td className="border border-gray-500 py-2">Unlimited</td>
                <td className="border border-gray-500 py-2">Unlimited</td>
                <td className="border border-gray-500 py-2">না</td>
              </tr>
              <tr>
                <td className="border border-gray-500 py-2">২য়</td>
                <td className="border border-gray-500 py-2">১</td>
                <td className="border border-gray-500 py-2">১</td>
                <td className="border border-gray-500 py-2">হ্যাঁ</td>
              </tr>
              <tr>
                <td className="border border-gray-500 py-2">৩য়</td>
                <td className="border border-gray-500 py-2">০</td>
                <td className="border border-gray-500 py-2">১</td>
                <td className="border border-gray-500 py-2">হ্যাঁ</td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>

      {/* Button to proceed to the Setup Screen */}
      <button 
        onClick={onNext} 
        className="mt-8 w-full max-w-lg bg-[#991b1b] text-white border-4 border-black font-black text-2xl py-4 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-1 transition-all"
      >
        LET'S START THE GAME
      </button>
    </div>
  );
}
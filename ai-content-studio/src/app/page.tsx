import GeneratorPanel from '@/components/GeneratorPanel';

export default function Home() {
  return (
    <main className="flex min-h-screen bg-black text-white">
      {/* Бокова панель */}
      <GeneratorPanel />
      
      {/* Робоча область (Прев'ю) */}
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="bg-gray-800 rounded-lg p-2 shadow-2xl border border-gray-700 w-full max-w-4xl aspect-video flex items-center justify-center relative overflow-hidden">
            <p className="text-gray-500 absolute z-10">Тут буде вікно прев'ю результату</p>
            <div className="w-full h-full bg-gray-900 rounded opacity-50"></div>
        </div>
      </div>
    </main>
  );
}
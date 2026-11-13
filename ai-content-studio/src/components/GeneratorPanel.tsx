export default function GeneratorPanel() {
  return (
    <div className="w-80 bg-gray-900 p-4 h-screen overflow-y-auto border-r border-gray-700">
      <h2 className="text-xl font-bold mb-4">Налаштування генерації</h2>
      
      {/* Промпти */}
      <div className="mb-4">
        <label className="block text-sm mb-1">Prompt</label>
        <textarea className="w-full bg-gray-800 rounded p-2 text-sm border border-gray-600 focus:border-blue-500 outline-none" rows={3} defaultValue="A zombie story, cinematic..."></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-sm mb-1">Negative Prompt</label>
        <textarea className="w-full bg-gray-800 rounded p-2 text-sm border border-gray-600 outline-none" rows={2}></textarea>
      </div>

      {/* Параметри */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        <div>
          <label className="block text-xs mb-1">Width</label>
          <input type="number" className="w-full bg-gray-800 p-1 rounded border border-gray-600" defaultValue={512} />
        </div>
        <div>
          <label className="block text-xs mb-1">Height</label>
          <input type="number" className="w-full bg-gray-800 p-1 rounded border border-gray-600" defaultValue={512} />
        </div>
      </div>

      {/* Слайдери */}
      <div className="mb-4">
        <label className="block text-sm mb-1">CFG Scale (7.0)</label>
        <input type="range" min="1" max="20" step="0.5" className="w-full" />
      </div>
      <div className="mb-4">
        <label className="block text-sm mb-1">Steps (20)</label>
        <input type="range" min="1" max="150" className="w-full" />
      </div>

      <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4 transition-colors">
        Згенерувати
      </button>
    </div>
  );
}
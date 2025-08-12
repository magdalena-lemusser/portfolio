export default function GridTest() {
  return (
    <div className="w-full max-w-xl mx-auto p-6 border border-gray-300">
      <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded">
        <div className="bg-blue-400 text-white p-4 text-center">Column 1</div>
        <div className="bg-green-400 text-white p-4 text-center">Column 2</div>
      </div>
    </div>
  );
}

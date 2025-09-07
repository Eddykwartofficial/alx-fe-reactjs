import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Counter App</h1>
        
        {/* Display Current Count */}
        <div className="mb-8">
          <p className="text-lg text-gray-600 mb-2">Current Count:</p>
          <div className="text-6xl font-bold text-indigo-600 mb-4">
            {count}
          </div>
        </div>

        {/* Counter Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={increment}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Increment (+)
          </button>
          
          <button
            onClick={decrement}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Decrement (-)
          </button>
          
          <button
            onClick={reset}
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Reset
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-sm text-gray-500">
          <p>Click the buttons to interact with the counter!</p>
        </div>
      </div>
    </div>
  );
}

// App component that uses the Counter
function App() {
  return <Counter />;
}

export default App;
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to bg-lime-400 h-[100vh] w-full">
      <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center font">
        <h1 className="text-4xl font-thin">
          Weather <span className="font-black">Forecast</span>
        </h1>
        <p className="text-sm mt-2">
          Enter a place below you want to know the weather of
        </p>
        <div className="flex mt-10 md:mt-4 justify-center">
          <input
            type="text"
            value={""}
            className="px-2 py-1 border-2 border-white rounded-l-lg"
          />
          <button className="rounded-r-md border-2 border-zinc-100 hover:border-zinc-500 hover:text-zinc-500 px-2 py-1 curs">
            Search
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;

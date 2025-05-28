import { useState } from "react";


function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
          onClick={()=>setColor("red")}
          className="outline-none  px-3 py-2 rounded-full"
          style={{backgroundColor:"red"}}
          >red</button>

          <button 
          onClick={()=>setColor("green")}
          className="outline-none  px-3 py-2 rounded-full"
          style={{backgroundColor:"green"}}
          >red</button>

          <button
          onClick={()=>setColor("grey")}
          className="outline-none  px-3 py-2 rounded-full"
          style={{backgroundColor:"grey"}}
          >red</button>

          <button 
          onClick={()=>setColor("olive")}
          
          className="outline-none  px-3 py-2 rounded-full"
          style={{backgroundColor:"olive"}}
          >red</button>

          <button
          onClick={()=>setColor("yellow")}
          className="outline-none  px-3 py-2 rounded-full"
          style={{backgroundColor:"yellow"}}
          >red</button>
        </div>
      </div>
    </div>
  );
}

export default App;
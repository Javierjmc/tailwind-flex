import { useState } from "react"


function App() {
  const [flex,setFlex]=useState(false)
  const [gap,setGap]=useState('0')
  const [direction,setDirection]=useState('flex-row')
  const [justify,setJustify]=useState('justify-start')
  const [items,setItems]=useState('items-start')
  return (
    <div className="bg-gray-800 text-gray-200 px-4 py-4 h-screen flex flex-col gap-8">
      <nav>
        <ul className="flex justify-center gap-10 text-2xl uppercase">
          <li className="underline"><a href="">flex</a></li>
          <li><a href="">grid</a></li>
        </ul>
      </nav>
      <div className="flex gap-8 justify-center">
        <form className="flex flex-col gap-4">
          <fieldset className="flex gap-2 items-center">
            <input onChange={()=>setFlex(flex?false:true)} className="w-6 h-6" type="checkbox"/>
            <label className="font-bold" htmlFor="">flex</label>
          </fieldset>
          <fieldset className="flex gap-2">
            <select onChange={(event)=>setGap(event.target.value)} name="" id="" className="px-0.5 py-1 w-32 bg-gray-600 shadow-lg">
              <option value="0">gap-0</option>
              <option value="1">gap-1</option>
              <option value="2">gap-2</option>
              <option value="3">gap-3</option>
              <option value="4">gap-4</option>
              <option value="5">gap-5</option>
              <option value="6">gap-6</option>
              <option value="7">gap-7</option>
              <option value="8">gap-8</option>
              <option value="9">gap-9</option>
              <option value="10">gap-10</option>
            </select>
          </fieldset>
          <fieldset className="flex gap-2">
            <select onChange={(event)=>setDirection(event.target.value)} name="" id="" className="px-0.5 py-1 w-32 bg-gray-600 shadow-lg">
              <option value="flex-row">flex-row</option>
              <option value="flex-row-reverse">flex-row-reverse</option>
              <option value="flex-col">flex-col</option>
              <option value="flex-col-reverse">flex-col-reverse</option>
            </select>
          </fieldset>
          <fieldset className="flex gap-2">
            <select onChange={(event)=>setJustify(event.target.value)} name="" id="" className="px-0.5 py-1 w-32 bg-gray-600 shadow-lg">
              <option value="justify-start">justify-start</option>
              <option value="justify-center">justify-center</option>
              <option value="justify-end">justify-end</option>
              <option value="justify-between">justify-between</option>
              <option value="justify-around">justify-around</option>
              <option value="justify-evenly">justify-evenly</option>
            </select>
          </fieldset>
          <fieldset className="flex gap-2">
            <select onChange={(event)=>setItems(event.target.value)} name="" id="" className="px-0.5 py-1 w-32 bg-gray-600 shadow-lg">
              <option value="items-start">items-start</option>
              <option value="items-end">items-end</option>
              <option value="items-center">items-center</option>
              <option value="items-baseline">items-baseline</option>
            </select>
          </fieldset>
        </form>     
        <section className={`bg-gray-600 font-bold text-xl h-[400px] w-[800px] border-8 ${flex && "flex"} gap-${gap} ${direction} ${justify} ${items}`}>
          <div className="bg-gray-900 w-16 h-16 border-4 flex justify-center items-center shadow-lg">1</div>
          <div className="bg-gray-900 w-16 h-16 border-4 flex justify-center items-center shadow-lg">2</div>
          <div className="bg-gray-900 w-16 h-16 border-4 flex justify-center items-center shadow-lg">3</div>        
        </section>      
      </div>
    </div>
  )
}

export default App

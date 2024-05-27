import { useState } from "react"


function App() {
  const [flex,setFlex]=useState(false)
  const [gap,setGap]=useState(false)
  const [gapValue,setGapValue]=useState('')
  const [direction,setDirection]=useState(false)
  const [directionValue,setDirectionValue]=useState('')
  const [justify,setJustify]=useState(false)
  const [justifyValue,setJustifyValue]=useState('')
  const [items,setItems]=useState(false)
  const [itemsValue,setItemsValue]=useState('')

  const handlerChangeGap = (event:Event) => {
    setGap(false)
    if( event.target === null ) return
    if( event.target instanceof HTMLSelectElement === false ) return
    const newValue = event.target.value
    setTimeout(() => {
      setGapValue( newValue )
      setGap(true)
    },100)
  }

  const handlerChangeDirection = (event:Event) => {
    setDirection(false)
    if( event.target === null ) return
    if( event.target instanceof HTMLSelectElement === false ) return
    const newValue = event.target.value
    setTimeout(() => {
      setDirectionValue( newValue )
      setDirection(true)
    },100)
  }

  const handlerChangeJustify = (event:Event) => {
    setJustify(false)
    if( event.target === null ) return
    if( event.target instanceof HTMLSelectElement === false ) return
    const newValue = event.target.value
    setTimeout(() => {
      setJustifyValue( newValue )
      setJustify(true)
    },100)
  }

  const handlerChangeItems = (event:Event) => {
    setItems(false)
    if( event.target === null ) return
    if( event.target instanceof HTMLSelectElement === false ) return
    const newValue = event.target.value
    setTimeout(() => {
      setItemsValue( newValue )
      setItems(true)
    },100)
  }

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
            <select onChange={handlerChangeGap} name="" id="" className="px-0.5 py-1 w-32 bg-gray-600 shadow-lg">
              <option value="gap-0">gap-0</option>
              <option value="gap-1">gap-1</option>
              <option value="gap-2">gap-2</option>
              <option value="gap-3">gap-3</option>
              <option value="gap-4">gap-4</option>
              <option value="gap-5">gap-5</option>
              <option value="gap-6">gap-6</option>
              <option value="gap-7">gap-7</option>
              <option value="gap-8">gap-8</option>
              <option value="gap-9">gap-9</option>
              <option value="gap-10">gap-10</option>
            </select>
          </fieldset>
          <fieldset className="flex gap-2">
            <select onChange={handlerChangeDirection} name="" id="" className="px-0.5 py-1 w-32 bg-gray-600 shadow-lg">
              <option value="flex-row">flex-row</option>
              <option value="flex-row-reverse">flex-row-reverse</option>
              <option value="flex-col">flex-col</option>
              <option value="flex-col-reverse">flex-col-reverse</option>
            </select>
          </fieldset>
          <fieldset className="flex gap-2">
            <select onChange={handlerChangeJustify} name="" id="" className="px-0.5 py-1 w-32 bg-gray-600 shadow-lg">
              <option value="justify-start">justify-start</option>
              <option value="justify-center">justify-center</option>
              <option value="justify-end">justify-end</option>
              <option value="justify-between">justify-between</option>
              <option value="justify-around">justify-around</option>
              <option value="justify-evenly">justify-evenly</option>
            </select>
          </fieldset>
          <fieldset className="flex gap-2">
            <select onChange={handlerChangeItems} name="" id="" className="px-0.5 py-1 w-32 bg-gray-600 shadow-lg">
              <option value="items-start">items-start</option>
              <option value="items-end">items-end</option>
              <option value="items-center">items-center</option>
              <option value="items-baseline">items-baseline</option>
            </select>
          </fieldset>
        </form>     
        <section className={`bg-gray-600 rounded font-bold text-xl h-[400px] w-[800px] border-4 ${flex && "flex"} ${gap} ${direction} ${justify} $c ${items}`}>
          <div className="bg-gray-900 w-16 h-16 border-4 flex justify-center items-center shadow-lg">1</div>
          <div className="bg-gray-900 w-16 h-16 border-4 flex justify-center items-center shadow-lg">2</div>
          <div className="bg-gray-900 w-16 h-16 border-4 flex justify-center items-center shadow-lg">3</div>        
        </section>      
      </div>

      <pre className="mx-auto">
        <code className="text-gray-100 text-lg">
          &lt;div className=
            <span className="font-bold text-orange-300">"
              <span className={(flex?"inline-block":"hidden") + " px-1 animate-see-me"}>flex</span>
              <span className={(gap?"inline-block":"hidden") + " px-1 animate-see-me"}>{ gapValue }</span>
              <span className={(direction?"inline-block":"hidden") + " px-1 animate-see-me"}>{ directionValue }</span>
              <span className={(justify?"inline-block":"hidden") + " px-1 animate-see-me"}>{ justifyValue }</span>
              <span className={(items?"inline-block":"hidden") + " px-1 animate-see-me"}>{ itemsValue }</span>
            "</span> &gt;
            <br />
            <div className="ml-5 text-gray-300">
              &lt;div&gt;1&lt;/div&gt;
              <br />
              &lt;div&gt;2&lt;/div&gt;
              <br />
              &lt;div&gt;3&lt;/div&gt;
            </div>
            
          &lt;/div&gt;
        </code>
      </pre>

    </div>
  )
}

export default App

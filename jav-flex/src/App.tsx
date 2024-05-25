function App() {
  return (
    <div className="bg-gray-800 text-gray-200 px-40 py-4 h-screen flex flex-col gap-8">
      <nav>
        <ul className="flex justify-center gap-10 text-2xl uppercase">
          <li className="underline"><a href="">flex</a></li>
          <li><a href="">grid</a></li>
        </ul>
      </nav>
      <div className="flex gap-8 justify-center">
        <form className="text-xl flex flex-col gap-4">
          <fieldset className="flex gap-2 items-center">
            <input className="w-6 h-6" type="checkbox"/>
            <label className="font-bold" htmlFor="">flex</label>
          </fieldset>
          <fieldset className="flex gap-2">
            <select name="" id="" className="px-2 py-1 w-48 bg-gray-600 shadow-lg">
              <option value="">gap-0</option>
              <option value="">gap-1</option>
              <option value="">gap-2</option>
              <option value="">gap-3</option>
              <option value="">gap-4</option>
              <option value="">gap-5</option>
            </select>
          </fieldset>
          <fieldset className="flex gap-2">
            <select name="" id="" className="px-2 py-1 w-48 bg-gray-600 shadow-lg">
              <option value="">flex-row</option>
              <option value="">flex-row-reverse</option>
              <option value="">flex-col</option>
              <option value="">flex-col-reverse</option>
            </select>
          </fieldset>
          <fieldset className="flex gap-2">
            <select name="" id="" className="px-2 py-1 w-48 bg-gray-600 shadow-lg">
              <option value="">justify-start</option>
              <option value="">justify-center</option>
              <option value="">justify-end</option>
              <option value="">justify-between</option>
              <option value="">justify-around</option>
              <option value="">justify-evenly</option>
            </select>
          </fieldset>
          <fieldset className="flex gap-2">
            <select name="" id="" className="px-2 py-1 w-48 bg-gray-600 shadow-lg">
              <option value="">items-start</option>
              <option value="">items-end</option>
              <option value="">items-center</option>
              <option value="">items-baseline</option>
            </select>
          </fieldset>
        </form>     
        <section className="bg-orange-600 font-bold text-xl h-[400px] w-[800px] border-8 border-orange-200">
          <div className="bg-gray-700 w-20 h-20 border-8 border-orange-950 flex justify-center items-center shadow-lg m-1">1</div>
          <div className="bg-gray-700 w-20 h-20 border-8 border-orange-950 flex justify-center items-center shadow-lg m-1">2</div>
          <div className="bg-gray-700 w-20 h-20 border-8 border-orange-950 flex justify-center items-center shadow-lg m-1">3</div>        
        </section>      
      </div>
    </div>
  )
}

export default App

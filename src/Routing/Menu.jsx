import Input from "../Components/Input/Input"
import AnimatedPage from "../Components/AnimatedPage/AnimatedPage"

function Menu()
{

  return (
    
      <section className="w-11/12 mx-auto my-10 bg-slate-200 rounded-md shadow-md shadow-gray-300-500/50">
        <AnimatedPage>

          <div className="flex flex-col gap-6 text-xl w-1/5 text-gray-600 pl-6 pr-3 border-r-2 border-gray-300">
            <form className="w-full my-3 flex flex-row gap-5">
              <Input InputPlaceholder="What are you looking for?"/>
            </form>

            <div className="flex flex-col">
              <label htmlFor="product-type" className="text-base font-bold">Choose a category</label>
              <select name="product-type" id="product-type" 
              className="text-base rounded-lg block w-full p-2.5 bg-slate-300 outline-none placeholder-gray-400">
                <option value="none">None</option>
                <option value="laptop">Laptops</option>
                <option value="tablets">Tablets</option>
                <option value="phones">Phones</option>
                <option value="processors">Processors</option>
              </select>
            </div>
            

          <div className="flex flex-col">
            <div>
              <label htmlFor="search-brand" className="text-base font-bold">Choose a brand</label>
              <div className="overflow-auto max-h-40 flex flex-col">
              
                <div className="inline-flex items-center">
                  <label className="flex items-center cursor-pointer relative">
                    <input 
                    value="samsung"
                    type="checkbox" 
                    className="peer h-4 w-4 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-400 checked:bg-blue-600 checked:border-blue-600" id="check1" />
                    <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    </span>
                  </label>
                  <label className="text-base mx-1">Samsung</label>
                </div>

                <div className="inline-flex items-center">
                  <label className="flex items-center cursor-pointer relative">
                    <input 
                    value="dell"
                    type="checkbox" 
                    className="peer h-4 w-4 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-400 checked:bg-blue-600 checked:border-blue-600" id="check1" />
                    <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    </span>
                  </label>
                  <label className="text-base mx-1">Dell</label>
                </div>

                <div className="inline-flex items-center">
                  <label className="flex items-center cursor-pointer relative">
                    <input 
                    value="hp"
                    type="checkbox" 
                    className="peer h-4 w-4 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-400 checked:bg-blue-600 checked:border-blue-600" id="check1" />
                    <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    </span>
                  </label>
                  <label className="text-base mx-1">HP</label>
                </div>

                <div className="inline-flex items-center">
                  <label className="flex items-center cursor-pointer relative">
                    <input 
                    value="apple"
                    type="checkbox" 
                    className="peer h-4 w-4 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-400 checked:bg-blue-600 checked:border-blue-600" id="check1" />
                    <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    </span>
                  </label>
                  <label className="text-base mx-1">Apple</label>
                </div>

                <div className="inline-flex items-center">
                  <label className="flex items-center cursor-pointer relative">
                    <input 
                    value="asus"
                    type="checkbox" 
                    className="peer h-4 w-4 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-400 checked:bg-blue-600 checked:border-blue-600" id="check1" />
                    <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    </span>
                  </label>
                  <label className="text-base mx-1">Asus</label>
                </div>

                <div className="inline-flex items-center">
                  <label className="flex items-center cursor-pointer relative">
                    <input 
                    value="msi"
                    type="checkbox" 
                    className="peer h-4 w-4 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-400 checked:bg-blue-600 checked:border-blue-600" id="check1" />
                    <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    </span>
                  </label>
                  <label className="text-base mx-1">MSI</label>
                </div>

                <div className="inline-flex items-center">
                  <label className="flex items-center cursor-pointer relative">
                    <input 
                    value="huawei"
                    type="checkbox" 
                    className="peer h-4 w-4 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-400 checked:bg-blue-600 checked:border-blue-600" id="check1" />
                    <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    </span>
                  </label>
                  <label className="text-base mx-1">Huawei</label>
                </div>

              </div>
              <Input InputPlaceholder="Search a brand" InputId="search-brand"/>
            </div>
              
          </div>

          <div className="flex flex-col py-6">
            <label className="text-base font-bold">Operating systems</label>
            <select name="product-type" id="product-type" 
              className="text-base rounded-lg block w-full p-2.5 bg-slate-300 outline-none placeholder-gray-400">
                <option value="none">None</option>
                <option value="laptop">Linux</option>
                <option value="tablets">Windows</option>
                <option value="phones">iOS</option>
                <option value="processors">Android</option>
              </select>
                  
          </div>
            
        </div>
        </AnimatedPage>
      </section> 
    
  
)
}

export default Menu
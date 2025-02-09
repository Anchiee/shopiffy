import Input from "../Components/Input/Input";
import AnimatedPage from "../Components/AnimatedPage/AnimatedPage";
import Card from "../Components/ProductCard/Card";
import { useEffect, useState } from "react";
import { useProducts } from "../Hooks/Product/useProduct";

function Menu() {
  
  const {products, request, errorStatus, isLoading, handleCategory, handleBrand, handleOs,
    handleSearchProduct, handleInput
   } = useProducts()


  useEffect(() => {
      //its a get request since null is passed to data
      request(null, "product", "getproducts")
  }, [])

  const addToCart = (productName) => {
    request({model: productName}, "cart", "cart")
  }




  
  return (
      <section className="w-11/12 h-5/6 mx-auto my-10 bg-slate-200 rounded-md shadow-md shadow-gray-500-500/50">
        
        <AnimatedPage>
          <div className="flex">
            {/* filter section*/}
            <section className="hidden md:flex flex-col gap-6 text-xl w-1/5 text-gray-600 pl-6 pr-3 border-r-2 border-gray-300">
              {/* Search Form */}
              <form className="w-full my-3 flex flex-row gap-5" method="post" onSubmit={handleSearchProduct}>
                <Input InputPlaceholder="Search a product" 
                InputOnChange={handleInput} />
              </form>

              {/* Category Selector */}
              <div className="flex flex-col">
                <label htmlFor="product-type" className="text-base font-bold">
                  Choose a category
                </label>
                <select
                  name="product-type"
                  id="product-type"
                  className="text-base rounded-lg block w-full p-2.5 bg-slate-300 outline-none placeholder-gray-400 
                  cursor-pointer"
                  onChange={handleCategory}
                >
                  <option value="none">None</option>
                  <option value="laptops">Laptops</option>
                  <option value="tablets">Tablets</option>
                  <option value="phones">Phones</option>
                </select>
              </div>

              {/* Brand Selector */}
              <div className="flex flex-col">
                <label htmlFor="search-brand" className="text-base font-bold">
                  Choose a brand
                </label>
                <div className="overflow-auto max-h-40 flex flex-col">
                  {[
                    { label: "Samsung", value: "samsung" },
                    { label: "Dell", value: "dell" },
                    { label: "HP", value: "hp" },
                    { label: "Apple", value: "apple" },
                    { label: "Asus", value: "asus" },
                    { label: "MSI", value: "msi" },
                    { label: "Huawei", value: "huawei" },
                  ].map((brand, index) => (
                    <div className="inline-flex items-center" key={index}>
                      <label className="flex items-center cursor-pointer relative">
                        <input
                          value={brand.value}
                          type="checkbox"
                          className="peer h-4 w-4 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-400 checked:bg-blue-600 checked:border-blue-600"
                          id={`check-${index}`}
                          onChange={handleBrand}
                         
                        />
                        <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth="1"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </label>
                      <label className="text-base mx-1">{brand.label}</label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Operating System Selector */}
              <div className="flex flex-col py-6">
                <label className="text-base font-bold" htmlFor="product-type">Operating systems</label>
                <select
                  name="product-type"
                  id="product-type"
                  className="text-base rounded-lg block w-full p-2.5 bg-slate-300 outline-none placeholder-gray-400
                  cursor-pointer"
                  onChange={handleOs}
                  >

                  <option value="none">None</option>
                  <option value="linux">Linux</option>
                  <option value="windows">Windows</option>
                  <option value="ios">iOS</option>
                  <option value="android">Android</option>
                </select>
              </div>
            </section>

            {/* Products Content */}
            <section className="py-6 px-5  overflow-auto w-full max-h-[35rem] md:max-h-[38.2rem]">
              
                {errorStatus && 
                  <div className="flex justify-center items-center h-full">
                    <AnimatedPage>
                      <h1 className="text-5xl font-bold my-3">Oops.. something went wrong</h1>
                      <p className="text-2xl">{errorStatus}</p>
                    </AnimatedPage>
                  </div>
                }

                {isLoading &&
                  <div className="flex justify-center items-center h-full">
                    <img src="/src/assets/spinner.gif" width="150" alt="loading"/>
                  </div>
                }
                
                {!isLoading && !errorStatus && (
                  
                    <AnimatedPage>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {products.map((product, index) => (
                      <Card CardPath={product.path} CardName={product.model} CardDescription={product.description}
                      CardPrice={product.price} ButtonText="Add to cart" ButtonFunc={() => {addToCart(product.model)}} key={index}/>
                    ))}
                      </div>
                    </AnimatedPage>
                    
                 
                )}
              
            </section>
          </div>
        </AnimatedPage>
      </section>
  );
}

export default Menu;

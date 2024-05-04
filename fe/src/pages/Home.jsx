import React, { useContext,  useRef, useState } from "react";
import Favourite from "../components/Favourite";
import Loader from "../components/Loader";
import AllModels from "../components/AllModels";
import { ModelContext } from "../context/ModelContext";

const Home = () => {

  const { modelData, loading } = useContext(ModelContext);
  const [searchValue, setSearchValue] = useState("");
  const [filteredModel, setFilteredModel] = useState(modelData);
  const searchInput = useRef(null);
  
  const handleinputChange = (e) =>{
    e.preventDefault();
    setSearchValue(searchInput.current.value);
    setFilteredModel(modelData.filter((model) => model.model_name.toLowerCase().includes(searchValue.toLowerCase())))
  }  

  return (
    <>
      <div className="pt-10 flex justify-center">
        <form className="my-4 py-4 sm:p-0 md:p-0 w-full sm:w-full md:w-2/3 lg:w-1/2 xl:w-1/2 flex justify-center gap-1 sm:flex,sm:justify-center,sm:items-center" >
          <input
            ref={searchInput}
            onChange={handleinputChange}
            className="m-2 px-4 py-2 w-[80%] rounded-md border-2 border-slate-400"
            type="text"
            placeholder="Search AI models.."
          />
        </form>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <>
          {searchValue ? (
             <div>
             <h1 className="font-extrabold font-serif ml-4 text-lg">
               Search Results
             </h1>
             <AllModels data={filteredModel}/>
           </div>
          ) : (
            <>
              <div className="mb-10 ">
            <h1 className="font-extrabold font-serif ml-4 text-lg">
              More Subscribed AI Models
            </h1>
            <div className="flex flex-wrap items-center ">
              <Favourite data={modelData} />
            </div>
          </div>
          <div>
            <h1 className="font-extrabold font-serif ml-4 text-lg">
              All AI-Models
            </h1>
            <AllModels data={modelData}/>
          </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Home;

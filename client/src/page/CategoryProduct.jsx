import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import productCategory from "../helper/productCategory";
import VerticalCard from "../componet/VerticalCard";
import SummaryApi from "../common";
import axios from "axios";

const CategoryProduct = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [filterCategoryList, setFilterCategoryList] = useState([]);
  
  const location = useLocation();
  const urlSearch = new URLSearchParams(location.search);
  const urlCategoryListinArray = urlSearch.getAll("category");
  console.log(urlCategoryListinArray)
  

  const urlCategoryListObject = urlCategoryListinArray.reduce((acc, el) => {
      acc[el] = true;
      return acc;
    }, {});

    // console.log(urlCategoryListObject)
    
    
    const [selectCategory, setSelectCategory] = useState(urlCategoryListObject);

    // console.log(selectCategory)
    
    
    
  useEffect(() => {
    const arrayOfCategory = Object.keys(selectCategory)
      .filter((categoryName) => selectCategory[categoryName]);
    setFilterCategoryList(arrayOfCategory);
  }, [selectCategory]);

  // console.log(filterCategoryList)





  const fetchData = async () => {
    try {
        if(filterCategoryList.length!==0){
            const response = await axios.post(SummaryApi.filterProduct.url, { category: filterCategoryList});
    
        // console.log(response)
        setData(response.data.data || [])

        }
        
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

// console.log(data)



useEffect(() => {
fetchData();
}, [filterCategoryList]);




  const handleOnChangeSortBy = (e) => {
    const { value } = e.target;
    setSortBy(value);
    // console.log(value)

    setData((prev) => {
      const sortedData = [...prev];
      // console.log(sortedData)
      if (value === "asc") {
        return sortedData.sort((a, b) => a.sellingPrice - b.sellingPrice);
      }
      if (value === "dsc") {
        return sortedData.sort((a, b) => b.sellingPrice - a.sellingPrice);
      }
      return sortedData;
    });
  };



  const handleSelectCategory = (e) => {
    const { value, checked } = e.target;
    setSelectCategory((prev) => ({
      ...prev,
      [value]: checked,
    }));
  };


  return (
    <div className="container mx-auto p-4">
      <div className="hidde lg:grid grid-cols-[200px,1fr]">
        {/* Left side */}
        <div className="bg-white p-2 min-h-[calc(100vh-120px)] overflow-y-scroll">
          {/* Sort by price */}
          <div>
            <h3 className="text-base uppercase font-medium text-slate-500 border-b pb-1 border-slate-300">
              Sort By
            </h3>
            <form className="text-sm flex flex-col gap-2 py-2">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="sortBy"
                  checked={sortBy === "asc"}
                  onChange={handleOnChangeSortBy}
                  value="asc"
                />
                <label>Price - Low to High</label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="sortBy"
                  checked={sortBy === "dsc"}
                  onChange={handleOnChangeSortBy}
                  value="dsc"
                />
                <label>Price - High to Low</label>
              </div>
            </form>
          </div>

          {/* Filter by category */}
          <div>
            <h3 className="text-base uppercase font-medium text-slate-500 border-b pb-1 border-slate-300">
              Category
            </h3>
            <form className="text-sm flex flex-col gap-2 py-2">
              {Array.isArray(productCategory) &&
                productCategory.map((categoryName, index) => (
                  <div className="flex items-center gap-3" key={index}>
                    <input
                      type="checkbox"
                      name="category"
                      checked={selectCategory[categoryName?.value] || false}
                      value={categoryName.value}
                      id={categoryName.value}
                      onChange={handleSelectCategory}
                    />
                    <label htmlFor={categoryName?.value}>
                      {categoryName?.label}
                    </label>
                  </div>
                ))}
            </form>
          </div>
        </div>


        {/* Right side for products */}
        <div className="px-4">
          <p className="font-medium text-slate-800 text-lg my-2">
            Search Results: {data.length}
          </p>
          <div className="min-h-[calc(100vh-120px)] overflow-y-scroll max-h-[calc(100vh-120px)]">
            {data.length !== 0 && !loading ? (
              <VerticalCard data={data} loading={loading} />
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default CategoryProduct;

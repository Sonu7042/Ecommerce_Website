import React, { useEffect, useState } from "react";
import SummaryApi from "../common";
import { useLocation } from "react-router-dom";
import axios from "axios";
import VerticalCard from "../componet/VerticalCard";

const SearchProduct = () => {
  const query = useLocation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(query.search);

  const fetchSearchProduct = async () => {
    const response = await axios.get(
      SummaryApi.searchProduct.url + query.search
    );
    setData(response.data.data);
    
  };

  useEffect(() => {
    fetchSearchProduct();
  }, [query]);

  return (
    <div className="container mx-auto p-4">
      {loading && <p className="text-lg text-center">Loading ...</p>}

      <p className="text-lg font-semibold my-3">
        Search Results : {data.length}
      </p>

      {data.length === 0 && !loading && (
        <p className="bg-white text-lg text-center p-4">No Data Found...</p>
      )}




      {data.length !== 0 && !loading && (
        <VerticalCard loading={loading} data={data} />
      )}


    </div>
  );
};

export default SearchProduct;

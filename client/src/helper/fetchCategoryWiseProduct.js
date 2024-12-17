import SummaryApi from "../common";
import axios from 'axios'


const fetchCategoryWiseProduct=async(category)=>{
    const response= await axios.post(SummaryApi.categoryWiseProduct.url, {category})
    return response


}



export default fetchCategoryWiseProduct
import SummaryApi from "../common";
import axios from 'axios'
import {toast} from 'react-toastify'

const addToCart= async(e, id)=>{
    console.log()
    e.stopPropagation()
    e.preventDefault()

    // console.log(id)
    if(localStorage.getItem("token")){

    
    const response=  await axios.post(SummaryApi.addToCarProduct.url,{productId: id},{
        headers:{
            token: localStorage.getItem("token")
        }
    })
    console.log(response)
    if(response.data.success){
        toast.success(response.data.message)
    }

    if(response.data.error){
        toast.error(response.data.message)
    }

    return response
}
else{
    toast.error("Please login to add product")
}

    

}

export default addToCart;
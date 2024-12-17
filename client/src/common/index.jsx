

const domain="http://localhost:9000"
// const domain= "https://ecommerce-website-alpha-five.vercel.app"


const SummaryApi={
    signup:{
        url: `${domain}/signup`,
        method:"post"
    },

    login:{
        url: `${domain}/login`,
        method:"post"
    },

    current_user:{
        url: `${domain}/user-details `,
        method:"get"
    },
    allUsers:{
        url:`${domain}/alluser`,
        metthod:"get"
    },
    updateUser:{
        url:`${domain}/update-user`,
        method:"post"
    },

    uploadProduct:{
        url:`${domain}/upload_product`,
        method:"post"
    },

    allProduct:{
        url:`${domain}/get-product`,
        method:"get"
    },

    updateProduct:{
        url:`${domain}/update-product`,
        method:"post"
    },
    productCategory:{
        url: `${domain}/get-productCategory`,
        method:"get"
    },
    categoryWiseProduct:{
        url: `${domain}/category-WiseProduct`,
        method: "post"
    },

    productDetails:{
        url: `${domain}/product-details`,
        method: "post"
    },
    addToCarProduct:{
        url:`${domain}/addToCart`,
        method:'post'
    }




}


export default SummaryApi;

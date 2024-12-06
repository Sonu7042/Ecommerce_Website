

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
    }




}


export default SummaryApi;



const domain="http://localhost:9000"


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
    }




}


export default SummaryApi;

import axios from 'axios';


export const  createHotel = async (token,data) => axios.post(`${process.env.REACT_APP_API}/create-hotel`,data,{

    headers:{
        Authorization: `Bearer ${token}`
    }
})


export const Allhotels = async () => await axios.get( `${process.env.REACT_APP_API}/hotels`)
import { useSelector } from "react-redux";


const NewHotel = () => {

    const {auth} = useSelector((state) => ({...state}))




    return(
        <div className="container-fluid h1 p-5 text-center">
            Hotel Page
        </div>
    )
}


export default NewHotel
import { useSelector } from "react-redux";
import {useState} from 'react';
import {toast} from 'react-toastify';
import AlgoliaPlaces from 'algolia-places-react';
import{DatePicker,Select} from 'antd'
import{moment} from "moment"
import {createHotel} from '../actions/hotel';
import HotelCreateForm from  '../components/forms/HotelCreateForm'


const {Option} = Select




const config = {

    appId:process.env.REACT_APP_ALGO_APP_ID,
    apiKey:process.env.REACT_APP_API_KEY,
    language:"en",
    countries:[]


}


const NewHotel = () => {
    const [values, setValues] = useState({
        title: "",
        content: "",
        image: "",
        price: "",
        from: "",
        to: "",
        bed: "",
        location:""
      });


      const {auth} = useSelector((state) => ({...state}));
      const {token} =  auth;


      const [preview,setPreview] = useState('https://via.placeholder.com/100x100.png?text=PREVIEW');


    //   const [location,setLocation] = useState('')



    const {title,content,image,price,from,to,bed,location} = values;
    




    const handleSubmit =  async (e) => {
        e.preventDefault()

        
        let hotelData = new FormData()

        hotelData.append('title',title)
        hotelData.append('content',content)
        hotelData.append('location',location)
        hotelData.append('price',price)
        image && hotelData.append('image',image)
        hotelData.append('from',from)
        hotelData.append('to',to)
        hotelData.append('bed',bed)


        // console.log([...hotelData])

        try{

        let res =  await createHotel(token,hotelData)

        console.log('Hotel create',res)


        toast('New hotel is posted')



        setTimeout(() => {

            window.location.reload()

        },1000)
    }

    catch(err){
        console.log(err)
        toast.error(err.response.data)
    }
        
        
    }

    const handleImageChange = (e) => {

        console.log(e.target.files[0]);

        setPreview(URL.createObjectURL(e.target.files[0]))
        
        setValues({...values, image:e.target.files[0]})


    }

    const handleChange = (e) => {

        

        setValues({...values, [e.target.name]:e.target.value})

      console.log( "data", <datePicker disabledDate={(current) => console.log('date2',current && current.valueOf() < moment().subtract(1, "days"))} /> )


    }

    // const locations = (e) => {

    //     console.log(e.target.value,"value")
    //        e.preventDefault();
    //        setLocation(e.target.value)
    // }
 

    // const disabled = (current) => {
        
    //     (current) => current && current.valueOf() < moment().subtract(1, 'days')
    // }


    


    return(
        <>
        <div className="container-fluid bg-secondary p-5  h1 p-5 text-center">
           <h2> Add Hotel</h2>
        </div>

        <div className="row">
        <div className=" col-md-10">
                <br />
               <HotelCreateForm
                 values={values}
                 setValues={setValues}
                 handleChange={handleChange}
                 handleImageChange={handleImageChange}
                 handleSubmit={handleSubmit}

               
               />
        </div>
        <div className="col-md-2">
            <img src={preview} alt="preview_image" className="img img-fluid m-2"/>
            
            Image <pre>{JSON.stringify(values,null,4)}</pre></div>
                   

        </div>

        </>
    )
}


export default NewHotel
import {useSelector} from 'react-redux';
import {useState,useEffect} from 'react';
import{Allhotels} from '../actions/hotel';
import SmallCard from '../components/cards/SmallCard';

const Home = () => {


    const [hotels,setHotels] = useState([])
    const state = useSelector(state => (state));



    useEffect(() => {

        loadAllhotels()
    },[])


    const loadAllhotels = async () => {

        let res = await Allhotels()

        setHotels(res.data)


    }



    return(<>
        <div className=" bg-secondary container-fluid p-5 text-center">


            <h1> All hotels </h1>
{/* 
                {JSON.stringify(state)} */}

        </div>


        <div className="container-fluid">
            <br />
            {/* <pre>
                {JSON.stringify(hotels,null,4)}
            </pre> */}
            i
            {hotels.map((hotel) => (
                <SmallCard key={hotel._id} hotel={hotel}/>
            ))}
        </div>

        
        </>
    )



}



export default Home
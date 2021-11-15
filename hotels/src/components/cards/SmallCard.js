import { currencyFormatter } from "../../actions/auth";
import {diffDays} from '../../actions/hotel';
import {useHistory,Link} from 'react-router-dom';
import{EditOutlined,DeleteOutlined} from '@ant-design/icons'





const SmallCard = ({hotel, handleHotelDelete = (h) => h}) => {

    const history = useHistory()
    




    return(
    <>
    <div className="card mb-3">

        <div className="row no-gutters">
             <div className="col-md-4">
                   <img src="http://via.placeholder.com/900x500.png?text=MERN+Booking" alt="default"
                    className="card-image img img-fluid"/>
             </div>

             <div className="col-md-8">
              <div className="card-body">
                   <h3 className="card-title">{hotel.title}
                   <span className="float-right text-primary">
                       {currencyFormatter({
                           amount: hotel.price,
                           currency:"usd"
                       })}
                   </span>
                   </h3>
                   <p className="alert alert-info">{hotel.location}</p>
                   <p className="card-text">{`${hotel.content.substring(1,200)}...`}</p>
                   <p className="card-text">
                       <span className="float-right text-primary">
                            for {diffDays(hotel.from, hotel.to)}  {diffDays(hotel.from, hotel.to) <= 1 ? ' day' : 'days'}
                       </span>
                   </p>

                   <p className="card-text">  {hotel.bed} </p>

                   <p className="card-text">
                       Available from {new Date(hotel.from).toLocaleDateString()}
                   </p>



                   <div className="d-flex justify-content-between h4">

                
                   <button onClick= {() => history.push(`/hotel/${hotel._id}`)} className="btn btn-primary"> Show more</button>


                  <Link to={`/hotel/edit/${hotel._id}`}>
                 <EditOutlined className="text-warning"/>
                </Link>

               <DeleteOutlined  onClick={() => handleHotelDelete(hotel._id)} 
              className='text-danger' />

          

            </div>

                  
                   
              </div>
          
       
         </div>
        
        </div>

 

       

         
    </div>
    
    </>

    )






}


export default SmallCard;
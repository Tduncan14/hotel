import { currencyFormatter } from "../../actions/auth";
import {diffDays} from '../../actions/hotel';

const SmallCard = ({hotel}) => {




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
              </div>
         </div>
        </div>



         
    </div>
    
    </>

    )






}


export default SmallCard;
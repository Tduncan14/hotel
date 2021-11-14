import { currencyFormatter } from "../../actions/auth";

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
                   <h3 className="card-title">{hotel.title}</h3>
                   <span className="float-right text-primary">
                       {currencyFormatter({
                           amount: hotel.price,
                           currency:"usd"
                       })}
                   </span>
              </div>
         </div>
        </div>



         
    </div>
    
    </>

    )






}


export default SmallCard;


import AlgoliaPlaces from 'algolia-places-react';
import{DatePicker,Select} from 'antd'
import{moment} from "moment"



const {Option} = Select




const config = {

    appId:process.env.REACT_APP_ALGO_APP_ID,
    apiKey:process.env.REACT_APP_API_KEY,
    language:"en",
    countries:[]


}


const HotelCreateForm = (props) => {

    const{values,setValues,handleChange,handleImageChange,handleSubmit} = props

    const {title,content,price,location} = values;
  

    return(
         <form onSubmit={handleSubmit} className="m-2">
        <div className="form-group">
             <label className="btn btn-outline-secondary btn-block m-2 text-left">
                 Image
                  <input type="file" name="image" onChange={handleImageChange} accept="image/*" hidden
                  />

             </label>

             <input type="text"
              name="title"
               onChange={handleChange} 
               placeholder="Title" 
               className="form-control m-2"
                value={title}/>
             

             <textarea  name="content" 
             onChange={handleChange}
              placeholder="content"
              name="content"
               className="form-control m-2"
                value={content}/>


             <input type="text" className="form-control m-2 " 
             placeholder="Location" 
             value={location}
             name="location"
             onChange={handleChange}

              style={{height:"50px"}}
              />



             <input type="number"
              onChange={handleChange} 
              name="price"
              placeholder="Price" 
              className="form-control m-2"
               value={price}/>




               <Select onChange={(value) => setValues({...values, bed:value})} className="w-100 m-2" size="large" placeholder="number of beds">
                   <Option key={1}>1</Option>
                   <Option key={2}>2</Option>
                   <Option key={3}>3</Option>
                   <Option key={4}>4</Option>

            </Select>

<DatePicker
    placeholder="From date"
    className="form-control m-2"
    onChange={(date, dateString) =>
      setValues({ ...values, from: dateString })
    }
    // disabledDate={(current) =>
    //   current && current.valueOf() < moment().subtract(1, "days")'}
// 
   
  />


             <DatePicker placeholder="To date"
              className="form-control m-2"
             onChange={(date, dateString) => setValues({...values, to:dateString})}
            //  disabledDate = {(current) =>
            //     current && current.valueOf() < moment().subtract(1, "days")
            //}/
            />


            
        </div>
            <button className="btn btn-outline-primary m-2">Save</button>
    </form>
      
        
    )
}


export default HotelCreateForm
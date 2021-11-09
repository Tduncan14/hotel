    import { useSelector } from "react-redux";
    import { useEffect,useState } from "react";
    import {Card,Avatar,Badge} from 'antd';
    import moment from 'moment';
    import { getAccountBalance,payOutSetting} from "../actions/stripe";
    import {currencyFormatter} from '../actions/auth';
    // asking the user to connect with the stripe
    import{SettingOutlined} from'@ant-design/icons';
    import {toast} from 'react-toastify';

    const {Meta} = Card
    const {Ribbon} = Badge


    const ConnectNav = () => {


        const[loading, setLoading] = useState(false);
        const [balance,setBalance] = useState(0)
     


        const{auth} = useSelector((state) => ({...state}));


        const{user} = auth;


       useEffect(() =>{

        console.log(auth.token)

        getAccountBalance(auth.token).then(res => {

            // console.log(res,'this is the res')
            setBalance(res.data)
        })
       },[])

          const  handlePayoutSettings =  async ()=> {

              setLoading(true)

              try{
                  const res = await payOutSetting(auth.token)

                //   console.log('===>res payout',res)

                  window.location.href = res.data.url

                setLoading(false)

              }

              catch(err){
                  console.log(err)
                  setLoading(false)
                  toast('Unable too access settings, Try again')
              }

               
             


          }


        return(
            <div className="d-flex justify-content-around">
                <Card>
                    <Meta avatar ={<Avatar>{user.name[0]}</Avatar>} title={user.name} description={`Joined ${moment(user.createdAt).fromNow()}`} />
                </Card>

               {auth && auth.user && auth.user.stripe_seller && auth.user.stripe_seller.charges_enabled &&(
                <>
                <Ribbon text="Avaliable" color="gray">
                    <Card className="bg-light pt-1">

                        {balance && balance.pending && balance.pending.map((ba,i) =>(

                            <span className="lead" key={i}>{currencyFormatter(ba)}</span>
                        ))}


                    </Card>

                </Ribbon>
                <Ribbon text="Payouts" color="silver">
                    <Card onClick={handlePayoutSettings} className="bg-light pointer">
                       <SettingOutlined className="h5 pt-2"/>
                    </Card>
                
                </Ribbon>

                </>
               )
       
            
            }
                 </div>
        )
    }


    export default ConnectNav
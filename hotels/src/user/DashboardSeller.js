import DashboardNav from "../components/Dashboardnav";
import ConnectNav from "../components/ConnectNav";


const DashboardSeller = () => {


    return (
        <>
        <div className="container-fluid bg-secondary p-5">
            <ConnectNav />
        </div>

        <div className="container-fluid p-4">
            <DashboardNav/>
        </div>


        <div className="container">
            <p> Show all hotels user had posted</p>
        </div>

        </>
    )




}


export default DashboardSeller
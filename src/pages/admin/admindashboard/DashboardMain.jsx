import react from 'react'
import Firstpage from  './Firstpage'

import old from './css/dashboardmain.module.css'
// import Sidebar from '../../particitant/userdashboard/Sidebar'
import Side from '../../particitant/userdashboard/Side'

const DashboardMain = ()=>{
    return(
        <>
            <div classame={old.manny}>
                <Side/>
                <Firstpage/>
            </div>
            
        </>
    )
}
export default DashboardMain
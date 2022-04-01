import {
    HashRouter,
    Routes,
    Route,
  } from 'react-router-dom'
import Login from '../components/auth/Login'
import DashboardRoutes from './Dashboard.routes'

function AppRoutes(){
    return(
        <HashRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/*" element={ <DashboardRoutes /> } />
            </Routes>
        </HashRouter>
    )
}

export default AppRoutes
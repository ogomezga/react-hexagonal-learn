import {Routes, Route} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalScreen from '../ui/globalScreen/globalScreen.tsx';
import Public from '../ui/public/public.tsx';
import Desktop from '../ui/desktop/desktop.tsx';
import NewTicket from '../ui/newTicket/newTicket.tsx';
import Navbar from '../ui/navbar/navbar.tsx';

function AppRoutes() {
    return (
        <Router>
            <div className="app">
                <Navbar/>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<GlobalScreen/>}/>
                        <Route path="/public" element={<Public/>}/>
                        <Route path="/desktop" element={<Desktop/>}/>
                        <Route path="/newTicket" element={<NewTicket/>}/>
                    </Routes>
                </div>
            </div>
            <Navbar/>
        </Router>
    );
}

export default AppRoutes;
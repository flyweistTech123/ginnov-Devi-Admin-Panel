import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './Pages/Dashboard/Dashboard';
import HostList from './Pages/Host List/HostList';
import DriversList from './Pages/Drivers List/DriversList';
import BookingHistory from './Pages/Booking History/BookingHistory';
import AllCars from './Pages/All Cars/AllCars';
import AllCarBookingList from './Pages/All Car Booking List/AllCarBookingList';
import Allcardetails from './Pages/all car details/Allcardetails';
import Offer from './Pages/Offer/Offer';
import Taxreport from './Pages/Tax report/Taxreport';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/hostlist" element={<HostList />} />
          <Route path="/driverslist" element={<DriversList />} />
          <Route path="/bookinghistory" element={<BookingHistory />} />
          <Route path="/allcars" element={<AllCars />} />
          <Route path="/allcarbookinglist" element={<AllCarBookingList />} />
          <Route path="/allcardetails" element={<Allcardetails />} />
          <Route path="/Offer" element={<Offer />} />
          <Route path="/taxreport" element={<Taxreport />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

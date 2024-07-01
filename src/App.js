import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminRouteProtect from '../src/Components/AdminRouteprotected/AdminRouteprotected'
import Dashboard from './Pages/Dashboard/Dashboard';
import HostList from './Pages/Host List/HostList';
import DriversList from './Pages/Drivers List/DriversList';
import BookingHistory from './Pages/Booking History/BookingHistory';
import AllCars from './Pages/All Cars/AllCars';
import AllCarBookingList from './Pages/All Car Booking List/AllCarBookingList';
import Allcardetails from './Pages/all car details/Allcardetails';
import Offer from './Pages/Offer/Offer';
import Taxreport from './Pages/Tax report/Taxreport';
import Brands from './Pages/Brands/Brands';
import AddBrands from './Pages/Brands/AddBrands';
import EditBrands from './Pages/Brands/EditBrands';
import FAQs from './Pages/FAQs/FAQs';
import AddFAQs from './Pages/FAQs/AddFAQs';
import EditFAQs from './Pages/FAQs/EditFAQs';
import Report from './Pages/Report/Report';
import QuackCoin from './Pages/Quack Coin/QuackCoin';
import AddQuackCoin from './Pages/Quack Coin/AddQuackCoin';
// import AddOffer from './Pages/Offer/AddOffer';
import Login from './Pages/Login/Login';
import AddTaxreport from './Pages/Tax report/AddTaxreport';
import Admin from './Pages/Admin/Admin';
import AddAdminRole from './Pages/Admin/AddAdminRole';
import AllUsers from './Pages/All Users/AllUsers';
import HostProfile from './Pages/Host List/HostProfile';
import PaymentPayout from './Pages/Host List/PaymentPayout';
import HostOffers from './Pages/Host List/HostOffers';
import ReferralHistory from './Pages/Host List/ReferralHistory';
import Recentbookings from './Pages/Host List/Recentbookings';
import NewsReport from './Pages/NoticeNews Report/NewsReport';
import AddNewsReport from './Pages/NoticeNews Report/AddNewsReport';
import CancelationReason from './Pages/Cancelation Reason/CancelationReason';
import UserProfile from './Pages/All Users/UserProfile';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<AdminRouteProtect> <Dashboard /> </AdminRouteProtect>} />
          <Route path="/allusers" element={<AdminRouteProtect><AllUsers /></AdminRouteProtect>} />
          <Route path="/userProfile/:id" element={<AdminRouteProtect><UserProfile /></AdminRouteProtect>} />
          <Route path="/hostlist" element={<AdminRouteProtect><HostList /></AdminRouteProtect>} />
          <Route path="/hostprofile/:id" element={<AdminRouteProtect><HostProfile /></AdminRouteProtect>} />
          <Route path="/driverslist" element={<AdminRouteProtect><DriversList /></AdminRouteProtect>} />
          <Route path="/bookinghistory" element={<AdminRouteProtect><BookingHistory /></AdminRouteProtect>} />
          <Route path="/allcars" element={<AdminRouteProtect><AllCars /></AdminRouteProtect>} />
          <Route path="/allcarbookinglist" element={<AdminRouteProtect><AllCarBookingList /></AdminRouteProtect>} />
          <Route path="/allcardetails" element={<AdminRouteProtect><Allcardetails /></AdminRouteProtect>} />
          <Route path="/Offer" element={<AdminRouteProtect><Offer /></AdminRouteProtect>} />
          <Route path="/taxreport" element={<AdminRouteProtect><Taxreport /></AdminRouteProtect>} />
          <Route path="/brands" element={<AdminRouteProtect><Brands /></AdminRouteProtect>} />
          <Route path="/addbrands" element={<AdminRouteProtect><AddBrands /></AdminRouteProtect>} />
          <Route path="/editbrands/:id" element={<AdminRouteProtect><EditBrands /></AdminRouteProtect>} />
          <Route path="/faqs" element={<AdminRouteProtect><FAQs /></AdminRouteProtect>} />
          <Route path="/addfaqs" element={<AdminRouteProtect><AddFAQs /></AdminRouteProtect>} />
          <Route path="/editfaqs/:id" element={<AdminRouteProtect><EditFAQs /></AdminRouteProtect>} />
          <Route path="/report" element={<AdminRouteProtect><Report /></AdminRouteProtect>} />
          <Route path="/quackcoin" element={<AdminRouteProtect><QuackCoin /></AdminRouteProtect>} />
          <Route path="/addquackcoin" element={<AdminRouteProtect><AddQuackCoin /></AdminRouteProtect>} />
          {/* <Route path="/addoffer" element={<AdminRouteProtect><AddOffer /></AdminRouteProtect>} /> */}
          <Route path="/addtaxreport" element={<AdminRouteProtect><AddTaxreport /></AdminRouteProtect>} />
          <Route path="/admin" element={<AdminRouteProtect><Admin /></AdminRouteProtect>} />
          <Route path="/addadminrole" element={<AdminRouteProtect><AddAdminRole /></AdminRouteProtect>} />
          <Route path="/referralhistory" element={<AdminRouteProtect><ReferralHistory /></AdminRouteProtect>} />
          <Route path="/newsreport" element={<AdminRouteProtect><NewsReport /></AdminRouteProtect>} />
          <Route path="/addnewsreport" element={<AdminRouteProtect><AddNewsReport /></AdminRouteProtect>} />
          <Route path="/cancelationreason" element={<AdminRouteProtect><CancelationReason /></AdminRouteProtect>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

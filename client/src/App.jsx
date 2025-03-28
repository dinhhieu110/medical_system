import { Route, Routes } from 'react-router-dom';
import {
  About,
  Appointment,
  Contact,
  Doctors,
  Home,
  Login,
  MyAppointments,
  MyProfile,
} from './pages';
import { Footer, Header } from './components';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctors/:specialty?" element={<Doctors />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/appointment/:doctorId" element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

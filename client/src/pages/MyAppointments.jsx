import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const MyAppointments = () => {
  const {
    appointments,
    token,
    setAppointments,
    getAppointmentsList,
    backendURL,
    getAllDoctors,
  } = useContext(AppContext);
  console.log('appointments', appointments);

  useEffect(() => {
    if (token) {
      getAppointmentsList();
    } else {
      setAppointments([]);
    }
  }, [token]);

  const isListNotEmpty = appointments.length > 0;

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        backendURL + '/user/cancel-appointment',
        {
          appointmentId,
        },
        { headers: { token } }
      );
      console.log('data', data);
      if (data.success) {
        toast.success(data.message);
        getAppointmentsList();
        getAllDoctors();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <div>
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b border-b-gray-300">
        My Appointments
      </p>
      <div>
        {isListNotEmpty ? (
          appointments.map((item, index) => (
            <div
              className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b border-b-gray-300"
              key={index}
            >
              <div>
                <img
                  className="w-32 bg-indigo-50"
                  src={item.doctorData.image}
                  alt="appointment_img"
                />
              </div>
              <div className="flex-1 flex flex-col gap-0.5 text-sm text-zinc-600">
                <p className="text-neutral-800 font-semibold">
                  {item.doctorData.name}
                </p>
                <p>{item.doctorData.specialty}</p>
                <p className="text-zinc-700 font-medium mmt-1">Address</p>
                <p className="text-xs">{item.doctorData.address.line1}</p>
                <p className="text-xs">{item.doctorData.address.line2}</p>
                <p className="text-sm mt-1">
                  <span className="text-sm font-medium text-neutral-700">
                    Date & Time:
                  </span>
                  {new Date(item.date).toLocaleDateString()} |{item.slotTime}
                </p>
              </div>
              {/* For grid layout */}
              <div></div>
              {!item.cancelled ? (
                <div className="flex flex-col gap-2 justify-end">
                  <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-primary hover:text-white transition-all duration-300  cursor-pointer">
                    Pay online
                  </button>

                  <button
                    onClick={() => cancelAppointment(item._id)}
                    className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-red-600 hover:text-white transition-all duration-600 cursor-pointer "
                  >
                    Cancel appointment
                  </button>
                </div>
              ) : (
                <button disabled className="text-sm text-gray-500">
                  Cancelled
                </button>
              )}
            </div>
          ))
        ) : (
          <p className="text-center mt-4 text-gray-500">
            There's no data to display.
          </p>
        )}
      </div>
    </div>
  );
};

export default MyAppointments;

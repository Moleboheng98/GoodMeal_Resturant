import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from "../App"; 

const AdminTable = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/reservations/get`);
        setReservations(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Error fetching reservations:", error);
      }
    };

    fetchReservations();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Restaurant Reservations</h2>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Phone</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Time</th>
              <th className="px-4 py-2 text-left">Guests</th>
              <th className="px-4 py-2 text-left">Delete</th>
            </tr>
          </thead>

          <tbody>
            {reservations.length === 0 ? (
              <tr>
                <td
                  colSpan="7"
                  className="text-center py-6 text-gray-500 italic"
                >
                  No reservations found
                </td>
              </tr>
            ) : (
              reservations.map((res, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-2">{res.name}</td>
                  <td className="px-4 py-2">{res.email}</td>
                  <td className="px-4 py-2">{res.phone}</td>
                  <td className="px-4 py-2">{res.date}</td>
                  <td className="px-4 py-2">{res.time}</td>
                  <td className="px-4 py-2">{res.guests}</td>
                  <td className="px-4 py-2">
                    <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTable;

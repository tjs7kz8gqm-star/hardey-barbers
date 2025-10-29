"use client";
import React, { useState } from "react";

export default function Home() {
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  // Generate 30-minute time slots for 24 hours
  const generateSlots = () => {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let min of [0, 30]) {
        const formatted =
          `${hour.toString().padStart(2, "0")}:${min
            .toString()
            .padStart(2, "0")}`;
        times.push(formatted);
      }
    }
    return times;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTime || !name || !email) return alert("Please fill all fields.");
    setConfirmed(true);
  };

  return (
    <main
      className="min-h-screen bg-gradient-to-b from-maroon-800 to-yellow-800 text-white flex flex-col items-center"
      style={{
        background: "linear-gradient(to bottom, #800000, #FFD700)",
      }}
    >
      {/* HEADER */}
      <header className="flex flex-col items-center py-8 text-center">
        <img
          src="/eagle-logo.png"
          alt="Hardey Barbers Logo"
          className="w-24 h-24 mb-4 rounded-full border-2 border-gold-400"
        />
        <h1 className="text-4xl font-bold text-white">Hardey Barbers</h1>
        <p className="text-lg text-yellow-200 mt-2">
          Good service • Cheap • 24 Hours • Licensed Barbers • Passion & Precision
        </p>
      </header>

      {/* BOOKING SECTION */}
      <section className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg w-11/12 md:w-1/2">
        <h2 className="text-2xl font-semibold text-yellow-300 mb-4 text-center">
          Book Your $5 Haircut
        </h2>
        {!confirmed ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              className="p-3 rounded bg-white text-black"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="p-3 rounded bg-white text-black"
              placeholder="Your Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <select
              className="p-3 rounded bg-white text-black"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
            >
              <option value="">Select Time</option>
              {generateSlots().map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-maroon-900 font-semibold py-2 px-4 rounded"
            >
              Confirm Appointment
            </button>
          </form>
        ) : (
          <div className="text-center text-lg text-white">
            <p>✅ Appointment Confirmed!</p>
            <p>
              {name}, we’ll see you at <b>{selectedTime}</b>.
            </p>
          </div>
        )}
      </section>

      {/* ABOUT SECTION */}
      <section className="text-center mt-10 px-4 max-w-2xl">
        <h3 className="text-2xl font-bold text-yellow-300 mb-2">Who We Are</h3>
        <p className="text-white text-lg">
          At <b>Hardey Barbers</b>, we combine precision and passion with every
          cut. Our licensed barbers are available 24 hours a day, offering
          affordable $5 cuts with unbeatable service and skill. Experience sharp
          fades, clean trims, and friendly vibes — anytime.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="mt-16 mb-6 text-yellow-300 text-sm text-center">
        © {new Date().getFullYear()} Hardey Barbers — Open 24/7
      </footer>
    </main>
  );
}

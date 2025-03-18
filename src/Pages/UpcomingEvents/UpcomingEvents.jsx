import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const UpcomingEvents = () => {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/events`);
                setEvents(data);
            } catch (err) {
                setError('Error fetching events. Please try again later.');
            } finally {
                setIsLoading(false);
            }
        };
        fetchEvents();
    }, []);

    if (isLoading) {
        return <div className="text-center my-10">Loading events...</div>;
    }

    if (error) {
        return <div className="text-center my-10 text-red-500">{error}</div>;
    }

    return (
        <div className="max-w-7xl mx-auto p-5">
            <h2 className="text-3xl font-bold text-center mb-6">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {events.map((event) => (
                    <div key={event._id} className="bg-gray-100 cursor-pointer group shadow-lg rounded-lg overflow-hidden border-none">

                        {/* Event Image */}
                        <div className="relative">
                            <img src={event.imageURL} alt={event.title} className="w-full group-hover:scale-110 transition h-40 object-cover" />
                            <div className="absolute top-3 right-3 bg-gray-800 text-white px-3 py-1 rounded-md text-sm">
                                {new Date(event.date).toLocaleString('en-US', { month: 'short', day: 'numeric' })}
                            </div>
                        </div>

                        <div className="p-4">

                            {/* Event Title */}
                            <h3 className="text-xl font-semibold mt-2">{event.title}</h3>

                            {/* Event Date & Time */}
                            <p className="text-gray-600 flex items-center mt-2">
                                <FaCalendarAlt className="mr-2" />
                                {new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                            </p>
                            <p className="text-gray-600 flex items-center mt-1">
                                <FaClock className="mr-2" />
                                {event.time}
                            </p>

                            {/* Event Location */}
                            <p className="text-gray-600 flex items-center mt-1">
                                <FaMapMarkerAlt className="mr-2 text-gray-600" />
                                {event.location}
                            </p>

                            {/* Join Link */}
                            <p className="text-blue-600 text-sm font-semibold mt-3 cursor-pointer hover:underline">
                                ⭐ Join others in this event
                            </p>

                            {/* Event Details Button */}
                            <Link to={`/event-details/${event._id}`} className="btn w-full mt-4 bg-gray-900 text-white text-center py-2 rounded-lg hover:bg-gray-700 transition">
                                Event Details →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UpcomingEvents;

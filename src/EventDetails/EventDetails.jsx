import React, { useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EventDetails = () => {
  const { id } = useParams();

  const { data: event, isLoading, isError } = useQuery({
    queryKey: ['eventDetails', id],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/events/${id}`);
      return data;
    },
    enabled: !!id,
  });

  

  if (isLoading) {
    return (
      <div className="text-center my-10 md:my-20">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center my-10 md:my-20 text-red-500">
        <p>Error fetching event details. Please try again later.</p>
      </div>
    );
  }

  return (
    <div>
      {/* Event Image */}
      <div className="w-full h-[190px] md:h-[300px] bg-cover bg-center" style={{ backgroundImage: `url(${event.imageURL})` }}>
        <div className="hero-overlay h-full bg-opacity-90">
          <div className="relative max-w-7xl mx-auto py-8 px-3 md:py-16 md:px-6 text-left">
            <h1 className="font-bold text-lg md:text-4xl mt-20 md:mt-24 text-center text-[#02faee]">
              {event.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Event Details Card */}
      <div className="mx-auto flex flex-col md:flex-row justify-between w-full gap-12 p-6 cursor-pointer group my-10">
        {/* Header */}
        <div className="flex flex-col gap-6 flex-1">
          <div>
            <div className="w-full overflow-hidden rounded-md">
              <img
                className="object-cover w-full md:h-[35rem] group-hover:scale-110 transition"
                src={event.imageURL}
                alt="header image"
              />
            </div>
          </div>
        </div>
        <div className="md:gap-10 flex-1">
          {/* Event Info */}
          <h2 className="text-3xl font-bold text-gray-800">{event.title}</h2>
          <div className="text-xs md:text-lg font-light text-justify text-neutral-500">
            {event.description}
          </div>
          <div className="text-lg text-neutral-900 font-light flex flex-row items-center gap-2">
            
          </div>
          <hr className="my-6" />
          <div>
            <p className="gap-4 font-light text-neutral-500">
              <span className="font-semibold">Location:</span> {event.location}
            </p>
            <p className="gap-4 font-light text-neutral-500">
              <span className="font-semibold">Event Date:</span> {event.date}
            </p>
            <p className="gap-4 font-light text-neutral-500">
              <span className="font-semibold">Time:</span> {event.time}
            </p>
          </div>
          <hr className="my-6" />
        </div>
      </div>
    </div>
  );
};

export default EventDetails;

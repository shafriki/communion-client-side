import React, { useState, useContext } from 'react';
import Swal from 'sweetalert2';
import { BeatLoader } from 'react-spinners';
import { AuthContext } from '../../Providers/AuthProvider';
import { imageUpload } from '../../api/utils';
import useAxiosSecure from '../../Hooks/useAxiousSecure';

const CreateEvents = () => {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const axiosSecure = useAxiosSecure();
    const authToken = localStorage.getItem('authToken'); 

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const date = form.date.value;
        const time = form.time.value;
        const location = form.location.value;
        const image = form.image.files[0];

        if (!user?.email) {
            Swal.fire({
                title: 'Error!',
                text: 'You need to be logged in to create an event.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
            return;
        }

        try {
            setLoading(true);

            const imageURL = image ? await imageUpload(image) : 'https://example.com/default-image.jpg';

            const response = await axiosSecure.post(
                '/events',
                {
                    title,
                    date,
                    time,
                    location,
                    imageURL,
                    email: user?.email,
                },
                {
                    headers: {
                        Authorization: `Bearer ${authToken}`, 
                    },
                }
            );

            if (response?.data?.acknowledged) {
                form.reset();
                Swal.fire({
                    title: 'Success!',
                    text: 'Event created successfully.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                });
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to create the event.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            }
        } catch (err) {
            Swal.fire({
                title: 'Unauthorized!',
                text: 'Your session may have expired. Please log in again.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="p-10 rounded-md bg-gray-200 max-w-screen-md mx-auto shadow my-8">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block font-medium mb-2">Title</label>
                        <input type="text" name="title" className="w-full border p-2 rounded" placeholder="Enter event title" required />
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium mb-2">Date</label>
                        <input type="date" name="date" className="w-full border p-2 rounded" required />
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium mb-2">Time</label>
                        <input type="time" name="time" className="w-full border p-2 rounded" required />
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium mb-2">Location</label>
                        <input type="text" name="location" className="w-full border p-2 rounded" placeholder="Enter event location" required />
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium mb-2">Image</label>
                        <input type="file" name="image" className="w-full border p-2 rounded" required />
                    </div>
                    <button type="submit" className="w-full btn bg-[#383fff] text-white py-2 px-4 rounded hover:bg-[#6fa5f6] transition" disabled={loading}>
                        {loading ? <BeatLoader size={10} color="#ffffff" /> : 'Create Event'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateEvents;

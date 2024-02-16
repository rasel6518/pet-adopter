'use client'

import { useState } from 'react';
import StarRatings from 'react-star-ratings';

const AddReview = () => {

    const [rating, setRating] = useState(5)

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;
        event.target.reset();
        console.log(review);

       

    };


    return (
        <div className="bg-red-100 rounded-md max-w-96 mx-auto">

            <div className="p-4">
                <div className="text-center">
                    <h1 className="text-xl font-semibold">WRITE A REVIEW</h1>
                    <p className="py-5">Feel free to share your opinion with everyone by give an review. Your review will display in homepage review section.</p>
                </div>
                <div className='flex justify-center my-2' data-aos="zoom-in-right">
                    <StarRatings
                        rating={rating}
                        starRatedColor="orange"
                        starHoverColor="orange"
                        changeRating={(r) => setRating(r)}
                        numberOfStars={5}
                        starDimension="25px"
                        starSpacing="5px"
                        name='rating'
                    />
                </div>
                <form onSubmit={handleSubmit} className="flex justify-center flex-col">
                    <textarea className="textarea  textarea-error w-full" placeholder="Write your review min 50 character" name='review'></textarea>
                    <div className="flex justify-center my-4">
                        <button className="btn btn-sm hover:bg-black  bg-[#F04336] text-white">Submit</button>
                    </div>
                </form>

            </div>

        </div>
    );
};

export default AddReview;
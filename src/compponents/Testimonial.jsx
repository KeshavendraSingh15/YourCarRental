import React from 'react'
import { Title } from './Title'
import { assets } from '../assets/assets';

export const Testimonial = () => {
    const testimonials = [
        { 
            name: "Emma Rodriguez",
            location: "Barcelona, Spain",
            image: assets.testimonial_image_1,
            testimonial: "Exceptional service and attention to detail. Everything was handled professionally and efficiently from start to finish. Highly recommended!"
        },
        { 
            name: "John Bosss",
            location: "Paris, Spain",
            image: assets.testimonial_image_2,
            testimonial: "Exceptional service and attention to detail. Everything was handled professionally and efficiently from start to finish. Highly recommended!"
        },
        { 
            name: "Emma Rodes",
            location: "London, Spain",
            image: assets.testimonial_image_1,
            testimonial: "Exceptional service and attention to detail. Everything was handled professionally and efficiently from start to finish. Highly recommended!"
        },
    ];

    return (
        <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
            <Title 
                title='what Our Customer Say' 
                subtitle="Discoveer why discrrning travelers choose StayVenture for their luxury accommadations
                aound the world"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">

                {testimonials.map((testimonial, index) => (
                    <div 
                        key={index} 
                        className="bg-white p-6 rounded-xl shadow max-w-xs cursor-pointer 
                                   transition-all duration-300 ease-out 
                                   hover:shadow-2xl hover:-translate-y-2"
                    >
                        
                        {/* Profile */}
                        <div className="flex items-center gap-3">
                            <img 
                                className="w-12 h-12 rounded-full" 
                                src={testimonial.image} 
                                alt={testimonial.name} 
                            />
                            <div>
                                <p className="font-playfair text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.location}</p>
                            </div>
                        </div>

                        {/* Static 5 stars */}
                        <div className="flex items-center gap-1 mt-4">
                            {Array(5).fill(0).map((_, index) => (
                                <span key={index}><img src={assets.star_icon}></img></span>
                            ))}
                        </div>

                        {/* Testimonial text */}
                        <p className="text-gray-500 max-w-90 mt-4">
                            "{testimonial.testimonial}"
                        </p>
                    </div>
                ))}

            </div>
        </div>
    );
};

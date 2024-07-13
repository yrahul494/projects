import React from 'react';
import { skills, testimonials } from '../data';
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";

export default function Skills() {
  return (
    <section id="skills" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h2 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Here are some of the major tools and technologies I use:
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill, index) => (
            <div key={index} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">{skill}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <h2 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Testimonials
          </h2>
        </div>
        <div className="flex flex-wrap -m-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="block w-5 h-5 text-gray-500 mb-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="leading-relaxed mb-6">{testimonial.quote}</p>
                <div className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={testimonial.image}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">{testimonial.name}</span>
                    <span className="text-gray-500 text-sm uppercase">{testimonial.company}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

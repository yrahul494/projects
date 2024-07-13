import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-400 tracking-widest font-medium title-font mb-1">CLIENT TESTIMONIALS</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">What Clients Say</h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <TerminalIcon className="block w-8 text-indigo-500 mb-4" />
                <p className="leading-relaxed mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <img alt="testimonial" src={testimonial.image} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">{testimonial.name}</span>
                    <span className="text-gray-500 text-xs">{testimonial.company}</span>
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

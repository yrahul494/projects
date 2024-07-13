// src/components/Projects.js
import { CodeIcon } from "@heroicons/react/solid";
import React from 'react';
import { projects, testimonials } from '../data';

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h2 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects
          </h2>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project, index) => (
            <div key={index} className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <img
                  alt={project.title}
                  className="rounded-lg w-full object-cover object-center mb-6"
                  src={project.image}
                />
                <h3 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                  {project.subtitle}
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  {project.title}
                </h2>
                <p className="leading-relaxed text-base">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 inline-flex items-center mt-3"
                >
                  View Project
                </a>
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

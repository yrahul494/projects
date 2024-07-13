import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section id="about" className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Rahul
            <br className="hidden lg:inline-block" />I'm a web developer.
          </h1>
          <p className="mb-8 leading-relaxed">
            I specialize in ReactJS and other Fron-tend technologies. Check out my{' '}
            <Link to="/projects" className="text-indigo-400 hover:text-indigo-500">
              projects
            </Link>{' '}
            or{' '}
            <Link to="/contact" className="text-indigo-400 hover:text-indigo-500">
              contact me
            </Link>
            .
          </p>
                 </div>
      </div>
    </section>
  );
}

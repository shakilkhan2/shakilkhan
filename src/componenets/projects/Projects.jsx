import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    
      <div data-aos="fade-up" className="mx-4 md:mx-28">
      <h1 className="text-3xl font-bold text-slate-500 text-center mt-8">
        <span className="text-amber-500">&lt;</span>Projects
        <span className="text-amber-500">&gt;</span>
      </h1>
      <div className="flex justify-between mt-8 items-center">
        <div className="me-16 w-1/2 hidden md:block">
          <h1 className="font-bold text-xl ">The Art Academy</h1>

          <p>
            The Art Academy website has separate dashboards for administrators,
            instructors, and students.
            <br />
            1. Administrators have the authority to assign the role of an admin
            to instructors, as well as approve or deny classes and provide
            feedback to instructors.
            <br />
            2. Instructors can add and update classes, monitor the status of
            their classes, and view the feedback provided by the admin.
            <br />
            3. Students have access to their own dashboard, where they can see
            their enrolled classes, select new classes, and view their payment
            history.
          </p>
        </div>
        <div  className="border border-amber-600 w-full md:w-96  rounded-xl shadow-2xl p-8">
          <img data-aos="fade-left" className=" rounded-lg" src="https://i.ibb.co/XtdDVW2/mock1.jpg" alt="" />
          <h1 className="font-bold my-2">The Art Academy</h1>
          <p>
            React JS | Express JS | MongoDB | Firebase Authentication |React
            Router | Tailwind CSS{" "}
          </p>
          <div className="flex justify-between mt-8">
            <Link to="https://the-art-academy.web.app/">
            <button className="border border-amber-600 hover:bg-amber-500 rounded-full px-2 p-1">
              Live Site
            </button>
            </Link>
            <Link to="https://github.com/shakilkhan2/the-art-academy">
            <button className="border border-amber-600 hover:bg-amber-500 rounded-full px-2 p-1">
              Source Code
            </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-between my-8 items-center">
        <div className="border border-amber-600 w-full md:w-96  rounded-xl shadow-2xl p-8">
          <img data-aos="fade-right" className=" rounded-lg" src="https://i.ibb.co/LP1T0GS/mock3.jpg" alt="" />
          <h1 className="font-bold my-2">The Art Academy</h1>
          <p>
            React JS | Express JS | MongoDB | Firebase Authentication |React
            Router | Tailwind CSS{" "}
          </p>
          <div className="flex justify-between mt-8">
            <Link to="https://job-quest.netlify.app/">
            <button className="border border-amber-600 hover:bg-amber-500 rounded-full px-2 p-1">
              Live Site
            </button>
            </Link>
            <Link to="https://github.com/shakilkhan2/job-quest">
            <button className="border border-amber-600 hover:bg-amber-500 rounded-full px-2 p-1">
              Source Code
            </button>
            </Link>
          </div>
        </div>
        <div className="ms-16 hidden w-1/2 md:block">
          <h1 className="font-bold text-xl ">Job Quest</h1>

          <p>
          This is a Job site where we can apply on various jobs as our demand.
            <br />
            1. At the home page we can see Job Category and some featured jobs, if we want more jobs we can use `See All Jobs` button.
            <br />
            2. All featured job has a `View Details` button, by using this we can see details information about the job.
            <br />
            3. And after checking all the details about the job we can apply on this job bus clicking `Apply Now` button. We can also use `Start Applying` button from the Home Page for apply any job.
            4. `Applied Jobs` section will show me where I applied.
          </p>
        </div>
      </div>
      <div className="flex  mt-8 items-center">
        <div className="me-16 w-1/2 hidden md:block">
          <h1 className="font-bold text-xl ">Speedy Toy</h1>

          <p>
          Speedy Toy is a toy website where you can find various car toys.
            <br />
            1. In Home page there are 3 categories you will see car, truck & train. You can choose what ever you want.
            <br />
            2. And a logged user can add, update and delete any product with information.
            <br />
            3. User can also check details info of the product but login is mandatory.
            <br />
            4. User can search toys by toy name.
          </p>
        </div>
        <div className="border border-amber-600 w-full md:w-96  rounded-xl shadow-2xl p-8">
          <img data-aos="fade-left" className=" rounded-lg" src="https://i.ibb.co/fY6hR18/mock2.jpg" alt="" />
          <h1 className="font-bold my-2">Speedy Toy</h1>
          <p>
            React JS | Express JS | MongoDB | Firebase Authentication |React
            Router | Tailwind CSS | AOS
          </p>
          <div className="flex justify-between mt-8">
            <Link to="https://speedy-toy.web.app/">
            <button className="border border-amber-600 hover:bg-amber-500 rounded-full px-2 p-1">
              Live Site
            </button>
            </Link>
            <Link to="https://github.com/shakilkhan2/speedy-toy-front-end">
            <button className="border border-amber-600 hover:bg-amber-500 rounded-full px-2 p-1">
              Source Code
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Projects;

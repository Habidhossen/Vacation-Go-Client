import { FaCheckCircle } from "react-icons/fa";

const Summary = () => {
  return (
    <section className="px-20 py-28 bg-[#eaf6f6]">
      <div className="grid grid-cols-2 gap-4">
        <div className="relative">
          <img
            className="p-4"
            src="https://i.ibb.co/RSsFJNQ/bungee-jump-web-project.jpg"
            alt=""
          />
          {/* small part */}
          <div className="absolute top-10 right-0 flex justify-center w-56 bg-white rounded-xl py-3">
            <div className="avatar-group -space-x-6">
              <div className="avatar">
                <div className="w-10">
                  <img src="https://i.ibb.co/RSsFJNQ/bungee-jump-web-project.jpg" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-10">
                  <img src="https://i.ibb.co/RSsFJNQ/bungee-jump-web-project.jpg" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-10">
                  <img src="https://i.ibb.co/RSsFJNQ/bungee-jump-web-project.jpg" />
                </div>
              </div>
            </div>
            <div className="font-fredoka">
              <h5 className="text-base text-primary">125k+</h5>
              <p className="text-xs">Satisfied Clients</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-fredoka text-5xl leading-tight  mb-4">
            Professional vest care and guaranteed quality
          </h1>
          <p className="text-xl  mb-4">
            Lorem ipsum dolor sit amet consectetur. Sed eros turpis et convallis
            egestas turpis. Id nibh amet consectetur enim integer accumsan
            cursus urna. Odio lacus aenean pellente.
          </p>
          <hr />
          <div className="my-6 flex-row ">
            <p className="flex items-center gap-4 text-lg">
              <FaCheckCircle className="text-secondary" /> Lorem ipsum dolor sit
              amet consectetur.
            </p>
            <p className="flex items-center gap-4 text-lg">
              <FaCheckCircle className="text-secondary" /> Lorem ipsum dolor sit
              amet consectetur.
            </p>
            <p className="flex items-center gap-4 text-lg">
              <FaCheckCircle className="text-secondary" /> Lorem ipsum dolor sit
              amet consectetur.
            </p>
          </div>
          <button className="custom-primary-btn">Explore More</button>
        </div>
      </div>

      <div className="flex justify-between mt-32 mx-16">
        <div className="text-center">
          <h1 className="text-5xl font-fredoka">25K+</h1>
          <h5 className="text-lg mt-2">Happy Clients</h5>
        </div>
        <div className="text-center">
          <h1 className="text-5xl font-fredoka">839+</h1>
          <h5 className="text-lg mt-2">Feedback</h5>
        </div>
        <div className="text-center">
          <h1 className="text-5xl font-fredoka">99+</h1>
          <h5 className="text-lg mt-2">Unique Places</h5>
        </div>
        <div className="text-center">
          <h1 className="text-5xl font-fredoka">62+</h1>
          <h5 className="text-lg mt-2">Events</h5>
        </div>
      </div>
    </section>
  );
};

export default Summary;

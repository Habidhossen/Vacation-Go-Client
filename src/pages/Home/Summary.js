import { FaCheckCircle } from "react-icons/fa";

const Summary = () => {
  return (
    <section className="px-20 py-28 bg-[#eaf6f6]">
      <div className="grid grid-cols-2 gap-4">
        <div className="relative">
          <img className="p-4" src="" alt="" />
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
              <p className="text-xs text-text">Satisfied Clients</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-fredoka text-heading text-5xl leading-tight mb-4">
            Guaranteed quality tour guide services
          </h1>
          <p className="text-lg text-text mb-4">
            As a professional individual tour guide, I am committed to providing
            you with the highest quality travel experiences. With my extensive
            knowledge and experience, I can offer you a personalized and
            intimate tour that is tailored to your specific needs and interests.
          </p>
          <hr />
          <div className="my-6 flex-row ">
            <p className="flex items-center gap-4 text-lg text-text">
              <FaCheckCircle className="text-secondary" /> Professional tour
              guide services
            </p>
            <p className="flex items-center gap-4 text-lg text-text">
              <FaCheckCircle className="text-secondary" /> Experienced and
              knowledgeable guides
            </p>
            <p className="flex items-center gap-4 text-lg text-text">
              <FaCheckCircle className="text-secondary" /> Guides with you every
              step of the way
            </p>
            <p className="flex items-center gap-4 text-lg text-text">
              <FaCheckCircle className="text-secondary" /> Focus on
              professionalism and quality
            </p>
          </div>
          <button className="custom-primary-btn">Explore More</button>
        </div>
      </div>

      <div className="flex justify-between mt-32 mx-16">
        <div className="text-center">
          <h1 className="text-5xl font-fredoka text-text">25K+</h1>
          <h5 className="text-lg mt-2 text-heading">Happy Clients</h5>
        </div>
        <div className="text-center">
          <h1 className="text-5xl font-fredoka text-text">839+</h1>
          <h5 className="text-lg mt-2 text-heading">Feedback</h5>
        </div>
        <div className="text-center">
          <h1 className="text-5xl font-fredoka text-text">99+</h1>
          <h5 className="text-lg mt-2 text-heading">Unique Places</h5>
        </div>
        <div className="text-center">
          <h1 className="text-5xl font-fredoka text-text">62+</h1>
          <h5 className="text-lg mt-2 text-heading">Events</h5>
        </div>
      </div>
    </section>
  );
};

export default Summary;

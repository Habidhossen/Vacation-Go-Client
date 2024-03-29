import CountUp from "react-countup";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import profileOne from "../../assets/images/profileOne.png";
import profileThree from "../../assets/images/profileThree.png";
import profileTwo from "../../assets/images/profileTwo.png";
import travelersBg from "../../assets/images/travelersBg.svg";

const SummaryPart = () => {
  return (
    <section className="px-6 md:px-20 lg:px-20 py-28 bg-[#eaf6f6]">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="relative">
          <img className="p-4" src={travelersBg} alt="" />
          {/* small part start */}
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="absolute top-20 left-0 flex justify-center w-52 bg-white rounded-xl shadow-sm py-3 px-0 cursor-pointer"
          >
            <div className="avatar-group -space-x-7">
              <div className="avatar">
                <div className="w-10">
                  <img src={profileOne} />
                </div>
              </div>
              <div className="avatar">
                <div className="w-10">
                  <img src={profileTwo} />
                </div>
              </div>
              <div className="avatar">
                <div className="w-10">
                  <img src={profileThree} />
                </div>
              </div>
            </div>
            <div className="font-fredoka">
              <h5 className="text-base text-primary">
                <CountUp
                  end={25}
                  duration={2}
                  delay={2}
                  enableScrollSpy={true}
                />
                K+
              </h5>
              <p className="text-xs text-text">Satisfied Clients</p>
            </div>
          </div>
          {/* small part end */}
        </div>
        <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="2000">
          <h1 className="font-fredoka text-heading text-3xl md:text-5xl lg:text-5xl leading-tight mb-6">
            Guaranteed quality tour guide services
          </h1>
          <p className="text-lg text-text mb-4">
            As a professional individual tour guide, I am committed to providing
            you with the highest quality travel experiences. With my extensive
            knowledge and experience, I can offer you a personalized and
            intimate tour that is tailored to your specific needs and interests.
          </p>
          <hr />
          <div className="my-8 flex-row">
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
          <Link to="/service" className="custom-primary-btn">
            Explore More
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-32 space-y-6 md:space-y-0 lg:space-y-0">
        <div className="text-center">
          <h1 className="text-5xl font-fredoka text-text">
            <CountUp end={25} duration={2} delay={2} enableScrollSpy={true} />
            K+
          </h1>
          <h5 className="text-lg mt-2 text-heading">Happy Clients</h5>
        </div>
        <div className="text-center">
          <h1 className="text-5xl font-fredoka text-text">
            <CountUp end={839} duration={2} delay={2} enableScrollSpy={true} />+
          </h1>
          <h5 className="text-lg mt-2 text-heading">Feedback</h5>
        </div>
        <div className="text-center">
          <h1 className="text-5xl font-fredoka text-text">
            <CountUp end={99} duration={2} delay={2} enableScrollSpy={true} />+
          </h1>
          <h5 className="text-lg mt-2 text-heading">Unique Places</h5>
        </div>
        <div className="text-center">
          <h1 className="text-5xl font-fredoka text-text">
            <CountUp end={25} duration={2} delay={2} enableScrollSpy={true} />+
          </h1>
          <h5 className="text-lg mt-2 text-heading">Events</h5>
        </div>
      </div>
    </section>
  );
};

export default SummaryPart;

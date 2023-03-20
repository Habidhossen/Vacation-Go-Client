const About = () => {
  const year = new Date().getFullYear();

  return (
    <div className="px-6 md:px-20 lg:px-20 py-12 md:py-28 lg:py-32 text-center bg-white">
      <h1 className="text-3xl md:text-6xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#764BA2] to-[#667EEA]">
        Vacation Go - Tourist Guide Site
      </h1>
      <p className="text-lg text-text my-8">
        Vacation Go is a website designed for tourists seeking adventure on
        their beach trips. The website offers the services of a single tour
        guide who is equipped to provide a range of facilities, such as
        parasailing, scuba diving, horseback riding, beach sports, surfing, and
        many more. This means that tourists can rely on the expertise and
        experience of a professional guide to lead them through their beach
        activities, ensuring a safe and enjoyable experience. With Vacation Go,
        tourists can be assured of access to all the equipment, facilities, and
        guidance necessary to make their beach adventure trip a memorable one.
      </p>
      <p className="text-lg text-text">
        Designed and Developed by{" "}
        <a
          className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#aa076b] to-[#61045f]"
          href="https://habidhossen.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Habid Hossen
        </a>
      </p>
      <p className="text-lg text-text">
        Copyright © {year} Vacation Go. All Right Reserved.
      </p>
    </div>
  );
};

export default About;

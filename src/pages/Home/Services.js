import "../../assets/styles/style.css";
import Service from "./Service";

const Services = () => {
  const servicesData = [
    {
      _id: 1,
      img: "https://i.ibb.co/RypjCnK/zip-line.jpg",
      price: "199",
      title: "Zip lines",
      desc: "Add some adrenalin to your travel senses by zipline tarvel.",
    },
    {
      _id: 2,
      img: "https://i.ibb.co/1vz409v/Kayaking.jpg",
      price: "99",
      title: "Kayaking",
      desc: "Kayaking makes takes thrill to the next level.",
    },
    {
      _id: 3,
      img: "https://i.ibb.co/Qd32vKY/bungee-jump.jpg",
      price: "119",
      title: "Bungee Jump",
      desc: "Bungee jumps is one of the most exhilarating adventure.",
    },
    {
      _id: 4,
      img: "https://i.ibb.co/qB6YmCx/equipments.jpg",
      price: "149",
      title: "Travel Equipments",
      desc: "Explore adventure with Trekking Hat, Jacket, Camping Shoe, Bag etc.",
    },
  ];

  return (
    <section className="my-16 px-20">
      <div className="flex justify-center items-center gap-3 mb-10">
        <div className="section-title-bar"></div>
        <div>
          <h1 className="section-title">
            Find Your <span>Services</span>
          </h1>
        </div>
        <div className="section-title-bar"></div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {servicesData.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;

import serviceImg1 from "../assets/projects/transformer.jpeg";
import serviceImg2 from "../assets/projects/caterpillar-2.jpg";
import serviceImg3 from "../assets/projects/motherboard.jpg";

const serviceData = [
  {
    id: 1,
    img: serviceImg1,
    text: "Electrical",
  },

  { id: 2, img: serviceImg2, text: "Construction" },
  { id: 3, img: serviceImg3, text: "Computer" },
];

const Services = () => {
    return (
      <div className=" bg-gray-500 pt-16 flex flex-col  items-center">
        <h2 className="text-white/75 text-5xl font-montserrat text-center">
          DISCOVER <span className="text-secondary">ALL</span> SERVICES
        </h2>
        <div className="flex flex-col sm:flex-row justify-center sm:gap-6 max-w-[1400px] w-full">
          {serviceData.map((data, _idx) => {
            return (
              <div
                key={data.id}
                className="sm:max-w-[400px] w-full p-2 pt-10 sm:pt-20"
              >
                <div className="sm:h-3/4 bg-white/75 p-4 rounded-lg">
                  <img
                    src={data.img}
                    alt=""
                    className="w-full sm:h-full object-cover hover:scale-105 duration-150 ease-in"
                  />
                </div>
                <div className="">
                  <p className="text-white pt-4 pb-2 pl-4 sm:pl-0">
                    {data.text}
                  </p>
                </div>
                <hr className="w-[90%] h-2" />
              </div>
            );
          })}
        </div>
      </div>
    );
};

export default Services;

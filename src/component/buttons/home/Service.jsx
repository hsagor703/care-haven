import {
  FaBaby,
  FaUserNurse,
  FaWheelchair,
  FaHome,
} from "react-icons/fa";

const services = [
  {
    title: "Babysitting",
    description:
      "Trusted babysitters to care for your children in a safe and loving environment.",
    icon: <FaBaby />,
  },
  {
    title: "Elderly Care",
    description:
      "Compassionate caregivers providing daily assistance and emotional support.",
    icon: <FaUserNurse />,
  },
  {
    title: "Special Care",
    description:
      "Professional care services for individuals with special needs at home.",
    icon: <FaWheelchair />,
  },
  {
    title: "Home Assistance",
    description:
      "Helping families with daily tasks to make life easier and stress-free.",
    icon: <FaHome />,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 my-10 bg-linear-to-br from-[#050505] via-[#0b1220] to-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold">
            Our <span className="linear-text"> Care Haven</span> Services
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Professional and trusted care services designed for your family’s needs.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="card bg-linear-to-br from-emerald-50/10 to-green-50/5 shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="card-body items-center text-center">

                {/* ICON */}
                <div className="w-16 h-16 rounded-full bg-linear-to-br from-emerald-500 to-green-400 flex items-center justify-center text-white text-3xl shadow-lg">
                  {service.icon}
                </div>

                {/* TITLE */}
                <h3 className="card-title text-emerald-700 mt-4">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-slate-600">
                  {service.description}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ServicesSection;

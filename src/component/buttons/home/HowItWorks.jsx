import { FaSearch, FaCalendarCheck, FaHeart } from "react-icons/fa";

const steps = [
  {
    step: "01",
    title: "Find Care",
    description: "Search and explore verified caregivers based on your family’s needs.",
    icon: <FaSearch />,
  },
  {
    step: "02",
    title: "Book Service",
    description: "Choose a caregiver, select a time, and book securely through the platform.",
    icon: <FaCalendarCheck />,
  },
  {
    step: "03",
    title: "Relax & Care",
    description: "Enjoy peace of mind knowing your loved ones are in safe and caring hands.",
    icon: <FaHeart />,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 my-10 bg-linear-to-br from-[#050505] via-[#0b1220] to-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold ">
            How <span className="linear-text">Care Haven</span> Works
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Get reliable care in just three simple steps.
          </p>
        </div>

        {/* STEPS */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">

          {steps.map((item, index) => (
            <div
              key={index}
              className="card bg-linear-to-br from-emerald-50/10 to-green-50/5 shadow-xl"
            >
              <div className="card-body text-center">

                {/* STEP NUMBER */}
                <span className="text-5xl font-bold text-emerald-200">
                  {item.step}
                </span>

                {/* ICON */}
                <div className="w-16 h-16 mx-auto -mt-6 rounded-full bg-green-500 flex items-center justify-center text-white text-2xl shadow-lg">
                  {item.icon}
                </div>

                {/* TITLE */}
                <h3 className="card-title justify-center text-green-600 mt-4">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-slate-600">
                  {item.description}
                </p>

              </div>
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="btn bg-green-500 btn-lg text-white">
            Get Started
          </button>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;

import {
  FaUserCheck,
  FaShieldAlt,
  FaClock,
  FaSmile,
} from "react-icons/fa";

const features = [
  {
    title: "Verified Caregivers",
    description:
      "Every caregiver is carefully screened and verified to ensure safety and reliability.",
    icon: <FaUserCheck />,
  },
  {
    title: "Secure & Trusted Platform",
    description:
      "Your data and bookings are protected with secure systems and transparent processes.",
    icon: <FaShieldAlt />,
  },
  {
    title: "Easy & Flexible Booking",
    description:
      "Book care services quickly with flexible scheduling that fits your family’s needs.",
    icon: <FaClock />,
  },
  {
    title: "Peace of Mind",
    description:
      "We focus on quality care so you can relax knowing your loved ones are in safe hands.",
    icon: <FaSmile />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 my-10 bg-linear-to-br from-emerald-50 via-green-50 to-lime-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-emerald-700">
            Why Choose Care Haven
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We are committed to providing safe, reliable, and compassionate care
            services for every family.
          </p>
        </div>

        {/* FEATURES */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="card bg-white shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="card-body text-center">

                {/* ICON */}
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-3xl shadow">
                  {item.icon}
                </div>

                {/* TITLE */}
                <h3 className="card-title justify-center text-emerald-700 mt-4">
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

      </div>
    </section>
  );
};

export default WhyChooseUs;

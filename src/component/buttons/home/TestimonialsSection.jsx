import { FaStar, FaUsers, FaHandsHelping, FaShieldAlt } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Ahmed",
    role: "Mother",
    feedback:
      "Care Haven helped me find a trustworthy babysitter within hours. The experience was smooth and stress-free.",
  },
  {
    name: "Rahim Khan",
    role: "Son",
    feedback:
      "Excellent elderly care service. The caregiver was kind, professional, and very supportive.",
  },
  {
    name: "Nusrat Jahan",
    role: "Working Parent",
    feedback:
      "Reliable platform with verified caregivers. I feel safe using Care Haven for my family.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-linear-to-br from-emerald-50 via-green-50 to-lime-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-emerald-700">
            What Families Say
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Trusted by families who rely on Care Haven every day.
          </p>
        </div>

        {/* TESTIMONIALS */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="card bg-white shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="card-body">
                
                {/* STARS */}
                <div className="flex text-yellow-400 mb-3">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>

                {/* FEEDBACK */}
                <p className="text-slate-600 italic">
                  “{item.feedback}”
                </p>

                {/* USER */}
                <div className="mt-4">
                  <h4 className="font-semibold text-emerald-700">
                    {item.name}
                  </h4>
                  <p className="text-sm text-slate-500">
                    {item.role}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* SUCCESS METRICS */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-white rounded-2xl p-6 shadow text-center">
            <FaUsers className="text-emerald-600 text-3xl mx-auto mb-2" />
            <h3 className="text-3xl font-bold text-emerald-700">5K+</h3>
            <p className="text-slate-600">Happy Families</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow text-center">
            <FaHandsHelping className="text-emerald-600 text-3xl mx-auto mb-2" />
            <h3 className="text-3xl font-bold text-emerald-700">3K+</h3>
            <p className="text-slate-600">Caregivers</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow text-center">
            <FaShieldAlt className="text-emerald-600 text-3xl mx-auto mb-2" />
            <h3 className="text-3xl font-bold text-emerald-700">100%</h3>
            <p className="text-slate-600">Verified Profiles</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow text-center">
            <FaStar className="text-emerald-600 text-3xl mx-auto mb-2" />
            <h3 className="text-3xl font-bold text-emerald-700">4.9/5</h3>
            <p className="text-slate-600">User Rating</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;

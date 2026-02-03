import { FaHeart, FaShieldAlt, FaHandsHelping } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="py-24 ">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold ">
            About <span className="linear-text"> Care Haven</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            A trusted platform dedicated to caring for what matters most.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* MISSION */}
          <div className="card bg-linear-to-br from-emerald-50/10 to-green-50/5 shadow-xl">
            <div className="card-body text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-green-500 text-2xl">
                <FaHandsHelping />
              </div>
              <h3 className="card-title justify-center text-green-600 mt-4">
                Our Mission
              </h3>
              <p className="text-slate-600">
                To make caregiving simple, secure, and accessible by connecting
                families with trusted and verified caregivers.
              </p>
            </div>
          </div>

          {/* VISION */}
          <div className="card bg-linear-to-br from-emerald-50/10 to-green-50/5 shadow-xl">
            <div className="card-body text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-green-500 text-2xl">
                <FaHeart />
              </div>
              <h3 className="card-title justify-center text-green-600 mt-4">
                Our Vision
              </h3>
              <p className="text-slate-600">
                To become the most trusted care platform where every family feels
                confident and supported in caring for their loved ones.
              </p>
            </div>
          </div>

          {/* VALUES */}
          <div className="card bg-linear-to-br from-emerald-50/10 to-green-50/5 shadow-xl">
            <div className="card-body text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-green-500 text-2xl">
                <FaShieldAlt />
              </div>
              <h3 className="card-title justify-center text-green-600 mt-4">
                Our Values
              </h3>
              <p className="text-slate-600">
                Trust, safety, compassion, and transparency guide everything we
                do at Care Haven.
              </p>
            </div>
          </div>

        </div>

        {/* EXTRA TEXT */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <p className="text-slate-600 text-lg leading-relaxed">
            Care Haven is built for modern families who need reliable care
            solutions. Whether it’s childcare, elderly care, or special care at
            home, we ensure peace of mind through a safe and user-friendly
            platform.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;

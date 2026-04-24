"use client";

import bookingService from "@/action/server/bookingService";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Swal from "sweetalert2";

export default function BookingForm({
  formateServiceArea,
  formateServiceDetails,
}) {
  const [selectRegion, setSelectRegion] = useState("");
  const [selectDistrict, setSelectDistrict] = useState("");
  const session = useSession();
  const packageItem = formateServiceDetails?.pricing?.packages;
  console.log(packageItem);
  const perHour = packageItem[0]?.price;
  const perDay = packageItem[1]?.price;
  const perMonth = packageItem[2]?.price;
  console.log(perHour, perDay, perMonth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const durationType = e.target.type.value;
    const value = Number(e.target.value.value);
    const region = e.target.region.value;
    const district = e.target.district.value;
    const address = e.target.address.value;
    const date = new Date();
    const formateDate = date.toDateString();

    let totalHourlyCost = null;
    let totalDailyCost = null;
    let totalMonthlyCost = null;

    if (durationType === "hour") {
      totalHourlyCost = Number(perHour * value);
    }
    if (durationType === "day") {
      totalDailyCost = Number(perDay * value);
    }
    if (durationType === "month") {
      totalMonthlyCost = Number(perMonth * value);
    }
    const bookingData = {
      durationType,
      value,
      region,
      district,
      address,
      servicePrice: {
        perHour,
        perDay,
        perMonth,
      },
      totalHourlyCost,
      totalDailyCost,
      totalMonthlyCost,
      bookingStatus: "pending",
      serviceName: formateServiceDetails?.title,
      serviceTagLine: formateServiceDetails?.tagline,
      serviceCategory: formateServiceDetails?.category,
      serviceImage: formateServiceDetails?.media?.thumbnail,
      bookingDate: formateDate,
      userName: session?.data?.user?.name,
      userEmail: session?.data?.user?.email,
    };
    console.log(bookingData);
    const result = await bookingService(bookingData);
    console.log(result);
    if (result?.insertedId) {
      Swal.fire("success", "Booking Added Successfully", "success");
      e.target.reset();
    }
  };

  const duplicateRegion = formateServiceArea.map((r) => r.region);
  // convert 64 to 8 region
  const duplicateToSingleRegion = [...new Set(duplicateRegion)];
  // all district in region
  const districtByRegion = (region) => {
    const regions = formateServiceArea.filter((r) => r.region == region);
    return regions;
  };

  return (
    <section className="max-w-3xl mx-auto p-6 bg-color rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-500">
        Book Care Service
      </h2>

      <form onSubmit={handleSubmit}>
        {/* Duration */}
        <div className="mb-6">
          <label className="block mb-2 font-medium">Select Duration</label>

          <div className="grid grid-cols-2 gap-4">
            <fieldset className="fieldset bg-[#1D232A]">
              <select
                name="type"
                defaultValue="Pick a Type"
                required
                className="select bg-[#1D232A] w-full select-success"
              >
                <option disabled={true}>Pick a Type</option>
                <option value="hour">Hour</option>
                <option value="day">Day</option>
                <option value="month">Month</option>
              </select>
            </fieldset>

            <fieldset className="fieldset">
              <input
                required
                placeholder="Enter Your Value"
                className="select w-full select-success"
                type="number"
                name="value"
              ></input>
            </fieldset>
          </div>
        </div>

        {/* Location Section */}

        <div className="mb-6">
          <label className="block mb-2 font-medium">Select Location</label>

          <div className="grid grid-cols-2 gap-4">
            {/* Region */}
            <fieldset>
              <select
                value={selectRegion}
                name="region"
                onChange={(e) => {
                  setSelectRegion(e.target.value);
                  setSelectDistrict(""); // region change হলে district reset
                }}
                className="select w-full select-success"
              >
                <option value="" disabled>
                  Pick a Region
                </option>

                {duplicateToSingleRegion.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* District */}
            <fieldset>
              <select
                value={selectDistrict}
                onChange={(e) => setSelectDistrict(e.target.value)}
                disabled={!selectRegion}
                name="district"
                className="select w-full select-success"
              >
                <option value="" disabled>
                  Pick a District
                </option>

                {districtByRegion(selectRegion)?.map((d, i) => (
                  <option key={i} value={d?.district}>
                    {d?.district}
                  </option>
                ))}
              </select>
            </fieldset>
          </div>
        </div>

        {/* Address */}
        <div className="mb-6">
          <label className="block mb-2 font-medium">Detailed Address</label>
          <textarea
            required
            name="address"
            rows="3"
            placeholder="House no, Road no, Landmark..."
            className="textarea textarea-success w-full border p-3 rounded-lg"
          />
        </div>

        {/* Submit */}
        <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition">
          Confirm Booking
        </button>
      </form>
    </section>
  );
}

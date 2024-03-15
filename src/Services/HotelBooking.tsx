import BrandName from "@/Navbar/BrandName";

function HotelBooking() {
  return (
    <>
      <div className="grid grid-cols-5 ">
        <div className="col1 grid place-items-center border-r-2 border-gray-300 bg-violet-700">
          <BrandName />
        </div>
        <div className="col2 h-[100vh] bg-red-300"></div>
        <div className="col3 h-[100vh] bg-purple-400"></div>
        <div className="col4 h-[100vh] bg-blue-300"></div>
        <div className="col5 h-[100vh] bg-green-300"></div>
      </div>
    </>
  );
}

export default HotelBooking;

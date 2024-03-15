import phot1 from "../../assets/Images/lp1.jpeg";
import phot2 from "../../assets/Images/lp2.jpeg";
const Content = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-10">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Ascend to the Pinnacle of Luxury Living.
          </h2>
          <p className="mb-4">
            Elite Heaven offers a unique blend of luxury and tranquility,
            providing a haven for those seeking refined living. Our meticulously
            designed living spaces are crafted with your comfort in mind,
            ensuring a seamless fusion of elegance and practicality. From
            upscale amenities to serene surroundings, every aspect of Elite
            Heaven is tailored to elevate your lifestyle. Experience the epitome
            of sophistication and relaxation at Elite Heaven, where every detail
            is designed to exceed your expectations.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src={phot1}
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src={phot2}
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
};

export default Content;

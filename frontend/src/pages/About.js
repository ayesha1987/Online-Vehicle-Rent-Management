import Navbar from "../components/Navbar";
import aboutimg from "../assets/_35008e51-3e96-48d0-b8c0-6ba546f82d8c.jpeg";
function About() {
  return (
    <div>
      <Navbar />
      <div className="aboutus">
        <h1>About Us</h1>
        <div className="aboutcontainer">
          <div className="abouttext">
            Welcome to VehicleForRent.com, your premier destination for reliable
            and convenient vehicle rentals. Our mission is to simplify the car
            rental process, providing you with a seamless experience from start
            to finish. Whether you’re a local resident needing a temporary
            vehicle or a traveler exploring new destinations, we offer a diverse
            fleet to meet your unique needs. At VehicleForRent.com, we pride
            ourselves on our wide selection of well-maintained vehicles, ranging
            from compact cars and sedans to SUVs and luxury models. Our
            transparent pricing ensures you receive competitive rates with no
            hidden fees, giving you peace of mind and great value. Our
            user-friendly online booking system allows you to quickly browse our
            fleet, compare options, and reserve your vehicle in just a few
            clicks. With flexible rental terms, you can rent a car for a day, a
            week, or even longer, making it easy to tailor your rental period to
            your schedule.Customer satisfaction is at the heart of what we do.
            Our dedicated customer service team is always ready to assist you,
            ensuring your rental experience is smooth and stress-free. With
            convenient pick-up and drop-off locations across the city, renting a
            vehicle has never been easier.
          </div>
          <img src={aboutimg} width={500} height={300} alt="" />
        </div>
      </div>
    </div>
  );
}
export default About;

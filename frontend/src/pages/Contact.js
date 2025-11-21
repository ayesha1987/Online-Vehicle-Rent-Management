import Navbar from "../components/Navbar";

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="contactus">
        <h1>Contact Us</h1>
        <div className="contactcontainer">
          <h4>We’re Here to Help!</h4>
          <p>
            At VehicleForRent.com, we are dedicated to providing excellent
            customer service. Whether you have questions, need assistance with
            your booking, or require support during your rental period, our
            friendly and knowledgeable team is here for you.
          </p>
          <div>
            
            <h4>Phone:</h4>
            <p>Customer Service Hotline:<span className="contentheadingspan" >+1-800-123-4567</span></p>
            <p>Available 24/7 for your convenience.</p>

            <h4>Emails</h4>
            <p>General Inquiries:   <span className="contentheadingspan" >info@vehicleforrent.com</span> </p>
            <p>Booking Assistance:<span className="contentheadingspan" >bookings@vehicleforrent.com</span>   </p>
            <p>Customer Support:<span className="contentheadingspan" >support@vehicleforrent.com</span> </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;

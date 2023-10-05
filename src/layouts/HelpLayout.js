import { Outlet, NavLink } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">
      <h1>Travel Assistance</h1>
      <br></br>
      <h3>Contact Information</h3>
      <p>
        If you have any travel-related questions or need assistance, feel free
        to contact us using the information provided below:
      </p>
      <h3>Email: support@exploresphere.com</h3>
      <p>
        We are here to help with any inquiries you may have regarding your
        travel plans, bookings, or any other aspect of your journey.
      </p>
      <h3>Phone: +91-123-456-789</h3>
      <p>
        Our dedicated helpline is available for you to call during working
        hours. Whether you need advice, support, or information, we're just a
        phone call away.
      </p>
      <h3>Working Hours: Monday - Friday: 9:00 AM - 5:00 PM (IST)</h3>
      <p>
        Our team of travel experts is available to assist you during our working
        hours. Feel free to reach out, and we'll be happy to help you plan your
        dream journey.
      </p>
      <h2>
        Have more questions about your upcoming travel? Check out our FAQ page
        or get in touch with us directly. We're here to ensure you have a smooth
        and unforgettable travel experience!
      </h2>
      <nav>
        <NavLink to="faq">Visit FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

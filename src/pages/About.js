import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function About() {
  const [user, setUser] = useState("explorer");

  if (!user) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="about">
      <h1>About ExploreSphere</h1>

      <p>
        Welcome to ExploreSphere, your gateway to unforgettable travel
        experiences! We are passionate about helping travelers embark on
        incredible journeys and discover the world's most breathtaking
        destinations. With our user-friendly platform and curated selection of
        travel packages, we're here to make your travel dreams a reality.
      </p>

      <h2>Our Journey</h2>
      <p>
        Founded with a vision in 2010, ExploreSphere was born out of a shared
        love for exploration and discovery. We recognized the need for a travel
        agency that not only offers diverse travel options but also provides
        exceptional customer service, ensuring each traveler's journey is
        memorable and hassle-free.
      </p>

      <p>
        Based in the heart of wanderlust, our team of travel enthusiasts,
        professionals, and experts is dedicated to crafting experiences that
        captivate your imagination and cater to your travel aspirations.
      </p>

      <h2>Our Impact</h2>
      <p>
        Over the years, we've empowered thousands of travelers to create
        unforgettable memories. Here are some key figures that represent our
        impact:
      </p>

      <ul>
        <li>200+ Dream Destinations</li>
        <li> 5000+ Happy Travelers</li>
        <li>300+ Group Tours</li>
        <li>100% Satisfaction Rate</li>
      </ul>

      <h2>Our Commitment</h2>
      <p>
        At ExploreSphere, we're committed to curating travel experiences that
        inspire and delight. We understand that travel is not just about
        reaching destinations; it's about the journey and the stories you gather
        along the way.
      </p>

      <p>
        Whether you're a solo adventurer, a family seeking quality time, or a
        couple in search of romance, our website is designed to help you explore
        the world with confidence and excitement.
      </p>

      <p>
        As we continue to grow, we remain dedicated to refining our offerings,
        expanding our destinations, and ensuring your travel experience exceeds
        expectations. Your feedback and inquiries are valuable to us, so please
        don't hesitate to get in touch.
      </p>

      <p>
        Thank you for choosing ExploreSphere to be part of your travel
        adventures. We're thrilled to be a part of your journey and look forward
        to helping you explore the world like never before.
      </p>
      <button onClick={() => setUser(null)}>Log Out</button>
    </div>
  );
}

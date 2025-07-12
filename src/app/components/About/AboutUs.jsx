'use client';
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './aboutus.css'; 

export default function AboutUs() {
  return (
    <section className="about-section">
      <div className="about-images">
        <img
          src="https://myorlandostay.com/img/About-img.jpg"
          alt="Main"
          className="img-main"
        />
        {/* <img
          src="https://stssevastorage.blob.core.windows.net/myorlandostay/Unit4/09-Web.jpg"
          alt="Small"
          className="img-small"
        /> */}
      </div>
      <div className="about-content">
        <h3><i className="fas fa-user-friends"></i> About Us</h3>
        <h2> Disney Area Vacation Rental by MyOrlandoStay</h2>
        <p>
          Welcome to MyOrlandoStay vacation home – a home away from your home – in the heart of Orlando! Whether you want to soak yourself in the sun or take a sneak peek of theme parks in the most vibrant & visitor-friendly destination to feel rejuvenated, your best bet lies here – in Orlando.\
           And, in here we come to offer you the best kind of vacation townhomes.
        </p>
        <p> For over 15 years, MyOrlandoStay has been dedicated to providing families with unforgettable vacation experiences through exceptional customer service.
           In here, we offer luxury but affordable townhomes designed personally for your family, children, and oh, pets too! In here, we offer spacious and comfortable accommodations along with a year-round outdoor heated pool to make your stay as enjoyable as possible.</p>
           <p> Located just 1 to 2 miles away from Disney's main gate, our vacation homes make exploring the magic of Hollywood Studios, Magic Kingdom, Animal Kingdom, Universal Parks, Epcot, and many more quite easy   </p>
        <ul>
          <li><i className="fas fa-sun"></i> Family-friendly vacation homes</li>
          <li><i className="fas fa-paw"></i> Pet-friendly accommodations</li>
          <li><i className="fas fa-swimmer"></i> Outdoor heated pool for year-round fun</li>
        </ul>
        <a href="#">Read More <i className="fas fa-arrow-right"></i></a>
      </div>
    </section>
  );
}

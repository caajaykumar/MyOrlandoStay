'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Introduction() {
  return (
    <section className="introduction_area intro_area2">
      <div className="container">
        <div className="row introduction_inner">
          <div className="col-md-6">
            <div className="introduction_img">
              <Image
                src="/img/About-img.jpg" // Place About-img.jpg inside your /public/img folder
                alt="Sample Image"
                width={600} // Set the correct width/height based on your image
                height={500}
                className="lazyload"
                
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="introduction_left_text">
              <div className="intro_title">
                <h2>Disney Area Vacation Rental by MyOrlandoStay</h2>
              </div>

              <p>
                Welcome to MyOrlandoStay vacation home – a home away from your home – in the heart
                of Orlando! Whether you want to soak yourself in the sun or take a sneak peek of
                theme parks in the most vibrant & visitor-friendly destination to feel rejuvenated,
                your best bet lies here – in Orlando. And, in here we come to offer you the best
                kind of vacation townhomes.
              </p>
              <p>
                For over 15 years, MyOrlandoStay has been dedicated to providing families with
                unforgettable vacation experiences through exceptional customer service. In here, we
                offer luxury but affordable townhomes designed personally for your family, children,
                and oh, pets too! In here, we offer spacious and comfortable accommodations along
                with a year-round outdoor heated pool to make your stay as enjoyable as possible.
              </p>
              <p>
                Located just 1 to 2 miles away from Disney's main gate, our vacation homes make
                exploring the magic of Hollywood Studios, Magic Kingdom, Animal Kingdom, Universal
                Parks, Epcot, and many more quite easy{' '}
                <Link href="/about-us" className="btn-shine">
                  Read More
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

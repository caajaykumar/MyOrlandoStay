'use client';

import Image from 'next/image';

export default function DiscountArea() {
  return (
    <section className="discount_area">
      <div className="container">
        <div className="row discount_inner">
          <div className="col-md-4">
            <div className="discount_img">
                <img src='/img/discount-person.png'/>
              {/* <Image src="img/discount-person.png" alt="Discount Person" width={400} height={400} /> */}
            </div>
          </div>
          <div className="col-md-8">
            <div className="discount_right_content">
              <h4>
                Property you won’t <br /> find anywhere else.
              </h4>
              <p>
                MyOrlando Stay is not just another booking platform—it's your gateway to an unforgettable holiday in the vibrant heart of Orlando,
              </p>
              <a className="book_now_btn" href="https://www.lodgix.com/25634/" target="_blank" rel="noopener noreferrer">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

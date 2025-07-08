'use client';
import React from 'react';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer_area}>
      <div className={styles.footer_widget_area}>
        <div className={styles.container}>
          <div className={styles.row}>

            {/* Address & Contact */}

            <div className={styles.col}>
              <aside className={styles.about_widget}>
                <img src="https://stssevastorage.blob.core.windows.net/myorlandostay/mylogo.png" alt="MyOrlandoStay Logo" />
                {/* <p> Your home away from home in Orlando. Stay, relax, and enjoy your vacation with MyOrlandoStay.</p> */}
                <p> Affordable stays, pet-friendly spaces, and warm hospitality — that’s our promise at MyOrlandoStay.</p>
                
              </aside>
                  <aside className={styles.social_widget}>
                
                
                <h3 className={styles.f_title}>Social Links</h3>
                <ul className={styles.social_link}>
                  <li><a href="https://www.facebook.com/MyOrlandoStay" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="https://twitter.com/MyOrlandoStay" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                </ul>
              </aside>
            </div>

            {/* Quick Links */}
            <div className={styles.col}>
              <aside className={styles.link_widget}>
                <h3 className={styles.f_title}>Quick Links</h3>
                <ul>
                  <li><a href="/Home/Index">Home</a></li>
                  <li><a href="/Home/AboutUs">About Us</a></li>
                  <li><a href="/Home/Properties">Properties</a></li>
                  <li><a href="/Home/ContactUs">Contact</a></li>
                  <li><a href="/Home/AreaAttractions">Area Attractions</a></li>
                </ul>
              </aside>
            </div>

            {/* Important Links */}
            <div className={styles.col}>
              <aside className={styles.link_widget}>
                <h3 className={styles.f_title}>Important Links</h3>
                <ul>
                  <li><a href="/Home/Privacy">Privacy Policy</a></li>
                  <li><a href="/Home/Policies">Policies & Terms</a></li>
                  <li><a href="/Home/Cookies">Cookie Notice</a></li>
                  <li><a href="/Home/Review">Reviews & Testimonials</a></li>
                  <li><a href="/Home/MapDirections">Map & Directions</a></li>
                </ul>
              </aside>
            </div>

            {/* Social Links */}

            <div className={styles.col}>
              <aside className={styles.about_widget}>
                 <h3 className={styles.f_title}>Contact Us</h3>
                <div className={styles.ab_wd_list}>

                  <div className={styles.media}>
                    <i className="fas fa-map-marker-alt"></i>
                    <h5>
                      2655 Andros Lane (Central Location only)<br />
                      Celebration, Orlando FL 34747<br />
                      United States of America
                    </h5>
                  </div>


                  <div className={styles.media}>
                    <i className="fab fa-whatsapp"></i>
                    <a href="tel:+1(407) 557-8999" >+1(407) 557-8999</a>
                  </div>


                  
                  <div className={styles.media}>
                    <i className="fab fa-whatsapp"></i>
                    <a href="tel:+919839048100">+91-9839048100</a>
                  </div>   


                </div>
              </aside>

              
          
            </div>
            

          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.footer_copyright}>
        <p>Copyright © Disney Area Vacation Rental by <a href="#" className={styles.footer_link}>My Orlando Stay</a>, LLC. All rights reserved.</p>
      </div>
    </footer>
  );
}

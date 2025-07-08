import styles from './HolidayBanner.module.css';

export default function HolidayBanner() {
  return (
    <section
      className={styles.holidayBanner}
      style={{ backgroundImage: `url('https://myorlandostay.com/img/home-slider/slider-7.jpg')` }}>
      <div className={styles.overlay}>
        <h1 className={styles.heading}>RELAX AND ENJOY YOUR HOLIDAY</h1>
        <h2 className={styles.subheading}>@Myrolandostay</h2>
        <p className={styles.description}>Affordable Luxury Rooms &amp;  Pet-Friendly Stays for a Perfect Vacation </p>
        <a href="https://www.lodgix.com/25634/" target="_blank" rel="noopener noreferrer">
          <button className={styles.bookNowBtn}>BOOK NOW</button>
        </a>
      </div>
    </section>
  );
}

 
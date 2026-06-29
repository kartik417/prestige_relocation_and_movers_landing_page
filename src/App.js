import './App.css';
import { useState } from "react";
import {
  FaPhoneAlt,
  FaShieldAlt,
  FaClock,
  FaRupeeSign,
  FaUsers,
  FaCheckCircle,
  FaStar,
  FaEnvelope
} from "react-icons/fa";
import bikeImage from "./assets/bike-shifting.jpeg";
import carImage from "./assets/car-shifting.jpeg";
import houseImage from "./assets/house-shifting.jpeg";
import officeImage from "./assets/office-shifting.jpeg";
function App() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    from: "",
    to: "",
  });
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    const newErrors = {};

    // Name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    // Phone
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit mobile number";
    }

    // Moving From
    if (!formData.from.trim()) {
      newErrors.from = "Moving From is required";
    }

    // Moving To
    if (!formData.to.trim()) {
      newErrors.to = "Moving To is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbz51pLEU3BNlqbgMmLxZjnMo5uMoC1gb3wIHrc3GKmZ1thn8umxR5LrckfXGrN-k9X0/exec", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert("Quote submitted successfully!");

        setFormData({
          name: "",
          phone: "",
          from: "",
          to: "",
        });
      }
    } catch (error) {
      alert("Something went wrong!");
      console.log(error);
    }
  };

  return (
    <>
      <header id="home">

        <div className="header-container">

          {/* LEFT */}
          <div className="left-section">

            <div className="logo">
              P
            </div>

            <div className="company-info">
              <h2>Prestige Relocation</h2>
              <p>Packers & Movers</p>
            </div>

          </div>

          {/* RIGHT */}
          <a href="tel:8003907313" className="call-btn">
            <FaPhoneAlt />
            8003907313
          </a>
        </div>
      </header>

      <section className="hero">

        {/* LEFT CONTENT */}
        <div className="hero-left">

          <div className="tag">
            🏆 Trusted Since Years
          </div>

          <h1>
            India's Trusted Packers & Movers in Chennai
          </h1>

          <p>
            Safe, Fast & Stress-Free Shifting Services
          </p>

          <div className="hero-buttons">

            <button className="quote-btn">
              Get Free Quote
            </button>

            <a href="tel:8003907313" className="call-outline-btn">
              Call Now
            </a>

          </div>

        </div>

        {/* RIGHT FORM */}
        <div className="hero-right">

          <h2>Get Instant Quote</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />

            {errors.name && <span className="error">{errors.name}</span>}

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />

            {errors.phone && <span className="error">{errors.phone}</span>}

            <input
              type="text"
              name="from"
              placeholder="Moving From"
              value={formData.from}
              onChange={handleChange}
            />

            {errors.from && <span className="error">{errors.from}</span>}

            <input
              type="text"
              name="to"
              placeholder="Moving To"
              value={formData.to}
              onChange={handleChange}
            />

            {errors.to && <span className="error">{errors.to}</span>}

            <button type="submit">
              Get Instant Quote
            </button>

          </form>

        </div>

      </section>

      <section id="services" className="services">

        <h4>OUR SERVICES</h4>

        <h2>What We Offer</h2>

        <div className="services-container">

          {/* CARD 1 */}
          <div className="service-card">
            <img src={carImage} alt="Car Shifting" />

            <h3>Car Shifting</h3>

            <p>
              Safe and secure vehicle transportation services.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="service-card">
            <img src={bikeImage} alt="Bike Shifting" />

            <h3>Bike Shifting</h3>

            <p>
              Fast and damage-free bike relocation solutions.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="service-card">
            <img src={houseImage} alt="House Shifting" />

            <h3>House Shifting</h3>

            <p>
              Professional household packing and moving.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="service-card">
            <img src={officeImage} alt="Office Relocation" />

            <h3>Office Relocation</h3>

            <p>
              Smooth and organized office moving services.
            </p>
          </div>

        </div>

      </section>



   <section id="choose-us" className="choose-us">

  <h4>WHY CHOOSE US</h4>

  <h2>The Prestige Advantage</h2>

  <p className="choose-desc">
    Prestige Relocation Packers & Movers is committed to providing safe,
    affordable and hassle-free relocation services with professional packing,
    secure transportation and timely delivery across India.
  </p>

  <div className="choose-container">

    <div className="choose-card">

      <div className="icon-box">
        <FaShieldAlt />
      </div>

      <h3>Safe Packing</h3>

      <p>
        Premium quality packing materials keep your belongings safe during every move.
      </p>

    </div>

    <div className="choose-card">

      <div className="icon-box">
        <FaClock />
      </div>

      <h3>Timely Delivery</h3>

      <p>
        We value your time and ensure every shipment reaches on schedule.
      </p>

    </div>

    <div className="choose-card">

      <div className="icon-box">
        <FaRupeeSign />
      </div>

      <h3>Affordable Pricing</h3>

      <p>
        Transparent pricing with no hidden charges and competitive rates.
      </p>

    </div>

    <div className="choose-card">

      <div className="icon-box">
        <FaUsers />
      </div>

      <h3>Experienced Team</h3>

      <p>
        Skilled professionals handle packing, loading and transportation safely.
      </p>

    </div>

    <div className="choose-card">

      <div className="icon-box">
        <FaCheckCircle />
      </div>

      <h3>Damage-Free Guarantee</h3>

      <p>
        We take every precaution to ensure damage-free relocation services.
      </p>

    </div>

  </div>

</section>

      <section id="about" className="about-us">

        <h4>ABOUT US</h4>

        <h2>Prestige Relocation Packers And Movers</h2>

        <p className="about-text">
          With years of experience in the relocation industry, Prestige Relocation
          Packers And Movers is your trusted partner for safe, efficient, and
          affordable moving services across India. We handle every move with
          utmost care and professionalism.
        </p>

        <div className="about-info">

          <div className="info-card">
            <h3>MSME</h3>
            <p>UDYAM-TN-24-0170934</p>
          </div>

          <div className="info-card">
            <h3>GSTN</h3>
            <p>33ORQPS2692P1ZE</p>
          </div>

          <div className="info-card">
            <h3>Location</h3>
            <p>Chennai - 600056</p>
          </div>

        </div>

      </section>

      <section id="testimonials" className="testimonials">

        <h4>TESTIMONIALS</h4>

        <h2>What Our Customers Say</h2>

        <div className="testimonial-container">

          <div className="testimonial-card">

            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p>
              "Excellent service! They packed everything so carefully.
              My furniture arrived without a single scratch.
              Highly recommended for Chennai to Bangalore shifting."
            </p>

            <h3>— Rajesh Kumar</h3>

          </div>

          <div className="testimonial-card">

            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p>
              "Very professional team. They completed our office
              relocation over the weekend with zero disruption.
              On-time and within budget. Thank you Prestige!"
            </p>

            <h3>— Priya Sharma</h3>

          </div>

          <div className="testimonial-card">

            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p>
              "Shifted my car from Chennai to Hyderabad.
              It was delivered in perfect condition.
              The tracking updates gave me peace of mind."
            </p>

            <h3>— Mohammed Faisal</h3>

          </div>

        </div>

      </section>

      <section className="cta-section">

        <h2>
          Plan Your Move Today – Stress Free Shifting Guaranteed
        </h2>

        <a href="tel:8003907313" className="cta-btn">
          <FaPhoneAlt />
          Call Now
        </a>

      </section>

      <section className="service-locations">

        <div className="service-location-container">

          <h4>OUR SERVICE LOCATIONS</h4>

          <h2>Packers & Movers Across India</h2>

          <p className="location-desc">
            We provide reliable packing, moving, vehicle transportation and relocation
            services across major cities in India with safe packing, timely delivery
            and affordable pricing.
          </p>

          <div className="city-grid">

            <span>Chennai</span>
            <span>Bengaluru</span>
            <span>Hyderabad</span>
            <span>Mumbai</span>
            <span>Pune</span>

            <span>Delhi</span>
            <span>Noida</span>
            <span>Gurugram</span>
            <span>Jaipur</span>
            <span>Ahmedabad</span>

            <span>Surat</span>
            <span>Kolkata</span>
            <span>Kochi</span>
            <span>Coimbatore</span>
            <span>Madurai</span>

            <span>Tiruchirappalli</span>
            <span>Visakhapatnam</span>
            <span>Vijayawada</span>
            <span>Lucknow</span>
            <span>Chandigarh</span>

            <span>Nagpur</span>
            <span>Indore</span>
            <span>Bhopal</span>
            <span>Goa</span>
            <span>Mysuru</span>

          </div>

        </div>

      </section>

      <footer id="contact" className="footer">

        <div className="footer-container">

          <div className="footer-box">

            <h3>Prestige Relocation</h3>

            <p>
              No. 56, Sakthi Garden 2nd Main Road,
              4th Street, Senneerkkuppam,
              Poonamallee, Chennai-600056
            </p>

          </div>

          <div className="footer-box">

            <h3>Contact</h3>

            <p>
              <FaPhoneAlt />
              8003907313
            </p>

            <p>
              <FaEnvelope />
              prestigerelocationservices@gmail.com
            </p>

          </div>

          <div className="footer-box">

            <h3>Quick Links</h3>

            <a href="#home">Home</a>

            <a href="#services">Services</a>

            <a href="#choose-us">Why Choose Us</a>

            <a href="#about">About Us</a>

            <a href="#testimonials">Testimonials</a>

            <a href="#contact">Contact</a>

          </div>

        </div>

        <hr />

        <p className="copyright">
          © 2024 Prestige Relocation Packers And Movers. All rights reserved.
        </p>

      </footer>

    </>


  );
}

export default App;

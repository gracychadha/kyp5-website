import React, { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // handle input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        "https://api.kyp5.vibrantick.org/api/public/contact",
        formData,
      );

      if (res.data.success) {
        alert(res.data.message);

        // reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="rts-contact-area rts-section-gapTop">
        <div className="container">
          <div className="row g-5">
            <div className="col-xl-5">
              {/* contact left area start */}
              <div className="contact-left-area-start">
                <div className="title-area-left-style">
                  <div className="pre-title">
                    <img src="assets/images/banner/bulb.png" alt="icon" />
                    <span>Courses</span>
                  </div>
                  <h2 className="title">
                    Love to hear from you <br />
                    <span>Get in touch!</span>
                  </h2>
                </div>

                {/* FORM START */}
                <form className="contact-page-form" onSubmit={handleSubmit}>
                  <div className="single-input">
                    <label>Your Name*</label>
                    <input
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Andrew Davis ...."
                      required
                    />
                  </div>

                  <div className="single-input">
                    <label>Your Email*</label>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="info@studyhub.net"
                      required
                    />
                  </div>

                  {/* 👉 added subject (your API expects it) */}
                  <div className="single-input">
                    <label>Subject</label>
                    <input
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                    />
                  </div>

                  <div className="single-input">
                    <label>Message*</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your query"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="rts-btn btn-primary mt--30"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
                {/* FORM END */}
                <div id="form-messages" className="mt--20" />
              </div>
              {/* contact left area end */}
            </div>
            <div className="col-xl-7 pl--50 pl_lg--15 pl_md--15 pl_sm--15 pb_md--100 pb_sm--100">
              <div className="contact-map-area-start">
                <div className="single-maptop-info">
                  <div className="icon">
                    <img src="assets/images/contact/02.png" alt="contact" />
                  </div>
                  <p className="disc">123 Main Street, New York, AV 10013</p>
                </div>
                <div className="single-maptop-info">
                  <div className="icon">
                    <img src="assets/images/contact/03.png" alt="contact" />
                  </div>
                  <a href="tel:+4733378901">(555) 123-4567</a> <br />
                  <a href="tel:+4733378901">(555) 123-4567</a>
                </div>
                <div className="single-maptop-info">
                  <div className="icon">
                    <img src="assets/images/contact/04.png" alt="contact" />
                  </div>
                  <p className="disc">
                    Mon-Fri: 9 AM – 6 PM <br />
                    Saturday: 9 AM – 4 PM
                  </p>
                </div>
              </div>
              <div className="map-bottom-area mt--30">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14602.288851207937!2d90.47855065!3d23.798243149999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1705835333294!5m2!1sen!2sbd"
                  width={600}
                  height={450}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;

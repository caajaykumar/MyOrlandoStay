'use client';

import { useRef } from 'react';
import emailjs from 'emailjs-com';
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Head from 'next/head';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formEl = form.current;
    const formData = new FormData(formEl);

    const fields = {
      sName: formData.get("sName"),
      sEmail: formData.get("sEmail"),
      FromTime: formData.get("FromTime"),
      ToTime: formData.get("ToTime"),
      NoPeople: formData.get("NoPeople"),
      sContact: formData.get("sContact"),
      sMassage: formData.get("sMassage"),
    };

    const today = new Date().toISOString().split("T")[0];

    for (const [name, value] of Object.entries(fields)) {
      if (!value) {
        const input = formEl.querySelector(`[name="${name}"]`);
        input?.focus();
        alert("Please fill all required fields.");
        return;
      }
    }

    if (fields.FromTime < today) {
      const fromInput = formEl.querySelector('[name="FromTime"]');
      fromInput?.focus();
      alert("From Date cannot be in the past.");
      return;
    }

    if (fields.ToTime <= fields.FromTime) {
      const toInput = formEl.querySelector('[name="ToTime"]');
      toInput?.focus();
      alert("To Date must be after From Date.");
      return;
    }

    emailjs.sendForm(
      'service_dmvzzs9',
      'template_zt6neng',
      form.current,
      'u7UgEDdtUjxV3scMC'
    ).then(
      () => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        alert("Message failed to send. Please try again.");
        console.error(error.text);
      }
    );
  };

  return (
    <>
      <Breadcrumb
        title="Contact US"
        breadcrumbs={[
          { name: 'Home', link: '/', active: false },
          { name: 'Contact Us', link: '/contact', active: true },
        ]}
      />

      <section className="get_contact_area">
        <Head>
          <title>Contact Us - MyOrlandoStay.com</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        </Head>
        <div className="container">
          <div className="row get_contact_inner">
            <div className="col-md-6">
              <div className="left_ex_title">
                <h2><span>Contact Us </span></h2>
              </div>

              <form ref={form} onSubmit={sendEmail} className="contact_us_form row m0" noValidate>
                <div className="form-group col-md-6">
                  <input type="text" className="form-control" name="sName" placeholder="Name" required />
                </div>
                <div className="form-group col-md-6">
                  <input type="email" className="form-control" name="sEmail" placeholder="Email" required />
                </div>
                <div className="form-group col-md-6">
                  <input type="date" className="form-control" name="FromTime" placeholder="From Date" required />
                </div>
                <div className="form-group col-md-6">
                  <input type="date" className="form-control" name="ToTime" placeholder="To Date" required />
                </div>
                <div className="form-group col-md-12">
                  <input type="number" className="form-control" name="NoPeople" placeholder="Number of Adults" required />
                </div>
                <div className="form-group col-md-12">
                  <input type="text" className="form-control" name="sContact" placeholder="Contact Number" required />
                </div>
                <div className="form-group col-md-12">
                  <textarea className="form-control" name="sMassage" rows="1" placeholder="Message" required></textarea>
                </div>
                <div className="form-group col-md-12">
                  <label className="checkbox-inline">
                    <input type="checkbox" required /> "By clicking SUBMIT you consent to receiving SMS messages. Messages and Data rates may apply. Message frequency will vary. Reply Help to get more assistance. Reply Stop to Opt-out of messaging"
                  </label>
                </div>
                <div className="form-group col-md-12">
                  <button type="submit" className="btn submit_btn form-control">Submit Now</button>
                </div>
              </form>
            </div>

            <div className="col-md-6">
              <div className="right_contact_info">
                <div className="contact_info_title">
                  <h3>Contact: MyOrlandoStay.com</h3>
                </div>
                <div className="contact_info_list">
                  <div className="media">
                    <div className="media-left">
                      <i className="fa fa-envelope-o"></i>
                    </div>
                    <div className="media-body">
                      <h4>Email</h4>
                      <a href="mailto:crestwynd@earthlink.net">crestwynd@earthlink.net</a>
                    </div>
                  </div>
                  <div className="media">
                    <div className="media-left">
                      <i className="fa fa-phone"></i>
                    </div>
                    <div className="media-body">
                      <h4>Phone</h4>
                      <a href="tel:+14075578999">+1(407) 557-8999</a>
                    </div>
                  </div>
                  <div className="media">
                    <div className="media-left">
                      <i className="fa fa-whatsapp"></i>
                    </div>
                    <div className="media-body">
                      <h4>Whatsapp</h4>
                      <a href="tel:+919839048100">+91-9839048100</a>
                    </div>
                  </div>
                  <div className="media">
                    <div className="media-left">
                      <p>Response guaranteed between 6 AM -11 PM.<br /> For immediate response, call us at +1(407) 557-8999 or email us. (24x7)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

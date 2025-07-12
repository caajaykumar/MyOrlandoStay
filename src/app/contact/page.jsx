
import React from "react";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
const GetContact = () => {
  return (

    <>

      <Breadcrumb
        title="Contact"
        breadcrumbs={[
          { name: 'Home', link: '/', active: false },
          { name: 'contact', link: '/contact', active: true },
        ]}
      />


    <section className="get_contact_area">
      <div className="container">
        <div className="row get_contact_inner">
         
          <div className="col-md-6">
            <div className="left_ex_title">
              <h2>
                <span>Questions </span>
              </h2>
            </div>

            <form className="contact_us_form row m0" method="post" id="contactForm" noValidate>
              <div className="form-group col-md-6">
                <input type="text" className="form-control" id="sName" name="sName" placeholder="Name" />
              </div>
              <div className="form-group col-md-6">
                <input type="email" className="form-control" id="sEmail" name="sEmail" placeholder="Email" />
              </div>

              <div className="form-group col-md-6 input-append date form_datetime">
                <input type="date" id="FromTime" name="FromTime" placeholder="From" />
              </div>

              <div className="form-group col-md-6 input-append date form_datetime">
                <input type="date" id="ToTime" name="ToTime" placeholder="TO" />
              </div>

              <div className="form-group col-md-12">
                <input
                  type="number"
                  className="form-control"
                  id="NoPeople"
                  name="NoPeople"
                  placeholder="Number of People"
                />
              </div>

              <div className="form-group col-md-12">
                <input
                  type="text"
                  className="form-control"
                  id="sContact"
                  name="sContact"
                  placeholder="Contact Number"
                />
              </div>

              <div className="form-group col-md-12">
                <textarea
                  className="form-control"
                  id="sMassage"
                  name="sMassage"
                  rows="1"
                  placeholder="Message"
                ></textarea>
              </div>

              <div className="form-group col-md-12">
                <label className="checkbox-inline">
                  <input type="checkbox" /> by clicking SUBMIT you consent to receiving SMS messages. Messages and Data rates may apply. Message frequency will vary. Reply Help to get more assistance. Reply Stop to Opt-out&nbsp;of&nbsp;messaging.
                </label>
              </div>

              <div className="form-group col-md-12">
                <button type="submit" className="btn submit_btn form-control">
                  submit now
                </button>
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
                    <i className="fa fa-envelope"></i>
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
                    <p>
                      Response guaranteed between 6 AM -11 PM.
                      <br />
                      For immediate response-call us at +1(407) 557-8999 or email us. (24 X 7)
                    </p>
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

export default GetContact;

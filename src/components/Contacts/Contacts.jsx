import React from "react";
import classes from "./Contacts.module.scss";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { RiEarthLine } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
import { SocialIcons } from "../SocialIcons/SocialIcons";

export const Contacts = () => {
  return (
    <div className={classes.contactsPage}>
      <div className="container">
        <div className={classes.wrapper}>
          <div className={classes.info}>
            <div className={classes.infoHeader}>
              <div>
                Registered in Berlin's Commercial Register
                <p>at Amtsgericht Charlottenburg HRB 183035 B</p>
              </div>
              <div>Managing Director: Veaceslav Driglov</div>
              <div>Tax ID (VAT): 045 229 08029</div>
            </div>
            <div className={classes.divider} />
            <div className={classes.contacts}>
              <p>
                <FiPhoneCall />
                <span>49 172 3186 399</span>
              </p>
              <p>
                <HiOutlineMail />
                <span>contact@battle4.me</span>
              </p>
              <p>
                <RiEarthLine />
                <span>www.battle4.me</span>
              </p>
              <p className={classes.location}>
                <MdLocationOn />
                <div className={classes.pos}>
                  Battle4.me GmbH Gaudystraße 12,{" "}
                  <div>10437 Berlin, Germany</div>
                </div>
              </p>
              <div className={classes.divider} />
              <SocialIcons />
            </div>
          </div>
          <div className={classes.modal}>
            <div className={classes.main}>
              <div className={classes.borderTop}></div>
              <div className={classes.borderBottom}></div>
              <div className={classes.item}>
                <h1 className={classes.title}>Contact Us</h1>
                <p>
                  Do you want to tie up with us? Or have questions about how
                  battle4.me works? Reach out to us here and we’ll get back to
                  you as quick as we can!
                </p>
                <form className={classes.form}>
                  <label>Name</label>
                  <input type="text" />
                  <label>Email</label>
                  <input type="text" />
                  <label>Your message</label>
                  <textarea type="text"></textarea>
                  <div className="center" style={{ paddingTop: "45px" }}>
                    <button className="btn__style1 large">Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

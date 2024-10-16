import React, { useState } from "react";
import "./Contact.css";
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {


  const [result, setResult] = useState(""); 

  const onSubmit = async (event) => {
    setResult("Sending....");
    const formData = new formData(event.target);

    formData.append("access_key", "fe6a4d65c7180abc8a3428e0044311cc");

    const res = await fetch("https://formsubmit.co/fe6a4d65c7180abc8a3428e0044311cc", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("success", res);
      setResult(res.message); 
      event.target.reset();     
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };



  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" />  </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          tempore corrupti sunt, nesciunt nemo fuga eos vitae quisquam enim!
          Nostrum dolores officiis eos dolore similique rem atque natus eligendi
          veniam!
        </p>
        <ul>
            <li> <img src={mail_icon} alt="" /> contact Trigga.dev</li>
            <li> <img src={phone_icon} alt="" /> +234 911 837 4300</li>
            <li> <img src={location_icon} alt="" /> TriggAmail.com</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}  action="https://formsubmit.co/fe6a4d65c7180abc8a3428e0044311cc" method="POST"> 
            <label>Your name</label>
            <input type="text" name="name" placeholder="Enter your name" required/>
            <label>Your number</label>
            <input type="tel" name="phone" placeholder="Enter your mobile number" required/>
            <label>Write your message here</label>
            {/* <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html" /> */}
            <textarea name="message" rows={6} placeholder="Enter your message" required></textarea>
            <button type="submit" className="btn dark-btn">Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span> {result}</span>
      </div>
    </div>
  );
};

export default Contact;

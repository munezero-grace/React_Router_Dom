import { IoLocationOutline } from "react-icons/io5";
import { TiMail } from "react-icons/ti";
import { FaPhoneAlt } from "react-icons/fa";
import { AiTwotonePrinter } from "react-icons/ai";
function GetInTouch() {
  return (
    <main className="main">
      <div className="box">
        <div className="context">
          <div className="contact">Contact Us</div>
          <div classname="location">
            <IoLocationOutline className="icons" /><label>
            32, Avenue ve Newyork <div className="nextLine">321994 Newyork</div></label>
          </div>
          <div classname="location">
            <TiMail className="icons" />
            <label> munezero.grace911@gmail.com{" "}</label>
          </div>
          <div classname="location">
            <FaPhoneAlt className="icons" />
            <label> +3356 1589 2105</label>
          </div>
          <div classname="location">
            <AiTwotonePrinter className="icons" />
            <label> +3356 1589 2100</label>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="subContainer">
          <div className="title">
            <h1>Get in Touch</h1>
          </div>
          <p className="sub_title">Feel free to drop us a line below</p>
          <div className="inputs">
            <input type="text" placeholder="Your Name " />
          </div>
          <div className="inputs">
            <input type="email" placeholder="Your Email" />
          </div>
          <textarea
            className="text-area"
            placeholder="Typing your meassage here..."
          ></textarea>
          <div className="send">
            <button>SEND</button>
          </div>
        </div>
      </div>
    </main>
  );
}
export default GetInTouch;

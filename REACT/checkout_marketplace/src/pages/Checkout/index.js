import React from "react";
import "./style.scss";

class Checkout extends React.Component {
  render() {
    return (
      <div className="checkout_wrapper">
        <h3>Checkout</h3>
        <h4>Contact information</h4>
        <p>E-mail</p>
        <input type="text" placeholder="Enter your e-mail.." />
        <p>Phone</p>
        <input type="text" placeholder="Enter your phone.." />
        {/* separator */}
        <h4>Shipping address</h4>
        <p>Full name</p>
        <input type="text" placeholder="Your full name.." />
        <p>Address</p>
        <input type="text" placeholder="Your address.." />
        <p>City</p>
        <input type="text" placeholder="Your city.." />
        <p>Country</p>
        <select required>
          <option value="" disabled selected>
            Your country..
          </option>
          <option value="arg">Argentina</option>
          <option value="bol">Bolivia</option>
          <option value="peru">Perú</option>
          <option value="uk">UK</option>
          <option value="usa">USA</option>
        </select>
        <p>Postal code</p>
        <input type="text" placeholder="Your postal code.." />
        <input type="checkbox" />
        <button>Continue</button>
      </div>
    );
  }
}

export default Checkout;

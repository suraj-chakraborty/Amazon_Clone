import React from "react";

function Footer() {
  return (
    <div>
      <div className="flex p-4  bg-amazon_blue-light text-white text-sm ">
        <p className="items-center">Back to top</p>
      </div>
      <div className="bg-amazon_blue-mid text-white p-4 pl-20 ">
        <span className="grid grid-cols-4  text-lg font-bold justify-between ">
          <h2>Get to Know Us</h2>
          <h2>Connect with Us</h2>
          <h2>Make Money with Us</h2>
          <h2>Let Us Help You</h2>
        </span>
        <div className=" grid grid-cols-4 justify-between  text-lg font-lg bg-amazon_blue-mid text-white cursor-pointer ">
          <span>
            <p className="link">About us</p>
            <p className="link">Careers</p>
            <p className="link">Press Release</p>
          </span>
          <span>
            <p className="link">Facebook</p>
            <p className="link">Twitter</p>
            <p className="link">Instagram</p>
          </span>
          <span>
            <p className="link">Sell on Amazon</p>
            <p className="link">Sell under Amazon Accelerator</p>
            <p className="link">Amazon Global Selling</p>
            <p className="link">Become an Affiliate</p>
            <p className="link">Fulfilment by Amazon</p>
            <p className="link">Advertise Your Products</p>
            <p className="link">Amazon Pay on Merchants</p>
          </span>
          <span>
            <p className="link">COVID-19 and Amazon</p>
            <p className="link">Your Account</p>
            <p className="link">Returns Centre</p>
            <p className="link">100% Purchase Protection</p>
            <p className="link">Amazon App Download</p>
            <p className="link">Amazon Assistant Download</p>
            <p className="link">Help</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;

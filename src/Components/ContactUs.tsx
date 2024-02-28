import React, { useContext } from "react";
import { UserContext } from "../utils/ContextComp";

const ContactUs = () => {
  const { userName }: any = useContext(UserContext);
  return (
    <div className="flex-col text-center p-4">
      {/* <p>{userName}</p> */}

      <h2>Contact Us</h2>
      <div className="flex-col  justify-center">
        <div>
          <label id="name">UserName</label>
          <input placeholder="user name" className="border-2 p-2 m-2 rounded-lg" />
        </div>
        <div>
          <label>Email</label>
          <input placeholder="email" className="border-2 p-2 m-2 rounded-lg" />
        </div>
        <button className="px-4 py-2 rounded-lg border-2 bg-black text-white">Submit</button>
      </div>
    </div>
  );
};

export default ContactUs;

import React from "react";

// import react icons
import { FaApple, FaChrome, FaGooglePlay } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-slate-900 z-10 w-full flex flex-col gap-5 p-6">
      <h2 className="text-red-400 text-lg font-bold text-center">
        Get the free app now
      </h2>
      <div className="flex gap-4 justify-center">
        <button className="w-35 p-2 bg-slate-700 rounded-xl text-amber-50 flex items-center border border-amber-50">
          <FaChrome size={35} style={{ color: "#FFFBEB", padding: "2px" }} />
          <p>Apple Store</p>
        </button>
        <button className="w-35 p-2 bg-slate-700 rounded-xl text-amber-50 flex items-center border border-amber-50">
          <FaApple size={35} style={{ color: "#FFFBEB", padding: "2px" }} />
          <p>Apple Store</p>
        </button>

        <button className="w-35 p-2 bg-slate-700 rounded-xl text-amber-50 flex items-center border border-amber-50">
          <FaGooglePlay
            size={35}
            style={{ color: "#FFFBEB", padding: "2px" }}
          />
          <p>Google Play</p>
        </button>
      </div>
      <div className="flex items-center justify-center gap-4 ">
        <ul className="flex gap-2 font-semibold text-sm text-amber-50">
          <li>About</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Account</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <Link to="/whisky">
        <svg x="0px" y="0px" viewBox="0 0 480 480" className="logo">
          <path
            d="M173.3,203.2l45.6-45.6c3-3.1,3-8.1-0.1-11.2s-8.1-3.1-11.2-0.1l-47.4,47.4c-1.2,1.2-2,2.7-2.2,4.3l-29.5,176.6
	c-0.1,0.9-0.1,1.8,0,2.6l10.7,64c0.6,3.9,4,6.7,7.9,6.7c0.4,0,0.9,0,1.3-0.1c4.4-0.7,7.3-4.8,6.6-9.2L144.6,376L173.3,203.2z"
          />
          <path d="M192,432h-16c-4.4,0-8,3.6-8,8s3.6,8,8,8h16c4.4,0,8-3.6,8-8S196.4,432,192,432z" />

          <path
            d="M330.3,345.3l5.1,30.7l-9.3,56H224c-4.4,0-8,3.6-8,8s3.6,8,8,8h108.9c3.9,0,7.3-2.8,7.9-6.7l10.7-64
	c0.1-0.9,0.1-1.8,0-2.6l-5.3-32c-0.7-4.4-4.8-7.3-9.2-6.6C332.6,336.8,329.6,341,330.3,345.3z"
          />

          <path
            d="M261.1,146.3c-3.1,3.1-3.1,8.2,0,11.3l45.6,45.6l19.7,118.1c0.6,3.9,4,6.7,7.9,6.7c0.4,0,0.9,0,1.3-0.1
	c4.4-0.7,7.3-4.8,6.6-9.2L322,198.1c-0.3-1.6-1.1-3.2-2.2-4.3l-47.4-47.4C269.3,143.2,264.2,143.2,261.1,146.3z"
          />

          <path
            d="M288,8c0-4.4-3.6-8-8-8h-80c-4.4,0-8,3.6-8,8v108.7l-61.7,61.7c-1.2,1.2-2,2.7-2.2,4.3l-32,192
	c-0.2,0.9-0.2,1.8,0,2.6l16,96c0.6,3.9,4,6.7,7.9,6.7h240c3.9,0,7.2-2.8,7.9-6.7l16-96c0.2-0.9,0.2-1.8,0-2.6l-32-192
	c-0.3-1.6-1.1-3.2-2.2-4.3L288,116.7V8z M208,64h64v16h-24c-4.4,0-8,3.6-8,8s3.6,8,8,8h24v16h-64V64z M208,16h64v32h-64V16z
	 M367.9,376l-14.7,88H126.8l-14.7-88l31.4-188.2l59.8-59.8h73.4l59.8,59.8L367.9,376z"
          />

          <path
            d="M184,232v112c0,4.4,3.6,8,8,8h96c4.4,0,8-3.6,8-8V232c0-4.4-3.6-8-8-8h-96C187.6,224,184,227.6,184,232z
		 M200,240h80v96h-80V240z"
          />

          <path
            d="M256,256h-32c-4.4,0-8,3.6-8,8s3.6,8,8,8h24v40c0,4.4,3.6,8,8,8c4.4,0,8-3.6,8-8v-48
		C264,259.6,260.4,256,256,256z"
          />
        </svg>
        <h1 className="logoTitle">Whisky</h1>
      </Link>
    </>
  );
};

export default Logo;

import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      className="prefix__ember-view"
      viewBox="0 0 26 26"
      width={26}
      {...props}
    >
      <path
        fill="#6a9514"
        d="M14.3 5.2L5.4 2.7l-2.5 8.9-2.5 8.9 8.9 2.4 2.5-8.8z"
      />
      <path
        fill="white"
        d="M14.223 14.131l8.853-2.503 2.503 8.853-8.853 2.503z"
      />
    </svg>
  );
}

export default SvgComponent;

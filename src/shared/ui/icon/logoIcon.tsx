import React from "react";

export interface LogoIconProps {
  size?: number;
  className?: string;
}

const LogoIcon: React.FC<LogoIconProps> = ({ className, size = 32 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size ? (size / 600) * 502 : undefined}
      className={className}
      viewBox="0, 0, 600, 502"
      style={{
        shapeRendering: "geometricPrecision",
        textRendering: "geometricPrecision",
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
    >
      <path
        fill="#01b6ad"
        d="M281.5-.5h36c12.013 3.34 23.013 8.84 33 16.5a80843.044 80843.044 0 0 1 249 213.5v15c-1.546 2.7-3.879 4.533-7 5.5a633.756 633.756 0 0 0-48 2c-9.205 3.87-14.705 10.703-16.5 20.5l-1 167c-6.339 33.171-25.839 53.837-58.5 62h-41c2.009-3.527 4.676-6.694 8-9.5l39-33c-26.998-.5-53.998-.667-81-.5a10.098 10.098 0 0 1 1.5-6c14.241-16.36 22.907-35.36 26-57 1.42-37.313 1.92-74.646 1.5-112h-246c-.167 34.002 0 68.002.5 102a142.68 142.68 0 0 0 4.5 27c-.543.06-.876.393-1 1a259.631 259.631 0 0 0 4.5 12c1.547 3.884 3.38 6.884 5.5 9a303.823 303.823 0 0 0 13.5 18 10.098 10.098 0 0 1 1.5 6c-27.002-.167-54.002 0-81 .5a2574.884 2574.884 0 0 0 46 39.5c.886.825 1.219 1.825 1 3h-41c-30.135-7.3-49.302-25.967-57.5-56-.992-62.68-1.992-125.347-3-188-1.668-3.665-4.501-5.832-8.5-6.5l-55-1c-3.12-.967-5.454-2.8-7-5.5v-12c1.283-2.368 2.95-4.535 5-6.5l159-135c1.238-.69 1.238-1.19 0-1.5.333-1 1-1.667 2-2a10.122 10.122 0 0 0 4-1.5l82-70c1.238-.69 1.238-1.19 0-1.5 8.926-7.13 18.926-12.13 30-15Z"
        style={{
          opacity: 0.999,
        }}
      />
      <path
        fill="#02b0a8"
        d="M251.5 14.5c1.238.31 1.238.81 0 1.5l-82 70a10.122 10.122 0 0 1-4 1.5 3419.04 3419.04 0 0 1 86-73Z"
        style={{
          opacity: 0.69,
        }}
      />
      <path
        fill="#02b1a8"
        d="M163.5 89.5c1.238.31 1.238.81 0 1.5L4.5 226c-2.05 1.965-3.717 4.132-5 6.5v-3a16704.493 16704.493 0 0 1 164-140Z"
        style={{
          opacity: 0.69,
        }}
      />
      <path
        fill="#01b7ad"
        d="M289.5 315.5a242.56 242.56 0 0 1 0 44 462.903 462.903 0 0 0-43-1v-42c14.51.329 28.843-.004 43-1ZM309.5 315.5a462.903 462.903 0 0 0 43 1v42a462.903 462.903 0 0 0-43 1 242.56 242.56 0 0 1 0-44Z"
        style={{
          opacity: 0.982,
        }}
      />
      <path
        fill="#19bdb4"
        d="M289.5 315.5a462.903 462.903 0 0 1-43 1v42c14.51-.329 28.843.004 43 1h-44v-44h44Z"
        style={{
          opacity: 0.561,
        }}
      />
      <path
        fill="#1cbeb6"
        d="M309.5 315.5h44v44h-44a462.903 462.903 0 0 1 43-1v-42a462.903 462.903 0 0 1-43-1Z"
        style={{
          opacity: 0.616,
        }}
      />
      <path
        fill="#01b7ae"
        d="M245.5 378.5c14.67-.167 29.337 0 44 .5a501.245 501.245 0 0 1 1 44.5h-45v-45ZM309.5 378.5h44v45h-45a518.873 518.873 0 0 1 1-45Z"
        style={{
          opacity: 0.949,
        }}
      />
      <path
        fill="#03afa7"
        d="M181.5 412.5a223.365 223.365 0 0 0 9 22c-2.12-2.116-3.953-5.116-5.5-9a259.631 259.631 0 0 1-4.5-12c.124-.607.457-.94 1-1Z"
        style={{
          opacity: 0.565,
        }}
      />
    </svg>
  );
};

export default React.memo(LogoIcon);

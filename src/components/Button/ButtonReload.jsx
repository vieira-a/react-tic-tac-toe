import * as React from "react"

const ButtonReload = (props) => (
  <svg
    width={37}
    height={38}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#a)">
      <path
        d="M0 4a4 4 0 0 1 4-4h28.395a4 4 0 0 1 4 4v25.111a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"
        fill="#A7BDC8"
        shapeRendering="crispEdges"
      />
      <path
        d="M21.645 14.447h3.75v-3.575"
        stroke="#192A32"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.738 21.189a6.985 6.985 0 0 1-3.52 1.796 7.187 7.187 0 0 1-3.973-.372 6.817 6.817 0 0 1-3.086-2.415A6.342 6.342 0 0 1 11 16.555c0-1.296.403-2.564 1.159-3.642a6.815 6.815 0 0 1 3.086-2.415 7.187 7.187 0 0 1 3.973-.372 6.984 6.984 0 0 1 3.52 1.796l2.657 2.525"
        stroke="#192A32"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <filter
        id="a"
        x={0}
        y={0}
        width={36.395}
        height={37.111}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.423529 0 0 0 0 0.537255 0 0 0 0 0.592157 0 0 0 0.8 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_44_480" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_44_480"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)

export default ButtonReload

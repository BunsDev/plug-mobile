import React from 'react';
import Svg, {
  Defs,
  G,
  Path,
  RadialGradient,
  Rect,
  Stop,
} from 'react-native-svg';

const SwapIcon = ({ color, ...props }) => (
  <Svg width="41" height="41" viewBox="0 0 41 41" {...props}>
    <Rect width="41" height="41" rx="20.5" fill="url(#paint0_radial)" />
    <G filter="url(#filter0_d)">
      <Path
        d="M10 16.9038V16.25C10 15.7083 10.4407 15.2692 10.9844 15.2692H26.6511L25.4015 14.1361C24.9989 13.7565 24.9901 13.1208 25.382 12.7303L25.8267 12.2873C26.2111 11.9042 26.8343 11.9042 27.2188 12.2873L30.6156 15.6522C31.1281 16.1629 31.1281 16.9909 30.6156 17.5016L27.2188 20.8666C26.8343 21.2496 26.2111 21.2496 25.8267 20.8666L25.382 20.4236C24.9901 20.0331 24.9989 19.3973 25.4015 19.0178L26.6511 17.8846H10.9844C10.4407 17.8846 10 17.4455 10 16.9038ZM30.0156 23.1154H14.3489L15.5985 21.9822C16.0011 21.6026 16.0099 20.9669 15.618 20.5764L15.1733 20.1334C14.7889 19.7504 14.1657 19.7504 13.7812 20.1334L10.3844 23.4984C9.87187 24.0091 9.87187 24.8371 10.3844 25.3478L13.7812 28.7127C14.1657 29.0958 14.7889 29.0958 15.1733 28.7127L15.618 28.2697C16.0099 27.8792 16.0011 27.2435 15.5985 26.8639L14.3489 25.7307H30.0156C30.5593 25.7307 31 25.2916 31 24.75V24.0961C31 23.5545 30.5593 23.1154 30.0156 23.1154Z"
        fill="white"
      />
    </G>
    <Defs>
      <RadialGradient
        id="paint0_radial"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(20 20) rotate(50.7546) scale(45.8394 45.3264)">
        <Stop stopColor="#00E8FF" />
        <Stop offset="0.671875" stopColor="#47F748" />
      </RadialGradient>
    </Defs>
  </Svg>
);

export default SwapIcon;

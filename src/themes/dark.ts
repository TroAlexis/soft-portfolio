import {formatPublicPath} from '../js/utils';

const BASE_URL = formatPublicPath(process.env.BASE_URL);

export default {
  hero: {
    background: {
      image: `linear-gradient(to top, #222 0%, rgba(34, 34, 34, 0) 20%), url(${BASE_URL}/flight-mid.jpg)`,
    }
  },
  color: {
    link: "#88B3CD",
    text: "#fff",
    background: "#222",
  },
  card: {
    background: "radial-gradient(118.99% 670.46% at -7.06% -9.5%, #191919 0%, #0a0a0a 100%)",
    boxShadow: "20px 20px 60px rgba(0, 0, 0, 0.5), -20px -20px 60px rgba(255, 255, 255, 0.05)",
    carousel: {
      opacity: 1,
      boxShadow: "-10px -10px 30px rgba(255, 255, 255, 0.05), 10px 10px 30px rgba(0, 0, 0, 0.8)"
    },
    button: {
      text: "#fff",
      background:  "#0f0f0f",
      boxShadow: {
        primary: "-4px -4px 10px rgba(255, 255, 255, 0.08), 4px 4px 10px rgba(0, 0, 0, 0.5)",
        secondary: "-4px -4px 10px rgba(255, 255, 255, 0.05), 4px 4px 10px rgba(0, 0, 0, 0.8)",
        hover: "linear-gradient(145deg, rgba(0,0,0,0.66), rgba(255,255,255,0.2))"
      },
      hoverIntensity: 0.25
    }
  },
  screen: {
    width: {
      mobile: 375,
      tablet: 600,
      desktop: 980
    },
    padding: {
      mobile: 16,
      tablet: 20,
      desktop: 48
    }
  }
}

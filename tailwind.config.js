
module.exports = {
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "bat-desk": "url('/src/assets/TEKFALLHEROD.png')",
        "about-bg": "url('/src/assets/bats-toi_home_bg-intro.jpg')",
        "bat-black": "url('/src/assets/batblack.jpg')",
        "bat-mob": "url('/src/assets/TEKFALLHERON.png')",
        "bg-lat": "url('/src/assets/bats-toi-xp_form-bg-01.svg')",
        "hero-bg": "url('https://tekfall-home.s3.amazonaws.com/TekFall2023_Portrait_nologos.jpg')",
        "tekfall-bg": "url('/src/assets/bats-bg.jpg')",
        "join-bg": "url('/src/assets/bats-black.svg')",
        "mobil-d": "url('/src/assets/mobiledouble1.png')",
        "real-bg": "url('/src/assets/batfights.jpg')",
        "black-bg": "url('/src/assets/sampleblack.jpg')",
      },
      backgroundColor: {
        navy: "#081937",
        "trans-black": "#ff6666",
        "navy-secondary": "#0C2041",
        "navy-ascent": "#122647",
        "light-blue": "#E6F1F5",
        "color-none": "transparent",
        "gey-black": "#252525",
        pink: "#f93822",
        purple: "#846ff4",
        "distinct-col": "#FFC107",
      },
      textColor: {
        navy: "#081937",
        "navy-secondary": "#0C2041",
        "navy-ascent": "#122647",
        pink: "#f93822",
        purple: "#846ff4",
        "light-blue": "#E6F1F5",
      },
      borderColor: {
        navy: "#081937",
        "navy-secondary": "#0C2041",
        "navy-ascent": "#122647",
        pink: "#f93822",
        purple: "#846ff4",
        "light-blue": "#E6F1F5",
      },
      screens: {
        sm: '425px',
        md: '768px',
        lg: '1024px',
        xl: '1440px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
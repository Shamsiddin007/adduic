/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "spread-purple": "0 0 50px 20px #30125A",
      },
      dropShadow: {
        "custom-yellow": "1px 1px 1px #FB7041",
      },
      backgroundImage: {
        'custom-radial': "radial-gradient(circle at bottom, #14274d, rgba(255, 0, 0, 0) 60%)",
      },
      zIndex: {
        0: "0",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
        18: "18",
        19: "19",
        20: "20",
      },
    },
    container: {
      center: true,
      padding: "10px",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1200px",
        xxl: "1280px",
      },
    },
  },
  plugins: [],
};

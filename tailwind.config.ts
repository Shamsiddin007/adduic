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
        animation: {
          'slide-in-out': 'slide-in-out 3s ease-in-out',
        },
        keyframes: {
          'slide-in-out': {
            '0%': { transform: 'translateX(1rem)', opacity: '0' },
            '10%, 90%': { transform: 'translateX(0)', opacity: '1' },
            '100%': { transform: 'translateX(1rem)', opacity: '0' },
          },
        },
        boxShadow: {
          "spread-purple": "0 0 50px 20px #30125A",
        },
        dropShadow: {
          "custom-yellow": "1px 1px 1px #FB7041",
        },
        backgroundImage: {
          "custom-radial":
            "linear-gradient(to right, rgba(20, 39, 77, 0) 100%, rgba(20, 39, 77, 0.5) 50%, rgba(20, 39, 77, 0.5) 80%, rgba(0, 0, 0, 0.8) 100%), linear-gradient(to bottom, rgba(20, 39, 77, 0) 0%, rgba(20, 39, 77, 0.5) 70%, rgba(20, 39, 77, 0.5) 80%, rgba(0, 0, 0, 0.8) 100%)",
          "practicum-bgBook":
            "linear-gradient(180deg, rgba(51, 117, 246, 0.32) 0%, rgba(51, 117, 246, 0.052) 100%)",
          "bg-practicum": "linear-gradient(135deg, #1a1a2e, #16213e);",
          "order-hover" : "linear-gradient(45deg, #3375F6 -40%, #02005E,transparent)",
          "feature" : "linear-gradient(189deg, #3375F6 -55%, #02005E,transparent)",
          "forma": "radial-gradient(transparent 40%, #132649 100%)"
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
        // gap: {
        //   1: "10",
        //   2: "20",
        //   3: "30",
        //   33: "32",
        //   4: "40",
        //   5: "50",
        //   6: "60",
        //   7: "70",
        //   8: "80",
        //   9: "90",
        //   10: "100"
        // }
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

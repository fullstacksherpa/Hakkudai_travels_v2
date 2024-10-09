import tailwindcssAnimate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xxs: "8px",
      xs: "12px",
      sm: "14px",
      base: "16px",
      md: "18px",
      "2md": "20px",
      lg: "24px",
      xl: "30px",
      "2xl": "35px",
      "3xl": ["40px", { lineHeight: "1.5" }],
      "4xl": "48px",
      "5xl": "56px",
      "6xl": "72px",
      "7xl": "80px",
    },
    extend: {
      backgroundImage: {
        "footer-border":
          "linear-gradient(90deg, rgba(53, 53, 53, 0) 0%, rgba(53, 53, 53, 0.8) 48.96%, rgba(53, 53, 53, 0) 100%)",
      },
      colors: {
        "gradient-1": "linear-gradient(180deg, #FFF4E2 0%, rgba(255, 255, 255, 0) 100%)",
        primary1: {
          "1": "#E8604C",
          "2": "#eb7766",
          "3": "#F7DCB5",
        },
        secondary1: {
          "1": "#FF7C5B",
          "2": "#FFB29E",
        },
        dark: {
          base: "#1E1E1E",
          "1": "#030415",
          "2": "#353535",
          "3": "#5B5B5B",
          "4": "#7B7B7B",
          "5": "#EBEBEB",
          "6": "#F3F3F3",
        },
        status: {
          info: "#219FFF",
          "info-shad": "#E9F6FF",
          success: "#17BD8D",
          "success-shad": "#E9FBF6",
          warning: "#FFC233",
          "warning-shad": "#FFF9EB",
          danger: "#F53D6B",
          "danger-shad": "#FFE3EB",
        },
        stock: {
          "1": "#DDDDDD",
          "2": "#EEEEEE",
        },
        gradient: {
          "1": "linear-gradient(152.97deg, rgba(255, 255, 255, 0.36) 0%, rgba(255, 255, 255, 0.12) 100%)",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      zIndex: {
        minus: "-1",
        1: "1",
        2: "2",
        3: "3",
        999: "999",
      },
      lineHeight: {
        "1": "1",
        "1.1": "1.1",
        "1.2": "1.2",
        "1.3": "1.3",
        "1.35": "1.35",
        "1.4": "1.4",
        "1.45": "1.45",
        "1.5": "1.5",
        "1.6": "1.6",
        "1.7": "1.7",
        "1.8": "1.8",
        "1.9": "1.9",
      },
      spacing: {
        base: "30px",
        "17": "70px",
        "30": "120px",
        "right-container": "calc((100% - 1176px) / 2)",
      },
      boxShadow: {
        "custom-1": "8px 5px 45px rgba(0, 0, 0, 0.08)",
        "custom-2": "4px 3px 40px rgba(16, 33, 34, 0.06)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindcssAnimate, typography],
};

export default config;

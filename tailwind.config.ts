import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "hsl(var(--bg))",
        card: "hsl(var(--card))",
        text: "hsl(var(--text))",
        muted: "hsl(var(--muted))",
        gold: "hsl(var(--gold))",
        gold2: "hsl(var(--gold2))",
        line: "hsl(var(--line))",
        success: "hsl(var(--success))"
      },
      boxShadow: {
        glow: "0 0 0 1px hsl(var(--line) / 0.9), 0 18px 60px hsl(var(--gold) / 0.12)"
      }
    }
  },
  plugins: []
} satisfies Config;

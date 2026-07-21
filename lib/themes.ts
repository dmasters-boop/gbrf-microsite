export type ThemeName = "dark" | "light" | "editorial" | "bold" | "corporate";

export interface ThemeTokens {
  bg:             string;
  light:          string;
  text:           string;
  textMuted:      string;
  textHeading:    string;
  surface:        string;
  surfaceBorder:  string;
  sectionAlt:     string;
  radius:         string;
  cardBg:         string;
  cardBorder:     string;
  cardShadow:     string;
  // Whether the Gap/problem section uses full brand-primary bleed or subtle tinted treatment
  gapStyle:       "bleed" | "tinted";
}

export const THEMES: Record<ThemeName, ThemeTokens> = {
  // Near-black background, white text — high drama, works for most accounts
  dark: {
    bg:            "#0A0A0A",
    light:         "#F5F5F5",
    text:          "#FFFFFF",
    textMuted:     "rgba(255,255,255,0.55)",
    textHeading:   "#FFFFFF",
    surface:       "rgba(255,255,255,0.04)",
    surfaceBorder: "rgba(255,255,255,0.08)",
    sectionAlt:    "rgba(255,255,255,0.02)",
    radius:        "1rem",
    cardBg:        "rgba(255,255,255,0.04)",
    cardBorder:    "rgba(255,255,255,0.08)",
    cardShadow:    "none",
    gapStyle:      "bleed",
  },

  // White background, dark text — clean, modern, approachable enterprise
  light: {
    bg:            "#FFFFFF",
    light:         "#F4F6FA",
    text:          "#1A1A1A",
    textMuted:     "#6B7280",
    textHeading:   "#0A0A0A",
    surface:       "#F4F6FA",
    surfaceBorder: "rgba(0,0,0,0.08)",
    sectionAlt:    "#F9FAFB",
    radius:        "0.75rem",
    cardBg:        "#FFFFFF",
    cardBorder:    "rgba(0,0,0,0.08)",
    cardShadow:    "0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)",
    gapStyle:      "tinted",
  },

  // Warm off-white, airy — premium, life sciences, heritage brands
  editorial: {
    bg:            "#FAF9F6",
    light:         "#F0EDE8",
    text:          "#1C1917",
    textMuted:     "#78716C",
    textHeading:   "#0C0A09",
    surface:       "#F0EDE8",
    surfaceBorder: "rgba(0,0,0,0.07)",
    sectionAlt:    "#F5F2EE",
    radius:        "0.5rem",
    cardBg:        "#FFFFFF",
    cardBorder:    "rgba(0,0,0,0.07)",
    cardShadow:    "0 1px 3px rgba(0,0,0,0.06)",
    gapStyle:      "tinted",
  },

  // Deep charcoal, high contrast, strong color — energy, manufacturing, field ops
  bold: {
    bg:            "#111318",
    light:         "#1E2028",
    text:          "#F1F5F9",
    textMuted:     "rgba(241,245,249,0.5)",
    textHeading:   "#FFFFFF",
    surface:       "rgba(255,255,255,0.06)",
    surfaceBorder: "rgba(255,255,255,0.1)",
    sectionAlt:    "rgba(255,255,255,0.03)",
    radius:        "0.375rem",
    cardBg:        "rgba(255,255,255,0.06)",
    cardBorder:    "rgba(255,255,255,0.1)",
    cardShadow:    "none",
    gapStyle:      "bleed",
  },

  // Light gray, structured, conservative — financial services, government, insurance
  corporate: {
    bg:            "#F2F4F7",
    light:         "#FFFFFF",
    text:          "#1F2937",
    textMuted:     "#6B7280",
    textHeading:   "#111827",
    surface:       "#FFFFFF",
    surfaceBorder: "rgba(0,0,0,0.1)",
    sectionAlt:    "#E8EBF0",
    radius:        "0.5rem",
    cardBg:        "#FFFFFF",
    cardBorder:    "rgba(0,0,0,0.1)",
    cardShadow:    "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
    gapStyle:      "tinted",
  },
};

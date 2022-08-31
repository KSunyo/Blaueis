export const KINDS = Object.freeze({ Primary: 1, Secondary: 2, Tertiary: 3 }) as const;
export const SIZES = Object.freeze({ Small: 1, Medium: 2, Large: 3 }) as const;
export const SHAPES = Object.freeze({ Square: 1, Circle: 2}) as const;
export const TYPES = Object.freeze({ Default: 1, Compact: 2 }) as const;
export const ORIENTATIONS = Object.freeze({Row: 1, RowReverse: 2, Column: 3, ColumnReverse: 4}) as const;
export const ICONS = Object.freeze({ ArrowUp: 1, ArrowRight: 2, ArrowLeft: 3, ArrowDown: 4, Maximize: 5,
    Minimize: 6 }) as const;
export const COLORS = Object.freeze({ Blue60: "#0400D5", Blue50: "#0500FF", Grayscale95: "#0A0C0F",
    Grayscale80: "#1A2026", Grayscale60: "#2B3233", Grayscale50: "#3A434D", Grayscale40: "#737A80",
    Grayscale25: "#DADBDE", Grayscale20: "#E7E8EA", Grayscale10: "#F5F6F9", Grayscale05: "#FAFAFA",
    Grayscale00: "#FFFFFF" }) as const;
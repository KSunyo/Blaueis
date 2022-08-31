export const KINDS = Object.freeze({ Primary: 1, Secondary: 2, Tertiary: 3 }) as const;
export const SIZES = Object.freeze({ Small: 1, Medium: 2, Large: 3 }) as const;
export const SHAPES = Object.freeze({ Square: 1, Circle: 2}) as const;
export const TYPES = Object.freeze({ Default: 1, Compact: 2 }) as const;
export const ORIENTATIONS = Object.freeze({Row: 1, RowReverse: 2, Column: 3, ColumnReverse: 4}) as const;
export const ICONS = Object.freeze({ ArrowUp: 1, ArrowRight: 2, ArrowLeft: 3, ArrowDown: 4, Maximize: 5,
    Minimize: 6 }) as const;

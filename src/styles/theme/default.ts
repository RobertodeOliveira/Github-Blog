export const defaultTheme = {
  colors: {
    blue: '#3294F8',
    baseTitle: '#E7EDF4',
    baseSubtitle: '#C4D4E3',
    baseText: '#AFC2D4',
    baseSpan: '#7B96B2',
    baseLabel: '#3A536B',
    baseborder: '#1C2F41',
    basePost: '#112131',
    baseProfile: '#0B1B2B',
    baseBackground: '#071422',
    baseInput: '#040F1A',
  },
  font: {
    sizes: {
      /** 0.75rem */
      xsmall: '12px',
      /** 0.875rem */
      small: '14px',
      /** 1rem */
      medium: '16px',
      /** 1.125rem */
      large: '18px',
      /** 1.25rem */
      xlarge: '20px',
      /** 1.5rem */
      xxlarge: '24px',
    },
    family: {
      primary: 'Nunito',
    },
    weight: {
      regular: 400,
      bold: 600,
    },
  },
} as const

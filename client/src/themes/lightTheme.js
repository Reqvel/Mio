import mainTheme from "./mainTheme";

const lightTheme = {
    bgPrimary: '#FFFFFF',
    bgSecondary: '#FBFBFB',
    textPrimary: '#25282E',
    textSecondary: '#FFFFFF',
    textSubtile: '#989898',
    textDisabled: '#CCCCCC',
    buttonFilled: '#25282E',
    buttonFilledHover: '#25282E',
    buttonTransparentHover: '#F4F4F4',
    buttonBorder: '#989898',
    featureCardColor: '#25282E',
    percentageColorUp: '#0CAF60',
    pricingCardBorder: '#CCCCCC',
    inputFieldBorderColor: '#989898',
    inputFieldOutlineColor: '#25282E',
    footerColor: '#25282E',
    mainTheme: mainTheme,

  color: {
    accent: '#FEB062'
  },
  backgroundColor: {
    primary: '#FFFFFF',
    secondary: '#FBFBFB',
  },
  maxWidth: {
    landing: '1280px',
    dashboard: '2000px',
    signIn: '1280px',
  },
  padding: {
    landing: '16px',
    signIn: '16px',
  },
  textColor: {
    primary: '#25282E',
    secondary: '#FFFFFF',
    subtile: '#989898',
  },
  gap: {
    cards: {
      landing: '24px',
    },
  },
  components: {
    footer: {
      color: '#25282E'
    },
    button: {
      filled: {
        color: '#25282E',
        hoverColor: '#25282E',
      },
      transparent: {
        hoverColor: '#F4F4F4',
      },
      outlined: {
        borderColor: '#989898',
      },
    },
    card: {
      featureColor: '#25282E',
      pricing: {
        borderColor: '#CCCCCC',
      },
    },
    inputField: {
      borderColor: '#989898',
      outlineColor: '#25282E',
    },
  }
};

export default lightTheme;
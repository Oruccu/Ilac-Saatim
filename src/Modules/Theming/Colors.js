// hex
const constantColors = {
    white: '#FFFFFF',
    black: '#000000',
    transparent: 'transparent',
    mainColor1: '#30D086', // green
    mainColor2: '#FF7E39', // orange
    greys: {
        1: '#383838',
        2: '#ACACAC',
        3: '#868686',
        4: '#BCBCBC',
    },
};

const toRGBA = (hexCode, opacity) => {
    let hex = hexCode.replace('#', '');

    if (hex.length === 3) {
        hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
    }

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgba(${r},${g},${b},${opacity / 100})`;
};

export const colorNames = {
    auth: {
        background: 'auth/background',
        inputBorder: 'auth/inputBorder',
        inputBackground: 'auth/inputBackground',
        inputText: 'auth/inputText',
        inputPlaceholder: 'auth/inputPlaceholder',
        coloredButtonBackground: 'auth/coloredButtonBackground',
        coloredButtonText: 'auth/coloredButtonText',
        paleButtonBackground: 'auth/paleButtonBackground',
        paleButtonText: 'auth/paleButtonText',
        appNameText: 'auth/appNameText',
    },
};

export const darkColors = {
    // auth
    [colorNames.auth.background]: constantColors.mainColor1,
    [colorNames.auth.inputBorder]: constantColors.greys[1],
    [colorNames.auth.inputBackground]: toRGBA(constantColors.greys[1], 10),
    [colorNames.auth.inputText]: constantColors.greys[1],
    [colorNames.auth.inputPlaceholder]: toRGBA(constantColors.greys[1], 40),
    [colorNames.auth.coloredButtonBackground]: constantColors.greys[1],
    [colorNames.auth.coloredButtonText]: constantColors.white,
    [colorNames.auth.paleButtonBackground]: constantColors.transparent,
    [colorNames.auth.paleButtonText]: constantColors.greys[1],
    [colorNames.auth.appNameText]: constantColors.greys[1],
   
};

export const lightColors = {
    // auth
  
    [colorNames.auth.background]: constantColors.mainColor1,
    [colorNames.auth.inputBorder]: constantColors.white,
    [colorNames.auth.inputBackground]: toRGBA(constantColors.white, 20),
    [colorNames.auth.inputText]: constantColors.white,
    [colorNames.auth.inputPlaceholder]: toRGBA(constantColors.white, 60),
    [colorNames.auth.coloredButtonBackground]: constantColors.white,
    [colorNames.auth.coloredButtonText]: constantColors.mainColor2,
    [colorNames.auth.paleButtonBackground]: constantColors.transparent,
    [colorNames.auth.paleButtonText]: constantColors.white,
    [colorNames.auth.appNameText]: constantColors.white,
};

import { createTheme } from '@material-ui/core/styles';

// All the following keys are optional.
// We try our best to provide a great default value.
const theme = createTheme({
    color: {
      primary: "#b71c1c",
      secondary: "#283593",
      error: "#e53935",
      // Used by `getContrastText()` to maximize the contrast between the background and
      // the text.
      contrastThreshold: 3,
      // Used to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2,
    },
    typography: {
      fontFamily: "Roboto"
    },
    shape: {
      color: "#FFFFFF",
      borderColor: "#CCCCCC",
      backgroundColor: "#651fff",
      borderRadius: "4px"
    }
});

export default theme;
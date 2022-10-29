import "./App.css";
import AppRouter from "./router/AppRouter";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    bgLightBlue: "#d9e8fc",
    bgDarkColor: "#2a4359",
    hoverColor: "red",
    loginBorderColor: "#015958",
    LoginButtonColor: "#008f8c",
    LoginInputColor: "#50dcd9",
    LoadingDivColor: "#16c79e",
  },
  responsive: {
    lg: "870px",
    sm: "530px",
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;

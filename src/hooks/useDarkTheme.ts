import { createTheme } from "@mui/material/styles";

export const useDarkTheme = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return darkTheme;
};

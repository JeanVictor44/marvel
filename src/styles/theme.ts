import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        primary: {
            main:"#EC1D24",
            "100":red['100']
        },
        background:{
            default:"#1D1D2A"
        },
        secondary: {
            "main":"#FFF"
        },
        text:{
            primary:"#FFF"
        }
    }
})
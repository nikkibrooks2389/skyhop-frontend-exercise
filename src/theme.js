import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 450,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    // Add other global theme configurations here
});

export default theme;
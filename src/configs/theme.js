import { createTheme } from '@mui/material/styles';
import red from '@mui/material/colors/red';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: red[700],
        },
        secondary: {
            main: red[900],
        },
    },
    components: {
    },
});

export default theme;

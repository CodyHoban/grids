import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
        palette: {
          primary: {
            light: 'pink',
            main: '#B0D4B8',
            dark: '#D8F9FA',
            contrastText: '#4F4F4F',
          },
          secondary: {
            light: '#ff7961',
            main: '#A4C3A2',
            dark: '#ba000d',
            contrastText: '#000',
          },
          background: {
            default: "#EAE7D6",
          },
          action: {
            active: 
            rgba(0, 0, 0, 0.54),
            hover: 
            rgba(200, 0, 0, 0.04)
          }
        },
        
        
})

export default theme;
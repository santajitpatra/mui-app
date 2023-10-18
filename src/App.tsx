import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { ThemeProvider, createTheme } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: deepPurple
  },
  typography:{
    fontFamily:'Quicksand',
    fontWeightLight:400,
    fontWeightRegular:500,
    fontWeightMedium:600,
    fontWeightBold:700
  }
});

const App = () => {
  return (
      <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="notes" element={<Notes />} />
            <Route path="create" element={<Create />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
      </ThemeProvider>

  )
}

export default App
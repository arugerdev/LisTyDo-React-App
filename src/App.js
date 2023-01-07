import './App.css';
import SaveLocalData from './components/SaveLocalData'
import ErrorMessage from './components/ErrorMessage';
import { useLocalStorage } from './services/useLocalStorage';
import { useEffect } from 'react';
import ChangeThemeButton from './components/ChangeThemeButton';
function App() {

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  function SetThemeButton() {
    setTheme((theme === 'light' ? 'dark' : 'light'))
    if (document.body.classList.contains('light')) {
      document.body.classList.remove('light')
      document.body.classList.add('dark')
    }
    if (document.body.classList.contains('dark')) {
      document.body.classList.remove('dark')
      document.body.classList.add('light')
    }
  }

  useEffect(() => {
    if (document.body.classList.contains('light')) {
      document.body.classList.remove('light')
    }
    if (document.body.classList.contains('dark')) {
      document.body.classList.remove('dark')
    }

    document.body.classList.add(theme)
  }, [theme])

  return (
    <div className="App">
      <SaveLocalData></SaveLocalData>
      <ErrorMessage></ErrorMessage>
      <ChangeThemeButton theme={theme} SetTheme={SetThemeButton}></ChangeThemeButton>
    </div>
  );
}

export default App;

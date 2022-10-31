import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import { ScrollProvider } from '../context/useScroll';
import dark from "../theme/dark";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ScrollProvider>
      <ThemeProvider theme={dark}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ScrollProvider>
  );
}

export default MyApp

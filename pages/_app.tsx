import 'styles/globals.css';
import 'styles/highlight.css';
import type { AppProps } from 'next/app';
import localFont from '@next/font/local';

const MonaSans = localFont({
  src: '../styles/fonts/Mona-Sans.woff2',
  variable: '--font-mona-sans',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${MonaSans.variable} font-primary`}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

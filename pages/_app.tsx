import 'styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from '@next/font/local';
import { useRouter } from 'next/router';
import { useNextRouterViewTransitions } from 'use-view-transitions/next';

const MonaSans = localFont({
  src: '../styles/fonts/Mona-Sans.woff2',
  variable: '--font-mona-sans',
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useNextRouterViewTransitions(router);
  return (
    <div className={`${MonaSans.variable} font-primary`}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

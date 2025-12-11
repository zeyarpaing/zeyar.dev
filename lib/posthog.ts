import posthog from 'posthog-js';

export const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
export const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST;

if (typeof window !== 'undefined' && POSTHOG_KEY) {
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST || 'https://us.i.posthog.com',
    // loaded: (posthog) => {
    //   if (process.env.NODE_ENV === 'development') posthog.debug();
    // },
    capture_pageview: true, // We'll handle this manually in _app.tsx
  });
}

export default posthog;

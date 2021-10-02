import { useCallback } from 'react';
import { useRouter, NextRouter } from 'next/router';
import { useLinkTo } from '@react-navigation/native';

export function useLink() {
  const linkTo = useLinkTo();
  const router = useRouter();

  return {
    link: useCallback(
      (...nextProps: Parameters<NextRouter['push']>) => {
        if (router) {
          router.push(...nextProps);
        } else {
          const [url, as] = nextProps;

          const path = (from: typeof url): string => {
            return typeof from == 'string' ? from : from.pathname;
          };

          linkTo(as ? path(as) : path(url));
        }
      },
      [linkTo, router]
    )
  };
}

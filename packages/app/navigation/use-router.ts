import { useCallback } from 'react';
import { useRouter as useNextRouter, NextRouter } from 'next/router';
import { useLinkTo, useNavigation } from '@react-navigation/native';

export function useRouter() {
  const linkTo = useLinkTo();
  const router = useNextRouter();
  const navigation = useNavigation();

  return {
    push: useCallback(
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
    ),
    replace: useCallback(
      (...nextProps: Parameters<NextRouter['replace']>) => {
        if (router) {
          router.replace(...nextProps);
        } else {
          const [url, as] = nextProps;

          const path = (from: typeof url): string => {
            return typeof from == 'string' ? from : from.pathname;
          };

          linkTo(as ? path(as) : path(url));
        }
      },
      [linkTo, router]
    ),
    back: useCallback(
      (...nextProps: Parameters<NextRouter['back']>) => {
        if (router) {
          router.back(...nextProps);
        } else {
          navigation.goBack();
        }
      },
      [linkTo, router]
    )
  };
}

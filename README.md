# Expo + Next.js Monorepo Example

Here is an example showing how to create a universal React app using Expo and Next.js in a monorepo.

You'll find included:

- Expo SDK 43 (with Hermes on iOS and Android)
- Next.js 12
- React Native for Web
- TypeScript
- Babel config that works for Expo and Next.js with Reanimated in a monorepo
- Reanimated
- React Native Bottom Sheet
- Dripsy

And ready-to-use (small configuration required):

- Expo Application Services
- Custom Development Client
- Sentry

## Architecture

### App

> Code shared between iOS, Android and Web

`cd packages/app`

### Expo

> Native

Expo entrypoint: `packages/expo/App.tsx`

`cd packages/expo`

`yarn start:expo` to start iOS and Android app with Expo

Demo: https://expo.dev/@poolpoolpool/example?release-channel=production

Pro tip: build and launch a custom development client with `SCHEME=com.example.axel yarn run:ios -d` (replace `axel` with your first name)

### Next.js

> Web

Next.js entrypoint: `packages/next/src/pages/_app.tsx`

`cd packages/next`

`yarn dev` to start web app

Demo: https://expo-next-monorepo-example.vercel.app

## Notes

### Root

- Don't add any package here

### App

- Don't add any package here

### Expo

- Add all your React Native and universal packages here
- Publish to Expo with `yarn publish:production`

### Next.js

- Add your web-only packages here
- Deploy to Vercel with `yarn deploy` -- if it fails, make sure to configure your project correctly:
  go to your project settings on Vercel and set the "Framework Preset" to Next.js and the "Root Directory" to `packages/next`

## Navigation

Here is an example of how to handle navigation: https://github.com/axeldelafosse/expo-next-monorepo-example/pull/1

## What should I do next?

Here are some ideas to get you started:

- Use React Navigation
- Style your app with Dripsy
- Animate your app with Moti
- Do some requests with SWR or Apollo Client
- Build cool things with Expo Modules
- Create a custom development client
- Add Sentry
- Add CI/CD with EAS via GitHub Actions
- ...

## Related monorepo example

I also recommend to check out this example from Cedric: https://github.com/byCedric/eas-monorepo-example. It includes some EAS GitHub Actions and a bare workflow (ejected) example.

## License

[MIT](https://github.com/axeldelafosse/expo-next-monorepo-example/blob/main/LICENSE.md)

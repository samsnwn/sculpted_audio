import localFont from "next/font/local";

const prGrotesk = localFont({
  src: [
    {
      path:'../../public/fonts/PP Right Grotesk/PP Radio Grotesk - Free for Personal Use/PPRadioGrotesk-Regular.otf',
      style: 'normal',
      weight: '400'
    },
    {
      path:'../../public/fonts/PP Right Grotesk/PP Radio Grotesk - Free for Personal Use/PPRadioGrotesk-RegularItalic.otf',
      style: 'italic',
      weight: '400'
    },
    {
      path:'../../public/fonts/PP Right Grotesk/PP Radio Grotesk - Free for Personal Use/PPRadioGrotesk-Black.otf',
      style: 'normal',
      weight: '700'
    },
    {
      path:'../../public/fonts/PP Right Grotesk/PP Radio Grotesk - Free for Personal Use/PPRadioGrotesk-BlackItalic.otf',
      style: 'italic',
      weight: '700'
    },
    {
      path:'../../public/fonts/PP Right Grotesk/PP Radio Grotesk - Free for Personal Use/PPRadioGrotesk-Ultralight.otf',
      style: 'normal',
      weight: '100'
    },
    {
      path:'../../public/fonts/PP Right Grotesk/PP Radio Grotesk - Free for Personal Use/PPRadioGrotesk-UltralightItalic.otf',
      style: 'italic',
      weight: '100'
    },

  ]
});

const gtPressura = localFont({
  src: [
    {
      path: "../../public/fonts/GT PRESSURA/GT Pressura Font Family @ Grilli Type/GT Pressura Font Family ~ WOFF/gt-pressura-regular.woff",
      style: 'normal',
      weight: '400'
    },
    {
      path: "../../public/fonts/GT PRESSURA/GT Pressura Font Family @ Grilli Type/GT Pressura Font Family ~ WOFF/gt-pressura-regular-italic.woff",
      style: 'italic',
      weight: '400'
    },
    {
      path: "../../public/fonts/GT PRESSURA/GT Pressura Font Family @ Grilli Type/GT Pressura Font Family ~ WOFF/gt-pressura-bold.woff",
      style: 'normal',
      weight: '700'
    },
    {
      path: "../../public/fonts/GT PRESSURA/GT Pressura Font Family @ Grilli Type/GT Pressura Font Family ~ WOFF/gt-pressura-bold-italic.woff",
      style: 'italic',
      weight: '700'
    },
    {
      path: "../../public/fonts/GT PRESSURA/GT Pressura Font Family @ Grilli Type/GT Pressura Font Family ~ WOFF/gt-pressura-light.woff",
      style: 'normal',
      weight: '100'
    },
    {
      path: "../../public/fonts/GT PRESSURA/GT Pressura Font Family @ Grilli Type/GT Pressura Font Family ~ WOFF/gt-pressura-light-italic.woff",
      style: 'italic',
      weight: '100'
    },
  ],
});

const gtPressuraMono = localFont({
  src: [
    {
      path: "../../public/fonts/GT PRESSURA/GT Pressura Mono Font Family @ Grilli Type/GT Pressura Mono Font Family ~ WOFF/gt-pressura-mono-regular.woff",
      style: 'normal',
      weight: '400'
    },
    {
      path: "../../public/fonts/GT PRESSURA/GT Pressura Mono Font Family @ Grilli Type/GT Pressura Mono Font Family ~ WOFF/gt-pressura-mono-regular-italic.woff",
      style: 'italic',
      weight: '400'
    },
    {
      path: "../../public/fonts/GT PRESSURA/GT Pressura Mono Font Family @ Grilli Type/GT Pressura Mono Font Family ~ WOFF/gt-pressura-mono-bold.woff",
      style: 'normal',
      weight: '700'
    },
    {
      path: "../../public/fonts/GT PRESSURA/GT Pressura Mono Font Family @ Grilli Type/GT Pressura Mono Font Family ~ WOFF/gt-pressura-mono-bold-italic.woff",
      style: 'italic',
      weight: '400'
    },
    {
      path: "../../public/fonts/GT PRESSURA/GT Pressura Mono Font Family @ Grilli Type/GT Pressura Mono Font Family ~ WOFF/gt-pressura-mono-light.woff",
      style: 'normal',
      weight: '100'
    },
    {
      path: "../../public/fonts/GT PRESSURA/GT Pressura Mono Font Family @ Grilli Type/GT Pressura Mono Font Family ~ WOFF/gt-pressura-mono-light-italic.woff",
      style: 'italic',
      weight: '400'
    },
  ],
});

export { prGrotesk, gtPressura, gtPressuraMono };

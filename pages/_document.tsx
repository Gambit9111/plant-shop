import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Livvic&family=Lora:wght@400;600&display=swap" rel="stylesheet" />
      </Head>
      <body className='bg-fourthBlack max-w-screen h-full'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

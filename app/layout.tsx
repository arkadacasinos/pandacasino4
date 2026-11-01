import '@fontsource-variable/inter'
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="dark bg-[#0b0e11] text-[#f3f4f6]">
      <head>
        <meta charSet="utf-8" />
        <title>Panda Casino официальный сайт | Рабочее зеркало Панда Казино онлайн</title>
        <meta
          name="description"
          content="Официальный сайт Panda Casino онлайн. Актуальное рабочее зеркало Панда Казино для входа и регистрации. Играть на реальные деньги в слоты с бонусом до 225% и 1500 фриспинов."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://pandacasino4.vercel.app/" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Panda Casino официальный сайт | Рабочее зеркало Панда Казино онлайн" />
        <meta
          property="og:description"
          content="Официальный сайт Panda Casino онлайн. Актуальное рабочее зеркало Панда Казино для входа и регистрации. Играть на реальные деньги в слоты с бонусом до 225% и 1500 фриспинов."
        />
        <meta property="og:url" content="https://pandacasino4.vercel.app/" />
        <meta property="og:site_name" content="Panda Casino" />
        <meta property="og:image" content="https://pandacasino4.vercel.app/panda-hero.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Panda Casino официальный сайт | Рабочее зеркало Панда Казино онлайн" />
        <meta
          name="twitter:description"
          content="Официальный сайт Panda Casino онлайн. Актуальное рабочее зеркало Панда Казино для входа и регистрации. Играть на реальные деньги в слоты с бонусом до 225% и 1500 фриспинов."
        />
        <meta name="theme-color" content="#0b0e11" />
      </head>
      <body className="antialiased bg-[#0b0e11] text-[#e5e7eb] font-sans selection:bg-[#fbbf24] selection:text-[#0b0e11]">
        {children}
      </body>
    </html>
  )
}

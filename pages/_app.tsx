import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react';
import '@/styles/globals.css'
import { darkTheme } from '@/themes';
//Esta carpeta de themes agarra el index de themes
//porque no especifica ningun archivo entonces
//agarra primero ese archivo
//Mirar archivo index.ts

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}
// cualquier provider no es mas que un proovedor de información
//aquí se puede colocar lo que necesite y todos los hijos
//lo podrán usar en este caso son los componentes casi toda la app

/*
GOD FIRST
Para usar el modo oscuro leer comments
archivo ./themes/darkTheme.ts Y ahí
accedo al metodo tsx del NextUiProvider
llamando theme que es como un atributo 
html y ahí le paso mi archivo darkTheme
*/ 
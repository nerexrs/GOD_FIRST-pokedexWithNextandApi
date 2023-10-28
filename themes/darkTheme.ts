//GOD FIRST
import { createTheme } from "@nextui-org/react"

export const darkTheme = createTheme({
    type: 'dark',
    theme: {
        colors: {}, // override dark theme colors
    }
});
/*
GOD FIRST
Para usar el darkTheme solo tengo que 
usar este componente y después le hago un
export nombrado al parecer.
De ahí lo importo en mi index de themes
porque ahí es donde se reciben
todos los imports de los otros componentes
*/

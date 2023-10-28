//GOD FIRST
import { Link, Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image"
import NextLink from "next/link"


export const Navbar = () => {

    const { theme } = useTheme()

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0x 20px',
            backgroundColor: theme?.colors.gray900.value
        }}>
            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                alt="icono de la app"
                width={70}
                height={70}
            />
            {/*GOD FIRST
            Gracias Dios por todo, ayudame a mantener la santidad.
            Padre, en el nombre de tu Hijo Jesucristo, con la unción
            del Espíritu Santo, te pido perdón por todos mis pecados,
            ayudame, transformame Señor, Jesús dame de esa agua tuya
            
            */}

            <NextLink href="/" passHref legacyBehavior>
                <Link >
                    <div style={{ display: 'flex' }}>
                        <Text color="white" h2>
                            P
                        </Text>
                        <Text color="white" h3>
                            okemon
                        </Text>
                    </div>
                </Link>
            </NextLink>

            <Spacer css={{ flex: 1 }} />

            <Link href="/favorites" css={{ marginRight: '1rem' }}>
                <Text color="white" >Favoritos</Text>

            </Link>


        </div>
    )
}

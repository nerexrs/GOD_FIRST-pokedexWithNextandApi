
import { NextPage, GetStaticProps } from "next"
import { Layout } from '../components/layouts';
import { pokeApi } from "@/api";
import { PokemonListResponse, SmallPokemon } from "@/interfaces";
import { Grid } from "@nextui-org/react";
import { PokemonCard } from "@/components/pokemon";

interface Props {
  pokemons: SmallPokemon[];
}
//GOD FIRST - llamo a mis props y simplemente las imprimo haciendo otro map de nuevo donde puestro el id y el name


const HomePage: NextPage<Props> = ({ pokemons }) => {

  return (
    <>
      <Layout title='Listado de Pokemóns'>

        <Grid.Container gap={2} justify="flex-start">
          {
            pokemons.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))
          }

        </Grid.Container>
      </Layout>


    </>
  )
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

/* GOD FIRST
GOD FIRST
GOD FIRST
Esa función de getStaticProps se ejecuta solo del lado del servidor,
por eso un console.log(object); con esa función aparece en la terminal pero no
en el navegador web o sea en el cliente, y por eso es static site generation.
Solo se ejecuta en build time o sea cuando se cosnstruye la aplicación y se muestra.
Como estamos en desarrollo solo con recargar ya se hace un build local al parecer.

Solo se puede usar en las pages, no se puede en otra carpeta porque solo sirve con
páginas. Como se ejecuta del lado del servidor se puede ver file system, base de datos,
peticiones http, cualquier cosa porque se puede ejecutar solo en el servidor, con excepción de las props,

 Como retorno las props mi componente lo recibe como props normales
*/

export const getStaticProps: GetStaticProps = async (ctx) => {
  // const { data } = await  // your fetch function here 

  // console.log("GOD FIRST - Hola Mundo");

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  const pokemons: SmallPokemon[] = data.results.map((poke, i) => (
    {
      ...poke,
      id: i + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
    }
  ))
  // GOD FIRST - simplemente llamo al spread operator para hacer un nuevo array donde le agregare poke que es cada
  // pokemón y de ahí traigo su id que como es de x + 1 entonces pues al index que empieza en cero le sumo 1 y después
  //para el id le paso en la variable numerica lo mismo

  //GOD FIRST - lo que hace Next con el static side generation es que en el build me construye un archivo
  //json que contiene toda la respuesta de los 151 pokemons entonces carga no cuando el usuario hace el request sino apenas
  //se construye la app entonces claro la velocidad aumenta Grid
  return {
    props: {
      pokemons
    }
  }
}


export default HomePage

/*
<Button color="gradient">
          {/* gradient va de azul a morado
        cuando next usa un guion bajo al inicio
        de un archivo es porque hace especial
        Ejemplo el _app se renderiza primero
        y el _document extiende nuestro html }
        Hola Mundo

        </Button>
*/
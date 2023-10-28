//GOD FIRST
import { useState } from 'react';
import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';


import { pokeApi } from '../../api';
import { Layout } from '../../components/layouts';
import { Pokemon, PokemonListResponse } from '../../interfaces';
import { getPokemonInfo, localFavorites } from '@/utils';
import confetti from 'canvas-confetti';


interface Props {
    pokemon: Pokemon;

}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {



    const [isInFavorites, setIsInFavorites] = useState(localFavorites.existInFavorites(pokemon.id));

    const onToggleFavorite = () => {
        localFavorites.toogleFavorite(pokemon.id);
        setIsInFavorites(!isInFavorites);

        if (isInFavorites) return;
        confetti({
            zIndex: 999,
            particleCount: 100,
            spread: 160,
            angle: -100,
            origin: {
                x: 1,
                y: 0
            }
        })


    }

    // console.log({ existeWindow: typeof window });
    //next dentro de codigo react que renderiza aparece en el front,
    //pero su scope global es en el servidor es decir fuera de las funciones pasa todo
    //por el server o sea por node
    // useEffect(() => {
    //     console.log('useEffect', localStorage.getItem('favorites'));

    // }, [])


    // console.log(pokemon);

    return (
        <Layout title={pokemon.name}>
            <h1>
                <Grid.Container css={{ marginTop: '5px' }} gap={2}>
                    <Grid xs={12} sm={4}>
                        <Card hoverable css={{ padding: '30px' }}>
                            <Card.Body>
                                <Card.Image
                                    src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                                    alt={pokemon.name}
                                    width='100%'
                                    height={200}>


                                </Card.Image>
                            </Card.Body>
                        </Card>
                    </Grid>

                    <Grid xs={12} sm={8}>
                        <Card>
                            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Text h1 transform='capitalize'>{pokemon.name}</Text>
                                <Button
                                    color='gradient'
                                    ghost={!isInFavorites}
                                    onClick={onToggleFavorite}
                                >
                                    {isInFavorites ? 'En favoritos' : 'Guardar en favoritos'}

                                </Button>
                            </Card.Header>

                            <Card.Body>
                                <Text size={30}>Sprites</Text>
                                <Container direction='row'>
                                    <Image
                                        src={pokemon.sprites.front_default}
                                        alt={pokemon.name}
                                        width={100}
                                        height={100}
                                    />
                                    <Image
                                        src={pokemon.sprites.back_default}
                                        alt={pokemon.name}
                                        width={100}
                                        height={100}
                                    />
                                    <Image
                                        src={pokemon.sprites.front_shiny}
                                        alt={pokemon.name}
                                        width={100}
                                        height={100}
                                    />
                                    <Image
                                        src={pokemon.sprites.back_shiny}
                                        alt={pokemon.name}
                                        width={100}
                                        height={100}
                                    />
                                </Container>
                            </Card.Body>
                        </Card>
                    </Grid>

                </Grid.Container>
            </h1>
        </Layout>
    )
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes


export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
    const pokemonNames: string[] = data.results.map(pokemon => pokemon.name);
    //acá es un llamado get de la api  que despues hace un man en el que retorna cada nombre de pokemon
    return {

        paths: pokemonNames.map(name => ({
            params: { name }
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { name } = params as { name: string };
    // const { data } = await  // your fetch function here 

    // console.log("GOD FIRST - Hola Mundo");



    // GOD FIRST - simplemente llamo al spread operator para hacer un nuevo array donde le agregare poke que es cada
    // pokemón y de ahí traigo su id que como es de x + 1 entonces pues al index que empieza en cero le sumo 1 y después
    //para el id le paso en la variable numerica lo mismo

    //GOD FIRST - lo que hace Next con el static side generation es que en el build me construye un archivo
    //json que contiene toda la respuesta de los 151 pokemons entonces carga no cuando el usuario hace el request sino apenas
    //se construye la app entonces claro la velocidad aumenta Grid
    return {
        props: {
            pokemon: await getPokemonInfo(name)

        }
    }
}
export default PokemonByNamePage;

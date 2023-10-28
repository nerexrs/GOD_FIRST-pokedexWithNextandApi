import { Grid, Card } from "@nextui-org/react"
import Link from "next/link";
import { FC } from "react"
import { Pokemon } from '../../interfaces/pokemon-full';
import { useRouter } from 'next/router';

interface Props {
    pokemonId: number;
}

export const FavoriteCardPokemon: FC<Props> = ({ pokemonId }) => {

    const router = useRouter();
    //así es ue uso el router de next para redirigir a páginas

    const onFavoriteClicked = () => {
        router.push(`/pokemon/${pokemonId}`)
    }

    return (
        <Grid xs={6} sm={4} md={2} xl={1} key={pokemonId} onClick={onFavoriteClicked}>
            <Card hoverable clickable css={{ padding: 10 }}>
                <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
                    width={'100%'}
                    height={140}
                >

                </Card.Image>
            </Card>
        </Grid>
    )
}

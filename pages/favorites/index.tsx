//  GOD FIRST 
import { Layout } from '@/components/layouts';
import { NoFavorites } from '@/components/ui';
import { localFavorites } from '@/utils';
import { Card, Grid, StyledGridContainer } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { FavoritePokemons } from '../../components/pokemon';

const FavoritesPage = () => {

    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

    useEffect(() => {
        setFavoritePokemons(localFavorites.pokemons)
    }, [])

    return (
        <Layout title='Pokémons - Favoritos'>
            {
                favoritePokemons.length === 0
                    ? (<NoFavorites />)
                    : (
                        <FavoritePokemons pokemons={favoritePokemons} />)
            }

        </Layout>
    )
}

export default FavoritesPage

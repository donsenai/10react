import styles from './styles.module.scss';
import { useState } from 'react';

export default function Games() {

    const [games, setGames] = useState([]);
    
    const RenderGames = () => {
        return games.map(game => {
        return(
            <tr key={game.id}>
            <td>{game.name}</td>
            </tr>
        )
        })
    }

    function handleAddGame() {
        const newGame = {
            id: games.length + 1,
            name: `Game ${games.length + 1}`
        };
        setGames([...games, newGame]);
    };

    return (
        <table>
        <tr>
            <th>Game</th>
        </tr>
        <RenderGames />
        </table>
    );
}

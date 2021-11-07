
import deadrising from "./img/deadrising.jpg";
import deadrising2 from "./img/deadrising-small.jpg";
import planescape from "./img/Planescape.jpg";
import planescape2 from "./img/Planescape-small.jpg";
import theHunter from "./img/theHunter.jpg";
import theHunter2 from "./img/theHunter-small.jpg";

export const GameState = () => {
    return [
        {
            title: "Dead Rising",
            mainImg: deadrising,
            secondaryImg: deadrising2,
            url: '/work/dead-rising',
            awards: [
                {
                    award: 'Dumbest action',
                    publication: 'The Justus Grammys'
                }, 
                {
                    award: 'Most jank',
                    publication: 'The Murties'
                }
            ]
        },
        {
            title: "Planescape Torment",
            mainImg: planescape,
            secondaryImg: planescape2,
            url: '/work/planescape-torment',
            awards: [
                {
                    award: 'Best protagonist',
                    publication: 'The Murties'
                }, 
                {
                    award: 'Best story',
                    publication: 'The Murties'
                }
            ]
        },
        {
            title: "TheHunter: Call of the Wild",
            mainImg: theHunter,
            secondaryImg: theHunter2,
            url: '/work/theHunter',
            awards: [
                {
                    award: 'Best forests',
                    publication: 'The Murties'
                }, 
                {
                    award: 'Most realistic bears',
                    publication: 'The national forest'
                }
            ]
        }
    ]
}
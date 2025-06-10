import React from "react"
import Card from "./card"
import knicksImg from '../assets/celknit.jpeg'
import cavImg from '../assets/cavcel.jpeg'
import sixImg from '../assets/cel76.jpeg'
import bucksImg from '../assets/celbucks.jpeg'
import lakersImg from '../assets/cellakers.jpeg'
import warrImg from '../assets/celwarriors.jpeg'
import magicImg from '../assets/magcel.jpeg'
import pacersImg from '../assets/pacerscel.jpeg'
import portImg from '../assets/portcel.jpeg'
import twolImg from '../assets/tceltcswol.jpeg'
import thunderImg from '../assets/thunceltics.jpeg'
import heatImg from '../assets/celheat.jpeg'


const Schedule = () => {
    return (
    <div className="schedule-card">
        <Card img={knicksImg} teams="Celtics vs Knicks" date="Oct 21, 2025" gameLink="https://www.nba.com/playoffs/2025/east-semifinal-2"></Card>
        <Card img={heatImg} teams="Celtics vs Heat" date="Oct 23, 2025" gameLink="https://www.nba.com/game/mia-vs-bos-0022401106"></Card>
        <Card img={warrImg} teams="Warriors vs Celtics" date="Oct 27, 2025" gameLink="https://www.nba.com/game/bos-vs-gsw-0022400604"></Card>
        <Card img={lakersImg} teams="Lakers vs Celtics" date="Oct 29, 2025" gameLink="https://www.nba.com/game/lal-vs-bos-0022400918"></Card>
        <Card img={bucksImg} teams="Celtics vs Bucks" date="Nov 1, 2025" gameLink="https://www.nba.com/game/bos-vs-mil-0022400202"></Card>
        <Card img={sixImg} teams="Celtics vs 76ers" date="Nov 2, 2025" gameLink="https://www.nba.com/game/bos-vs-phi-0022400789"></Card>
        <Card img={thunderImg} teams="Thunder vs Celtics" date="Nov 4, 2025" gameLink="https://www.nba.com/game/okc-vs-bos-0022400946"></Card>
        <Card img={cavImg} teams="Celtics vs Cavaliers" date="Nov 6, 2025" gameLink="https://www.nba.com/game/cle-vs-bos-0022400852"></Card>
        <Card img={twolImg} teams="Celtics vs Timberwolves" date="Nov 7, 2025" gameLink="https://www.espn.com/nba/game/_/gameId/401705030/celtics-timberwolves"></Card>
        <Card img={portImg} teams="Celtics vs Trailblazers" date="Nov 9, 2025" gameLink="https://www.nba.com/game/bos-vs-por-0022401034"></Card>
        <Card img={magicImg} teams="Magic vs Celtics" date="Nov 11, 2025" gameLink="https://www.espn.com/nba/game/_/gameId/401768029/magic-celtics"></Card>
        <Card img={pacersImg} teams="Celtics vs Pacers" date="Nov 12, 2025" gameLink="https://www.nba.com/game/0022300493"></Card>
    </div>
    );
};

export default Schedule;
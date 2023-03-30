import React from 'react'
import './About.css'
import GrantFerowich from './Grant-Ferowich-circle.png'

export default function About() {
  return (
    <div className='about-component'>

        <h1>Grant Ferowich</h1>
        <img src={GrantFerowich} alt='Grant-Ferowich-headshot' />
        <h2>Chicago-born. Wake Forest Demon Deacon. Full Stack Engineer. Researcher.</h2>
        <h3>What companies have paid me to do: Web application engineering. Automate processes. Business process optimization. Robotic process automation. </h3>
        <h3>What I have been up to lately: Epistemica-X,<a href='https://vercel.com/clariti23/minesweeper/BqxSydbSQJyFWfSoxzaeHHqUQ7Wd' target="_blank" rel='noreferrer'>Minesweeper</a>, <a href="https://tic-tac-toe-five-lilac.vercel.app/" target="_blank" rel='noreferrer'>Tic Tac Toe</a>, <a href="https://docs.google.com/spreadsheets/d/15zHGNvYy0-NMx6YYduk3UVvPFTXsam7YO1OQzeq2c7s/edit#gid=0" target="_blank" rel='noreferrer'>data structures and algorithms</a>, system design.</h3>
    </div>
  )
}

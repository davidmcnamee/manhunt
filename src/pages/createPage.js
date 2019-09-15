import { Link } from "gatsby";
import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


const PregamePage = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }}>


    <h1 style={{
        marginTop: '2em',
        padding: 10,
        height: 250,
        width: 250,
        fontSize: 36,
        textAlign: 'center'
    }}>Create Your Game</h1>

    <p>Name you match</p>

    <input></input>

    <Link to="/pregame/"><Button style={{
        marginTop: '3em',
        padding: 10,
        width: 250
    }} variant="danger">GO</Button></Link>
    <Link to="/homePage"><Button style={{
        margin: 5,
        padding: 10,
        width: 250
    }} variant="danger">BACK</Button></Link>
  </div>
)

export default PregamePage

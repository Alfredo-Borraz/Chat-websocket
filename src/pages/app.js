import React from 'react'
import css from '../assets/css/app.css';
import Inicio from "../pages/inicio";

class App extends React.Component {
    render(){
        return(
            <React.Fragment>
               <Inicio></Inicio>
            </React.Fragment>
        )
    }
}

export default App;
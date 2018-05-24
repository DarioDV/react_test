import React, { Component } from 'react';
import logo from './logo-giotto.png';
import DT from './logoDT.png';
import './App.css';

class App extends Component { 
  constructor(props) {
    super(props);
    this.state = {numero : 0};
  }
  handleClickD() {
    this.setState({numero : 1});
  }
  handleClickM() {
    this.setState({numero : 2});
  }
  handleClickS() {
    this.setState({numero : 3});
  }

  render() { 
    let valore;
    let immagine;
    if (this.state.numero === 0) {
      valore = <small></small>;
    } else if (this.state.numero === 1){
      valore = <small>Dario Della Vecchia <br/> Front-End <br/> test@almaviva.it <br/></small>;
      immagine = <img src={DT} className="App-logo" alt="logo" />;
    } else if (this.state.numero ===2) {
      valore = <small>Michele Curci <br/> Back-End <br/> test@almaviva.it <br/></small>;
      immagine = <img src={DT} className="App-logo" alt="logo" />;
    }else{
      valore = <small>Simone Marzoli <br/> Full-Stack <br/> test@almaviva.it <br/></small>;
    }
  return (
    <div className="App">
      <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Pagina Presentazione dei dipendenti AlmavivA <br /> Progetto Giotto</h1>
      </header>    
          
          <h1 className="App-intro">Benvenuto nella pagina di presentazione del progetto Giotto Almaviva<br/></h1>
          <p className="App-body">
        Basata su componenti OpenSource fruibile on-premises e in as-a-Service, che abilita la realizzazione di qualsiasi applicazione IoT partendo da un sistema di Back-End già disponibile e integrato in tutte le sue componenti (Advanced Analytics, Rules Engine, Message Broker, IAM).<br/>
        Maggiori info su <a href="http://giotto.almaviva.it/">AlmavivA Giotto</a>
          </p>
        <div className="App-div">
        <button type="button" className="App-button" title="Clicca per mostrare Dario" onClick={() => this.handleClickD()}>Dario</button>
        <button type="button" className="App-button" title="Clicca per mostrare Michele" onClick={() => this.handleClickM()}>Michele</button>
        <button type="button" className="App-button" title="Clicca per mostrare Michele" onClick={() => this.handleClickS()}>Simone</button>
        <p className="App-p">{valore}{immagine}</p>
        </div>
      </div>
       
    );
  }
}
export default App;

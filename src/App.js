import React, { Component } from 'react';
import logo from './logo-giotto.png';
import DT from './logoDT.png';
import './App.css';

class App extends Component { 
  constructor(props) {
    super(props);
    this.state = {numero : 0};
  }
  handleClick(x) {
    if (x.nomi === 'Dario'){
      this.setState({numero: 1});
    }else{
      console.log('test');
    }
  }

  render() { 
    let valore;
    let immagine;
    let nomi = ['Simone', 'Dario', 'Michele','Laura'];
    const listItems = nomi.map((nomi) => <button type="button" className="App-button" title="Mostra info dipendente" onClick={() => this.handleClick({nomi})}>{nomi}</button>);
    switch (this.state.numero) {
        case 1: valore = <small>Dario Della Vecchia <br/> Front-End <br/> test@almaviva.it <br/></small>;
                immagine = <img src={DT} className="App-logo" alt="logo" />;
                break;
        case 2: valore = <small>Michele Curci <br/> Back-End <br/> test@almaviva.it <br/></small>;
                immagine = <img src={DT} className="App-logo" alt="logo" />;       
                break;
        case 3: valore = <small>Simone Marzoli <br/> Full-Stack <br/> test@almaviva.it <br/></small>;
                break;
        default:valore = <small></small>;
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
        {listItems}
        <p className="App-p">{valore}{immagine}</p>
        </div>
      </div>
       
    );
  }
}
export default App;

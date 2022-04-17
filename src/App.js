import React, { Component } from 'react'

class App extends Component{
  
  constructor(props){
    super(props)
    this.state = {
      frase: ''
    }
    this.frases = [
      'A vida trará coisas boas se tiveres paciência', 
      'Defeitos e virtudes são apenas dois lados da mesma moeda', 
      'A maior de todas as torres começa no solo', 
      'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você', 
      'Não compense na ira o que lhe falta na razão'
    ]
    this.breakBiscuit = this.breakBiscuit.bind(this)
  }

  breakBiscuit(){
    let index = (Math.floor(Math.random() * (this.frases.length - 0)) + 0)
    this.setState({ frase: this.frases[index]})
  }
  
  render(){
    return (
      <div>
        <img src={require("./assets/biscuit.png")} alt="luck biscuit"/>
        <Button name="Abrir biscoito" action={this.breakBiscuit}/>
        <h2>{this.state.frase}</h2>
      </div>
    );
  }
}

class Button extends Component{
  render(){
    return (
      <div>
        <button onClick={this.props.action}>{this.props.name}</button>
      </div>
    )
  }
}

export default App;

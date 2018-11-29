import React, { Component } from 'react';
import Header from './components/Header';
import AgregarCita from './components/AgregarCita';
import ListaCitas from './components/ListaCitas';

class App extends Component {

  state = {
    citas: []
  }

  componentDidMount(){
    const citasLS = localStorage.getItem('citas');

    if(citasLS){
      this.setState({
        citas: JSON.parse(citasLS)
      })
    }
  }

  componentDidUpdate(){
    //storage solo almacena cadenas de texto
    localStorage.setItem(
      'citas',
      JSON.stringify(this.state.citas)
    )
    //stringify transforma el arreglo a string
  }

  crearCita = (nuevaCita) => {

     const citas = [...this.state.citas, nuevaCita];

     this.setState({
        citas
     });
  }

  borrarCita = id => {
    //obtener copia del state
    const citasActuales = [...this.state.citas];

    //borrar el elemento del state
    const citas = citasActuales.filter(cita => cita.id !== id);
    
    //actualizar el state
    this.setState({
      citas
    });

  }

  render() {
    return <div className="container">
        <Header titulo={"Administrador de Pacientes de Veterinaria"} />
        <div className="row">
          <div className="col-md-6">
            <AgregarCita crearCita = {this.crearCita} />
          </div>
          <div className="col-md-6">
            <ListaCitas citas = {this.state.citas} borrarCita = {this.borrarCita} />
          </div>
        </div>
      </div>;
  }
}

export default App;

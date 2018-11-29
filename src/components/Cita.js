import React,{Component} from 'react';
import PropTypes from 'prop-types';

export default class Cita extends Component {

    eliminarCita = () => {
        this.props.borrarCita(this.props.info.id);
    }

    render() {

        const {mascota, dueño, fecha, hora, sintomas} = this.props.info;

        return (
            <div className="media mt-3">
                <div className="media-body">
                    <h3 className="mt-0">{mascota}</h3>
                    <p className="card-text"><span>Nombre del Dueño: </span>{dueño}</p>
                    <p className="card-text"><span>Fecha: </span>{fecha}</p>
                    <p className="card-text"><span>Hora: </span>{hora}</p>
                    <p className="card-text"><span>Sintomas:</span></p>
                    <p className="card-text">{sintomas}</p>
                    <button onClick={this.eliminarCita} className="btn btn-danger">Eliminar &times;</button>
                </div>
            </div>
        );
    }
}

Cita.propTypes = {
  info: PropTypes.shape({
      mascota: PropTypes.string.isRequired,
      dueño: PropTypes.string.isRequired,
      fecha: PropTypes.string.isRequired,
      hora: PropTypes.string.isRequired,
      sintomas: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
  }),
  borrarCita: PropTypes.func.isRequired
};
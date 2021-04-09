import { useContext } from 'react';
import { SocketContext } from '../context/SocketContext';
import { SOCKET_EVENTS } from '../helpers/event-types';

export const BandList = () => {
  const { socket, bands } = useContext(SocketContext);

  const handleVote = (id) => {
    socket.emit(SOCKET_EVENTS.VOTE_BAND, id);
  };

  const handleDelete = (id) => {
    socket.emit(SOCKET_EVENTS.DELETE_BAND, id);
  };

  const handleOnBlur = (band) => {
    socket.emit(SOCKET_EVENTS.CHAGE_NAME, band);
  };

  const handleChangeName = (evt, id) => {
    const name = evt.target.value;
    const newBands = bands.map((band) => {
      if (band.id === id) band.name = name;
      return band;
    });
    setBands(newBands);
  };

  const createRows = () => {
    return bands.map((band) => (
      <tr key={band.id}>
        <td>
          <button
            className='btn btn-primary'
            onClick={() => handleVote(band.id)}
          >
            +1
          </button>
        </td>
        <td>
          {' '}
          <input
            className='form-control'
            type='text'
            value={band.name}
            onChange={(evt) => handleChangeName(evt, band.id)}
            onBlur={() => handleOnBlur(band)}
          />{' '}
        </td>
        <td>{band.votes}</td>
        <td>
          <button
            type='button'
            className='btn btn-danger'
            onClick={() => handleDelete(band.id)}
          >
            Borrar
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <table className='table table-stripped'>
      <thead>
        <tr>
          <th></th>
          <th>Nombre</th>
          <th>Votos</th>
          <th>Borrar</th>
        </tr>
      </thead>
      <tbody>{createRows()}</tbody>
    </table>
  );
};

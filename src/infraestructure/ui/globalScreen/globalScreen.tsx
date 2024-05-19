import './globalScreen.css';
import {Link} from 'react-router-dom';

function GlobalScreen() {

  return (
      <>
          <h1>Programa de Colas</h1>
          <div>
              <Link to="/public">Public</Link>
              <Link to="/newTicket">New Ticket</Link>
          </div>
          <div>
              <form action="escritorio.html">
                  <input name="escritorio"
                         type="text"
                         placeholder="Escritorio"
                         autoFocus
                         required/>
                  <button type="submit">
                      Ingresar
                  </button>
              </form>
          </div>
      </>
  );
}

export default GlobalScreen;

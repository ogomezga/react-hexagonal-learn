import './globalScreen.css';
import {Link} from 'react-router-dom';

function GlobalScreen() {

  return (
      <>
          <h1>Programa de Colas</h1>
          <div className="links">
              <Link to="/public">Public Window</Link>
              <Link to="/newTicket">New Ticket</Link>
          </div>
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
      </>
  );
}

export default GlobalScreen;

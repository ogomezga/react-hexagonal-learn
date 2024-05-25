import './globalScreen.css';
import {Link, useNavigate} from 'react-router-dom';
import React from 'react';

function GlobalScreen() {
    const navigate = useNavigate();

    const redirectToDesktop = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const desktopName = (event.currentTarget.elements.namedItem('escritorio') as HTMLInputElement).value;
        navigate('/desktop?escritorio=' + desktopName);
    };

    return (
        <>
            <h1>Programa de Colas</h1>
            <div className="links">
                <Link to="/public">Public Window</Link>
                <Link to="/newTicket">New Ticket</Link>
            </div>
            <form onSubmit={redirectToDesktop}>
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

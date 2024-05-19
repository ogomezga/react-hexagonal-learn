function Desktop() {
    return (
        <>
            <h1 id="lblEscritorio">Escritorio</h1>
            <div>
                <h4>Atendiendo a <small>....</small></h4>

                <button id="btnAtenderTicket">
                    Atender siguiente ticket
                </button>
            </div>

            <div>
                <h4>En cola</h4>

                <div>
                    <span>Ya no hay más tickets</span>
                </div>

                <h1 id="lblPendientes">10</h1>
            </div>
        </>
    );
}

export default Desktop;

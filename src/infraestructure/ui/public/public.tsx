import './public.css';

function Public() {
    return (
        <>
            <div className="table-tickets">
                <div className="current-ticket">
                    <span id="lblTicket1" className="ticket-actual-numero">Ticket W</span>
                    <span id="lblEscritorio1" className="ticket-actual-escritorio">Escritorio W</span>
                </div>
                <div className="next-tickets">
                    <div>
                        <span id="lblTicket2" className="ticket-secundario">Ticket X</span>
                        <span id="lblEscritorio2">Escritorio X</span>
                    </div>
                    <div>
                        <span id="lblTicket3" className="ticket-secundario">Ticket Y</span>
                        <span id="lblEscritorio3">Escritorio Y</span>
                    </div>
                    <div>
                        <span id="lblTicket4" className="ticket-secundario">Ticket Z</span>
                        <span id="lblEscritorio4">Escritorio Z</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Public;
import './public.css';
import {useDependencies} from '../../dependency-injection.tsx';

function Public() {
    const { useDisplayTickets } = useDependencies().cradle;
    const { lblTicket1,
        lblTicket2,
        lblTicket3,
        lblTicket4,
        lblDesktop1,
        lblDesktop2,
        lblDesktop3,
        lblDesktop4} = useDisplayTickets();
    return (
        <>
            <div className="table-tickets">
                <div className="current-ticket">
                    <span id="lblTicket1">{ lblTicket1 }</span>
                    <span id="lblDesktop1">{ lblDesktop1 }</span>
                </div>
                <div className="next-tickets">
                    <div>
                        <span id="lblTicket2">{ lblTicket2 }</span>
                        <span id="lblDesktop2">{ lblDesktop2 }</span>
                    </div>
                    <div>
                        <span id="lblTicket3">{ lblTicket3 }</span>
                        <span id="lblDesktop3">{ lblDesktop3 }</span>
                    </div>
                    <div>
                        <span id="lblTicket4">{ lblTicket4 }</span>
                        <span id="lblDesktop4">{ lblDesktop4 }</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Public;
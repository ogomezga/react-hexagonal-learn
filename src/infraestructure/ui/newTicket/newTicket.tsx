import './newTicket.css';
import {useDependencies} from '../../dependency-injection.tsx';

function NewTicket() {
    const { useCreateNewTicket } = useDependencies().cradle;
    const { lblNewTicket, btnCreateDisabled, createNewTicket } = useCreateNewTicket();

    return (
        <>
            <span id="lblNewTicket">
                {lblNewTicket}
            </span>
            <button id="btnCreate" onClick={createNewTicket} disabled={btnCreateDisabled}>
                Generar nuevo ticket
            </button>
        </>
    );
}

export default NewTicket;
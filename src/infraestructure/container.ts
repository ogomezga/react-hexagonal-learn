import {
    AwilixContainer,
    createContainer,
    asFunction,
} from 'awilix';
import useCreateNewTicket from '../useCases/useCreateNewTicket.ts';
import useDisplayTickets from '../useCases/useDisplayTickets.ts';


let container: AwilixContainer;

export function getMainContainer() {
    if (!container) {
        container = createContainer();
    }

    container.register({
        /**
         * Given that Awilix runs as soon as the server starts to register dependencies, the useEffect is executed at that moment.
         * So, when it's required in the component, it doesn't perform the necessary actions because it doesn't detect that the component is "mounting" or updating.
         * That's why it should be registered as an implementation of a function.
         */
        useCreateNewTicket: asFunction(() => useCreateNewTicket).singleton(),
        useDisplayTickets: asFunction(() => useDisplayTickets).singleton(),
    });

    return container;
}
import { useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';
import {Ticket} from '../domain/ticket.ts';

type CreateNewTicketResponse = {
    lblNewTicket: string;
    btnCreateDisabled: boolean;
    createNewTicket: () => void;
};

export default function useCreateNewTicket(): CreateNewTicketResponse {
    const [lblNewTicket, setLblNewTicket] = useState('Cargando...');
    const [btnCreateDisabled, setBtnCreateDisabled] = useState(false);
    const [socket, setSocket] = useState<Socket | null>(null);

    useEffect(() => {
        const newSocket = io('http://localhost:3000', {
            transports: ['websocket'], // Make sure to set up the transport correctly if you're experiencing CORS issues.
        });
        setSocket(newSocket);

        newSocket.on('connect', (): void => {
            setBtnCreateDisabled(false);
        });

        newSocket.on('disconnect', (): void => {
            setBtnCreateDisabled(true);
        });

        newSocket.on('ultimo-ticket', (lastTicket: string): void => {
            setLblNewTicket('Ticket ' + lastTicket);
        });

        return (): void => {
            newSocket.disconnect();
        };
    }, []);

    const createNewTicket = (): void => {
        if (socket) {
            socket.emit('siguiente-ticket', null, (ticket: Ticket) => {
                setLblNewTicket('Ticket ' + ticket.numb);
            });
        }
    };

    return {
        lblNewTicket,
        btnCreateDisabled,
        createNewTicket,
    };
}
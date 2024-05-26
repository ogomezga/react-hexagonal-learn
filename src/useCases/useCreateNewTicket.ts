import { useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';

export default function useCreateNewTicket() {
    const [lblNewTicket, setLblNewTicket] = useState('Cargando...');
    const [btnCreateDisabled, setBtnCreateDisabled] = useState(false);
    const [socket, setSocket] = useState<Socket | null>(null);

    useEffect(() => {
        const newSocket = io('http://localhost:3000', {
            transports: ['websocket'], // Make sure to set up the transport correctly if you're experiencing CORS issues.
        });
        setSocket(newSocket);

        newSocket.on('connect', () => {
            setBtnCreateDisabled(false);
        });

        newSocket.on('disconnect', () => {
            setBtnCreateDisabled(true);
        });

        newSocket.on('ultimo-ticket', (lastTicket: string) => {
            setLblNewTicket('Ticket ' + lastTicket);
        });

        return () => {
            newSocket.disconnect();
        };
    }, []);

    const createNewTicket = () => {
        if (socket) {
            socket.emit('siguiente-ticket', null, (ticket: { numb: string }) => {
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
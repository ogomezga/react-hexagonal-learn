import {useEffect, useState} from 'react';
import {io} from 'socket.io-client';
import {Ticket} from '../domain/ticket.ts';

type DisplayTicketsResponse = {
    lblTicket1: string;
    lblTicket2: string;
    lblTicket3: string;
    lblTicket4: string;
    lblDesktop1: string;
    lblDesktop2: string;
    lblDesktop3: string;
    lblDesktop4: string;
};

export default function useDisplayTickets(): DisplayTicketsResponse {
    const [lblTicket1, setLblTicket1] = useState('Ticket W');
    const [lblTicket2, setLblTicket2] = useState('Ticket X');
    const [lblTicket3, setLblTicket3] = useState('Ticket Y');
    const [lblTicket4, setLblTicket4] = useState('Ticket Z');
    const [lblDesktop1, setLblDesktop1] = useState('Desktop W');
    const [lblDesktop2, setLblDesktop2] = useState('Desktop X');
    const [lblDesktop3, setLblDesktop3] = useState('Desktop Y');
    const [lblDesktop4, setLblDesktop4] = useState('Desktop Z');

    useEffect(() => {
        const socket = io('http://localhost:3000', {
            transports: ['websocket'],
        });

        socket.on('ultimos-ticket', ( lastFourTickets: Ticket[] ) => {                    // Connection event
            if ( lastFourTickets ) {
                const audio = new Audio('../assets/audio/new-ticket.mp3');
                audio.play().then(() => {})
                    .catch(error => {
                        console.error('Error al reproducir el audio:', error);
                    });

                lastFourTickets.forEach( (ticket: Ticket, i: number) => {
                    switch (i) {
                        case 0:
                            setLblTicket1('Ticket ' + ticket.numb);
                            setLblDesktop1(ticket.desk);
                            break;

                        case 1:
                            setLblTicket2('Ticket ' + ticket.numb);
                            setLblDesktop2(ticket.desk);
                            break;

                        case 2:
                            setLblTicket3('Ticket ' + ticket.numb);
                            setLblDesktop3(ticket.desk);
                            break;

                        case 3:
                            setLblTicket4('Ticket ' + ticket.numb);
                            setLblDesktop4(ticket.desk);
                            break;

                        default:
                            break;
                    }
                });
            }
        });

        return (): void => {
            socket.disconnect();
        };
    }, []);

    return {
        lblTicket1,
        lblTicket2,
        lblTicket3,
        lblTicket4,
        lblDesktop1,
        lblDesktop2,
        lblDesktop3,
        lblDesktop4,
    };
}
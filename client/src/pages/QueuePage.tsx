import { Col, Row, Typography, Divider } from "antd";
import { ListTicket } from "../components/ListTicket/ListTicket";
import { ListTicketHistorical } from "../components/ListTicketHistorical/ListTicketHistorical";
import { useHideMenu } from "../hooks/useHideMenu";
import { ITicket } from "../models/ticket.model";

const data: ITicket[] = [
    {
        ticketNo: 33,
        escritorio: 3,
        agente: 'Fernando Herrera'
    },
    {
        ticketNo: 34,
        escritorio: 4,
        agente: 'Melissa Flores'
    },
    {
        ticketNo: 35,
        escritorio: 5,
        agente: 'Carlos Castro'
    },
    {
        ticketNo: 36,
        escritorio: 3,
        agente: 'Fernando Herrera'
    },
    {
        ticketNo: 37,
        escritorio: 3,
        agente: 'Fernando Herrera'
    },
    {
        ticketNo: 38,
        escritorio: 2,
        agente: 'Melissa Flores'
    },
    {
        ticketNo: 39,
        escritorio: 5,
        agente: 'Carlos Castro'
    },
];

export const QueuePage = () => {

    useHideMenu(false);

    return (
        <>
            <Typography.Title level={1}>Atendiendo al cliente</Typography.Title>
            <Row>
                <Col xs={24} xl={12} sm={24} xxl={12}>
                    <ListTicket data={data.slice(0, 3)} />
                </Col>
                <Col xs={24} xl={12} sm={24} xxl={12}>
                    <Divider>Historial</Divider>
                    <ListTicketHistorical data={data.slice(3)} />
                </Col>
            </Row>
        </>
    )
}

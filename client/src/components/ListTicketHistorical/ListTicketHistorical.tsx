import { Divider, List, Tag, Typography } from "antd"
import { ITicket } from "../../models/ticket.model";

export const ListTicketHistorical: React.FC<{ data: ITicket[] }> = ({ data }) => {

    const renderDescription = ({ ticketNo, agente }: ITicket) => (
        <>
            <Typography.Text type="secondary">En el escritorio </Typography.Text>
            <Tag color="magenta">{ticketNo}</Tag>

            <Typography.Text type="secondary">Agente </Typography.Text>
            <Tag color="volcano">{agente}</Tag>
        </>
    )

    const handleRenderItem = (item: ITicket) => {
        const description = renderDescription(item);
        return (
            <>
                <List.Item>
                    <List.Item.Meta title={`Ticket Nro. ${item.ticketNo}`} description={description} />
                </List.Item>
                <Divider className="item-card-divider" />
            </>
        );
    }

    return (
        <List dataSource={data.slice(0, 3)} renderItem={handleRenderItem} />
    )
}

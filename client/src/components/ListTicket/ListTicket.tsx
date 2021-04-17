import { Card, Divider, List, Tag, Typography } from "antd"
import { ITicket } from "../../models/ticket.model";

export const ListTicket: React.FC<{ data: ITicket[] }> = ({ data }) => {

    const handleRenderItem = (item: ITicket) => (
        <>
            <List.Item>
                <Card className="card-item" actions={[
                    <Tag color="volcano">{item.agente}</Tag>,
                    <Tag color="magenta">Escritorio: {item.escritorio}</Tag>
                ]}>
                    <Typography.Title>Nro. {item.ticketNo}</Typography.Title>
                </Card>
            </List.Item>
            <Divider className="item-card-divider" />
        </>
    );    

    return (
        <List dataSource={data.slice(0, 3)} renderItem={handleRenderItem} />
    )
}

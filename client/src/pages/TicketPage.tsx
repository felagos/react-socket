import { FormOutlined } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd";
import { useHideMenu } from "../hooks/useHideMenu";

export const TicketPage = () => {

    useHideMenu(false);

    const handleNewTicket = () => {
    }

    return (
        <>
            <Row>
                <Col span={14} offset={6} className="center">
                    <Typography.Title level={3}>Presione el botón para un nuevo ticket</Typography.Title>
                    <Button type="primary" shape="round" icon={<FormOutlined />} size="large" onClick={handleNewTicket}>Nuevo ticket</Button>
                </Col>
            </Row>
            <Row className="mt-100">
                <Col span={14} offset={6} className="center">
                    <Typography.Title level={4}>Su número</Typography.Title>
                    <Typography.Text type="success" className="ticket-number-created">55</Typography.Text>
                </Col>
            </Row>
        </>
    );
}

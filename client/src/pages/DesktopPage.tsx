import { useHistory } from "react-router";
import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Row, Typography } from "antd";
import { useHideMenu } from "../hooks/useHideMenu";
import { StorageHelper } from "../helper/storage.helper";
import { IFormSigIn } from "../models/sign.model";

export const DesktopPage = () => {
    const user = StorageHelper.getItem<IFormSigIn>("user");
    const history = useHistory();

    useHideMenu(false);

    const handleExit = () => {
        localStorage.clear();
        history.push("/");
    }

    const handleNextTicket = () => {
        
    }

    return (
        <>
            <Row>
                <Col span={20}>
                    <Typography.Title level={2}>Nombre</Typography.Title>
                    <Typography.Text>Usted está trabajando en el escritorio </Typography.Text>
                    <Typography.Text type="success">{user?.escritorio}</Typography.Text>
                </Col>

                <Col span={4} className="right">
                    <Button shape="round" type="primary" onClick={handleExit} danger>
                        <CloseCircleOutlined />
                        Salir
                    </Button>
                </Col>
            </Row>
            <Divider />
            <Row>
                <Col>
                    <Typography.Text className="text-ticket-description">Está atendiendo el ticket núnmero: </Typography.Text>
                    <Typography.Text type="danger" className="text-number-ticket">55</Typography.Text>
                </Col>
            </Row>
            <Row>
                <Col offset={20} span={4} className="right">
                    <Button onClick={handleNextTicket} shape="round" type="primary">
                        <RightOutlined />
                        Siguiente
                    </Button>
                </Col>
            </Row>
        </>
    );
}

import { Input, Form, Button, InputNumber, Typography, Divider } from "antd";
import { useHistory } from "react-router";
import { StorageHelper } from "../helper/storage.helper";
import { useHideMenu } from "../hooks/useHideMenu";
import { IFormSigIn } from "../models/sign.model";


const layout = {
    wrapperCol: { span: 24 },
};
const tailLayout = {
    wrapperCol: { span: 24 },
};

export const SingInPage = () => {
    useHideMenu(false);

    const history = useHistory();

    const onFinish = (values: IFormSigIn) => {
        StorageHelper.saveItem("user", values);
        history.push("/desktop");
    };

    return (
        <div className="sign-in-container">
            <div className="sign-in-form">
                <Typography.Title level={2}>Ingresar</Typography.Title>
                <Typography.Text>Ingrese su nombre y número de escritorio</Typography.Text>
                <Divider />

                <Form {...layout} name="basic" onFinish={onFinish} layout="vertical">

                    <Form.Item label="Nombre del agente" name="agente" colon={false} rules={[{ required: true, message: 'Campo requerido' }]}  >
                        <Input autoComplete="off" />
                    </Form.Item>

                    <Form.Item label="Escritorio" name="escritorio" colon={false} rules={[{ required: true, message: 'Campo requerido' }]}  >
                        <InputNumber size="middle" min={1} />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit" block>Ingresar</Button>
                    </Form.Item>

                </Form>
            </div>
        </div>
    )
}

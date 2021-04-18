import { Layout, Menu } from 'antd';
import { UserOutlined, FormOutlined, DesktopOutlined, MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useActivedMenu } from '../../hooks/useActivedMenu';
import { useContext } from 'react';
import { UiContext } from '../../context/UiContenxt';

import './LayoutApp.scss';

const { Sider, Content } = Layout;

export const LayoutApp: React.FC = ({ children }) => {
    const isLogged = localStorage.getItem("user") !== null;
    const { activedMenu } = useActivedMenu();
    const { isHidden } = useContext(UiContext);

    return (
        <Layout className="layout-app">
            <Sider collapsedWidth="0" breakpoint="md" hidden={isHidden}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" selectedKeys={activedMenu}>
                    {
                        !isLogged && <Menu.Item key="1" icon={<UserOutlined />}>
                            <Link to='/sign-in'>Ingresar</Link>
                        </Menu.Item>
                    }
                    <Menu.Item key="2" icon={<MenuOutlined />}>
                        <Link to='/queue'>Cola</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<FormOutlined />}>
                        <Link to='/create-ticket'>Crear Ticket</Link>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<DesktopOutlined />}>
                        <Link to='/desktop'>Escritorio</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Content className="site-layout-background">
                    {children}
                </Content>
            </Layout>
        </Layout>
    )
}

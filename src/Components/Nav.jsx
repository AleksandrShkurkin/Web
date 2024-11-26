import React, { useState } from "react";
import { Header } from "antd/es/layout/layout";
import { Switch, Button, Modal, Form, Input, message, Typography, Avatar, Badge, Space } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
const { Title } = Typography;


const Nav = ({ isDarkMode, onThemeChange, count }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalLogoutOpen, setIsModalLogoutOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [form] = Form.useForm();
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    const showModal = () => {
        setIsModalOpen(true);
    }

    const showModalLogout = () => {
        setIsModalLogoutOpen(true);
    }

    const handleOk = () => {
        console.log("click");
        setConfirmLoading(true);
        setTimeout(() => {
            form.submit();
            setConfirmLoading(false);
            setFormData({});
        }, 2_000);
    }

    const handleOkLogout = () => {
        setFormData({});
        navigate("/");
        setIsModalLogoutOpen(false);
        message.info("You have been logged out!");
    }

    const handleCancel = () => {
        setIsModalOpen(false);
        form.setFieldsValue(
            {
                email: "",
                password: ""
            }
        )
    }

    const handleCancelLogout = () => {
        setIsModalLogoutOpen(false);
    }

    const onFinish = (values) => {
        setFormData(values);
        message.success("Registration successful!");
        setIsModalOpen(false);
    }

    const onFinishFailed = (errorInfo) => {
        message.error("Something went wrong, try again!");
    }

    return (
        <Header
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: "flex-end",
                backgroundColor: "#CCCAC9"
            }}>
            {Object.keys(formData).length !== 0 && (
                <>
                    <Title level={3}
                        style={{
                            marginRight: 'auto',
                            color: "black",
                            marginBottom: "25px"
                        }}>Welcome, {formData.email}!</Title>
                    <Space size={24} style={{ marginRight: "10px" }}>
                        <Link to="/checkout">
                            <Badge count={count}>
                                <Avatar shape="square" icon={<ShoppingCartOutlined />} />
                            </Badge>
                        </Link>
                    </Space>
                </>
            )}

            <Switch
                checked={isDarkMode}
                onChange={onThemeChange}
                checkedChildren="Light"
                unCheckedChildren="Dark"
                style={{
                    marginRight: "7px"
                }}
            />
            {Object.keys(formData).length === 0 ? (
                <Button type="primary" onClick={showModal}>
                    Register
                </Button>
            ) : (
                <Button type="primary" danger onClick={showModalLogout}>
                    Logout
                </Button>
            )}
            <Modal
                title="Registration"
                open={isModalOpen}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}>
                <Form
                    form={form}
                    name="reg"
                    variant="filled"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off">
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: "Input email!"
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Input password!"
                            }
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                </Form>
            </Modal>
            <Modal
                title="Logout"
                open={isModalLogoutOpen}
                onOk={handleOkLogout}
                onCancel={handleCancelLogout}>
                Are you sure you want to logout?
            </Modal>
        </Header>
    )
}

export default Nav;
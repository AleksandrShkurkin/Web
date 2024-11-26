import React, { useState } from "react";
import { Checkbox, Button, Card, Avatar, Divider, Col, Row, Popover, QRCode, theme, Typography } from "antd";
import { CustomerServiceOutlined } from "@ant-design/icons"
import { Content } from "antd/es/layout/layout";

const { Title } = Typography;
const { Meta } = Card;

const CardShow = ({ items, onCheckboxChange, onCheckedItemsChange }) => {
    const { token } = theme.useToken();

    const [checkedList, setCheckedList] = useState([]);

    const handleCheckboxChange = (item) => {
        const isChecked = checkedList.some((checkedItem) => checkedItem.name === item.name);
        console.log(isChecked)
        const updatedList = isChecked
            ? checkedList.filter((checkedItem) => checkedItem.name !== item.name)
            : [...checkedList, item];
        console.log(updatedList);
        setCheckedList(updatedList);
        onCheckboxChange(updatedList.length);
        onCheckedItemsChange(updatedList);
    };

    const onCheckAllChange = (e) => {
        const isAllChecked = checkedList.length === items.length;
        const newCheckedList = isAllChecked ? [] : items;

        setCheckedList(newCheckedList);
        onCheckboxChange(newCheckedList.length);
        onCheckedItemsChange(newCheckedList);
    }

    return (
        <Content>
            <Divider orientation="left" style={{borderColor: token.borderColor, marginBottom: "-10px"}}><Title>Music Shop</Title></Divider>
            <Row style={{ marginLeft: "30px" }}>
                {items.map((item, index) => (
                    <Col span={4} key={index}>
                        <Card hoverable
                            style={{
                                width: 250, background: token.colorBgLayout,
                                color: token.colorText, marginTop: "20px"
                            }}
                            cover={
                                <img alt={item.name} src={item.src} />
                            }
                            actions={[
                                <Checkbox style={{ marginTop: "5px", color: "#000" }} onChange={() => handleCheckboxChange(item)} checked={checkedList.some((checkedItem) => checkedItem.name === item.name)}>Select</Checkbox>,
                                <Popover content={<QRCode value={item.link} bordered={false} color="black" />}>
                                    <Button type="primary">QR-code</Button>
                                </Popover>
                            ]}
                        >
                            <Meta
                                avatar={<Avatar icon={<CustomerServiceOutlined />} />}
                                title={item.name}
                            />
                        </Card>
                    </Col>
                ))}
            </Row>
            <Divider style={{borderColor: token.borderColor}}/>
            <Button style={{ marginLeft: "30px", marginBottom: "20px" }} type='primary' danger onClick={onCheckAllChange}>{checkedList.length === items.length ? 'Uncheck all' : 'Check all'}</Button>
        </Content>
    );
}

export default CardShow;
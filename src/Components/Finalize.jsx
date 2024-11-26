import React from "react";
import { Layout, List, Button, Divider, Radio, theme, Typography } from "antd";
import { Link } from "react-router-dom";
const { Content } = Layout;
const { Title } = Typography;

const Finalize = ({ itemsSelected, onDelete, onCheckedItemsChange }) => {
    const { token } = theme.useToken();
    const data = Array.from(itemsSelected, (item) => ({
        href: item.link,
        title: item.name,
        source: item.src
    }))

    const deleteItem = (item) => {
        const updatedList = itemsSelected.filter((itemSelected) => itemSelected.name !== item.title);
        onCheckedItemsChange(updatedList);
        onDelete(updatedList.length);
    }

    return (
        <Content style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            <Divider orientation="center" style={{ borderColor: token.borderColor }}><Title>Order</Title></Divider>
            <List
                itemLayout="vertical"
                size="large"
                dataSource={data}
                renderItem={(item) => (
                    <List.Item
                        key={item.title}
                        actions={[
                            <Button type="primary" danger onClick={() => deleteItem(item)}>Delete</Button>
                        ]}
                        extra={
                            <img style={{ width: "150px" }} src={item.source} alt={item.title} />
                        }
                        style={{borderBlockEndColor: token.borderColor}}
                    >
                        <List.Item.Meta
                            title={item.title}
                        />
                    </List.Item>
                )}
                style={{
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: token.borderColor,
                    borderRadius: "5px",
                    width: "80%",
                    height: "100%",
                }}
            />
            <div style={{ width: "100%", textAlign: "center", marginTop: "20px", marginBottom: "20px" }}>
                <Link to="/">
                    <Button type="primary" size="large" onClick={() => onDelete(0)}>
                        Go back
                    </Button>
                </Link>
            </div>
        </Content>
    )
}

export default Finalize;
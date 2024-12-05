import React, {useState, useEffect} from "react";
import { Card, Space } from "antd";

const FileShow = ({ files }) => {
    const [fileContents, setFileContents] = useState([]);

    useEffect(() => {
        const loadFiles = async () => {
            const contents = await Promise.all(
                files.map((file) => {
                    return new Promise((resolve, reject) => {
                        const reader = new FileReader();
                        if (file.type === "image/jpeg" || file.type === "image/png") {
                            reader.onload = (e) => resolve({ name: file.name, type: "image", content: e.target.result });
                            reader.onerror = reject;
                            reader.readAsDataURL(file);
                        } 
                        else {
                            reader.onload = (e) => resolve({ name: file.name, type: "text", content: e.target.result });
                            reader.onerror = reject;
                            reader.readAsText(file);
                        }
                    });
                })
            );
            setFileContents(contents);
        };

        if (files.length > 0) {
            loadFiles();
        } else {
            setFileContents([]);
        }
    }, [files]);

    return (
        <Space direction="vertical" size="large" style={{ width: "40%", marginTop: 16}}>
            {fileContents.map((file, index) => (
                <Card
                    key={index}
                    title={file.name}
                    bordered={true}
                    style={{ width: "100%" }}
                >
                    {file.type === "image" ? (
                        <img src={file.content} alt={`File ${index}`} style={{ width: "100%", height: "auto" }} />
                    ) : (
                        <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>{file.content}</pre>
                    )}
                </Card>
            ))}
        </Space>
    );
}

export default FileShow;
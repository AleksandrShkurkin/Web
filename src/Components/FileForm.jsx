import React, { useState } from "react";
import { InboxOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
const { Dragger } = Upload;

const FileForm = ({ files, onUpload, onDelete }) => {
    const [validFileList, setValidFileList] = useState([]);

    const handleUploadList = (fileListPrep) => {
        const newValidFiles = [];
        fileListPrep.forEach((file) => {
            if (file.type === "image/jpeg" || file.type === "image/png"
                || file.type === "text/plain" || file.type === "application/json") {
                newValidFiles.push(file)
            }
            else {
                message.error(`${file.name} is invalid!`);
            }
        });
        setValidFileList([...validFileList, ...newValidFiles]);
    }

    const handleSubmit = () => {
        if (validFileList.length > 0) {
            onUpload([...files, ...validFileList]);
            setValidFileList([]);
            message.success("Files succesfully uploaded")
        }
        else {
            message.error("No files were selected!");
        }
    }

    const props = {
        beforeUpload: (file, fileListPrep) => {
            if (fileListPrep.length !== 0) {
                handleUploadList(fileListPrep);
            }
            return false;
        },
        multiple: true,
        onRemove: (file) => {
            onDelete(file);
        }
    }

    return (
        <div style={{width:"40%", marginTop: 16}}>
            <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                    Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                    Support for a single or bulk upload. Supports .txt, .png/jpeg and .json files.
                </p>
            </Dragger>
            <Button
                type="primary"
                style={{
                    marginTop: 16,
                    width: "100%"
                }}
                onClick={handleSubmit}
                disabled={validFileList.length === 0}
            >
                Upload
            </Button>
        </div>
    )
}

export default FileForm;
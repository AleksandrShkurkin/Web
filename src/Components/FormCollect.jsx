import React, { useState } from "react";
import { Flex } from "antd";
import FileForm from "./FileForm";
import FileShow from "./FileShow";

const FormCollect = () => {
    const [fileList, setFileList] = useState([])

    const handleFileDelete = (file) => {
        const index = fileList.findIndex(f => f.lastModified === file.lastModified && f.name === file.name && f.type === file.type);
        if (index !== -1) {
            const newFileList = [...fileList];
            newFileList.splice(index, 1);
            setFileList(newFileList);
        }
    }

    return (
        <Flex vertical style={{ width: "100%" }} align="center">
            <FileForm files={fileList} onUpload={setFileList} onDelete={handleFileDelete} />
            <FileShow files={fileList} />
        </Flex>
    )
}

export default FormCollect;
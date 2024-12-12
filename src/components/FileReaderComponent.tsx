import React, { ChangeEvent, memo } from "react";
import FileUploader from "./FileUploader.tsx";
import { FILE_TYPE } from "../constants/vehicle.ts";

interface FileReaderComponentProps {
  handleFileContent: (file: string) => void;
}

function FileReaderComponent({ handleFileContent }: FileReaderComponentProps) {
  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const content = reader.result as string;
        handleFileContent(content);
      };
      reader.readAsText(file);
    }
  };

  return <FileUploader fileType={FILE_TYPE.TXT} onChange={handleFileUpload} />;
}

export default memo(FileReaderComponent);

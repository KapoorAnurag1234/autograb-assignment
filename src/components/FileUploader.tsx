import React, { ChangeEvent } from "react";
import { FILE_TYPE } from "../constants/vehicle.ts";

interface FileUploaderProps {
  fileType: FILE_TYPE;
  id?: string;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
}

export default function FileUploader({
  id,
  fileType,
  onChange,
}: FileUploaderProps) {
  return (
    <div className="flex flex-row">
      <input
        type="file"
        id={id}
        accept={fileType}
        onChange={(e) => onChange(e)}
        className="width-small"
      />
    </div>
  );
}

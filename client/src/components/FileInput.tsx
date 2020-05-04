import * as React from 'react';

export interface FileInputProps extends React.HTMLAttributes<HTMLInputElement> {
  onEncoded(text: string): void;
}

export const FileInput: React.FC<FileInputProps> = ({ onEncoded }) => {
  function encodeUploadedImage(e: React.ChangeEvent<HTMLInputElement>) {
    // The file upload is limited to a single file (for now)
    const file: Blob | null = e.target.files && e.target.files.length ? e.target.files[0] : null;
    if (!file) {
      return;
    }
    const reader = new FileReader();

    reader.addEventListener("load", function () {
      debugger;
      reader.result && onEncoded(reader.result.toString());
    }, false);

    reader.readAsDataURL(file);
  }

  return <input type="file" multiple={false} onChange={encodeUploadedImage} />;
};

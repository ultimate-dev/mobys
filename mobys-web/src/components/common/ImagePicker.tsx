import { Button, Input } from "antd";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

async function onReadImage(files: any, callback: any) {
  await Promise.all(
    files.map((item: any) => {
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        item["src"] = fileReader.result;
        callback(item);
      };
      fileReader.readAsDataURL(item);
    })
  );
}
class SingleProps {
  value: any;
  onChange: (data: any) => void;
}
const Single = ({ value, onChange }: SingleProps) => {
  let [status, setStatus]: any = useState(true);

  let dropzone: any = {
    onDrop: (files: any) =>
      onReadImage(files, (read: any) => {
        onChange(read);
      }),
    onClear: () => {
      onClear();
    },
    multiple: false,
    accept: "image/*",
  };
  let { getRootProps, getInputProps } = useDropzone(dropzone);

  const onClear = () => {
    onChange(null);
  };

  useEffect(() => {
    onClear();
  }, [status]);

  return (
    <div className="border rounded">
      {status ? (
        value ? (
          <>
            <input {...getInputProps()} />
            <label
              {...getRootProps({})}
              className="d-block text-muted w-100 d-flex justify-content-center mb-0"
              style={{ cursor: "pointer" }}
            >
              <img
                src={value.src || value}
                style={{ objectFit: "contain" }}
                className="w-100 p-2"
              />
            </label>
          </>
        ) : (
          <div className="text-center p-3" {...getRootProps({})} style={{ cursor: "pointer" }}>
            <i className="ri-camera-fill"></i>
            <div className="mt-1">Fotoğraf Seç</div>
          </div>
        )
      ) : (
        <Input
          placeholder="https://"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
      <div className="d-flex">
        <Button
          onClick={() => setStatus(!status)}
          className={"btn w-100" + (status ? " btn-secondary" : " btn-primary")}
        >
          <i className="ri-arrow-left-right-fill"></i>
        </Button>
        {value && (
          <Button onClick={onClear} className="btn btn-secondary w-100">
            <i className="ri-close-fill"></i>
          </Button>
        )}
      </div>
    </div>
  );
};

export default { Single };

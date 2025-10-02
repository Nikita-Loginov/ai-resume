import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

import { Icons } from "@/assets/icons";

import { rc } from "@/utils/rc";

import css from "./Dropzone.module.css";

const MAX_FILE_SIZE = 10 * 1024 * 1024;

export const Dropzone = () => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[], fileRejections) => {
    setError(null);

    if (fileRejections.length > 0) {
      const reason = fileRejections[0].errors[0];

      if (reason.code === "file-too-large") {
        setError("Файл слишком большой. Максимум 10 МБ.");
      } else if (reason.code === "file-invalid-type") {
        setError("Неверный формат файла. Только PDF.");
      } else {
        setError("Ошибка при загрузке файла.");
      }
      return;
    }

    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
    }
  }, []);

  const onDelete = () => {
    setFile(null)
    setError('')
  }

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"] },
    maxSize: MAX_FILE_SIZE,
    multiple: false,
    noClick: true,
    noKeyboard: true,
  });

  return (
    <div className={css.box}>
      {!file ? (
        <>
          <div
            {...getRootProps()}
            className={`${css["file-zone"]} ${isDragActive ? css.active : ""}`}
            onClick={open}
          >
            <input {...getInputProps()} />

            <div className={css.icon}>
              <Icons.SupportIcon />
            </div>

            <p className="p1">
              Перетащите PDF-файл сюда или выберите файл
              <br />
              Формат PDF, не более 10 МБ
            </p>
          </div>

          {error && <p className={css.error}>{error}</p>}
        </>
      ) : (
        <div className={css.items}>
          <div className={css.item}>
            <div className={css["block-item"]}>
              <span className={css.fileIcon}>
                <Icons.PdfIcon />
              </span>

              <span className={"p1"}>{file.name}</span>
            </div>

            <div className={css["block-item"]}>
              <span className={"p1"}>
                {(file.size / 1024 / 1024).toFixed(2)} МБ
              </span>

              <button className={rc([css.delete, 'icon'])} onClick={onDelete}>
                <Icons.TrashIcon />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

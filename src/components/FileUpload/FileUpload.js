import React from "react";
import "./FileUpload.css"

function FileUpload() {

    return (
        <>
            <div className="upload-frame is-desktop">
                <img className="file-upload-icon" src="./src/img/file-upload.svg" alt="иконка"/>
                <h4>Перетащите или <span>выберите файл</span></h4>
                <h5>JPG или PNG, не более 30 мб</h5>
            </div>

            <div className="upload-frame-mobile is-mobile">
                <img className="file-upload-icon-mobile" src="./src/img/file-upload_mobile.svg" alt="иконка"/>
                <div>
                    <h4>Загрузить файл</h4>
                    <h5>JPG или PNG, не более 30 мб</h5>
                </div>
            </div>
        </>
    );
}

export default FileUpload;
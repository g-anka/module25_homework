import React, {useState, useEffect, useCallback} from "react";
import "./SelfieUpload.css";
import addSelfie from "../../img/selfie_upload.svg";
import axios from "axios";


function SelfieUpload() {

    const [img, setImg] = useState(null);
    const [avatar, setAvatar] = useState(null);
  //  const [uploaded, setUploaded] = useState(false);



    const handleSelfie = e => {
        console.log("img: ", e.target.files[0]);
        setImg(e.target.files[0]);
    }

// При обновлении значения img будет отправляться запрос на сервер
    useEffect(()=> {
        console.log("img updated: ", img);

        if (img != null) {
            const formData = new FormData();
            formData.append('selfie', img);
            console.log("formData: ", formData.get("selfie"));

            axios.post('http://localhost:8000/api/register/step2', formData)
                .then((res) => {
                    console.log("My server res: ", res)
                    setAvatar(res.data.path);
                    console.log("RES дата:  ", res.data);
                    console.log("RES дата path:  ", res.data.path);

                })
                .catch(error => {
                    console.log("AXIOS ERROR: ", error)
                })
        }
    }, [img])

    return (
        <div className="upload">

            <div className="selfie-upload-icon">
                <form encType="multipart/form-data">
                    <label htmlFor="selfie-upload">
                        <img src={addSelfie} alt="нажмите для загрузки фото"></img>
                    </label>
                    <input type="file"
                           id="selfie-upload"
                           className="selfie-upload-input"
                           accept="image/*"
                           onChange={handleSelfie}/>
                </form>
            </div>

            { avatar && <div className="selfie-uploaded"><img src={avatar} alt = "ваше фото" ></img></div>}

        </div>
    );
}

export default SelfieUpload;
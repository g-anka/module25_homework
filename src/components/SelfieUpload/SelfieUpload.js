import React, {useState, useEffect, useCallback} from "react";
import "./SelfieUpload.css";
import addSelfie from "../../img/selfie_upload.svg"
import axios from "axios";
import selfie from ``;

function SelfieUpload() {

    const [img, setImg] = useState(null);
    const [avatar, setAvatar] = useState(null);
  //  const [uploaded, setUploaded] = useState(false);



    const handleSelfie = e => {
        console.log("IMAGE", e.target.files[0]);
        setImg(e.target.files[0]);
    }

    const sendFile = useCallback(() => {

        const formData = new FormData();
        formData.append('selfie', img);
        console.log("formData: ", formData.get("selfie"));
        console.log("IMAGE-2", img);

         axios.post('http://localhost:8000/api/register/step2', formData)
            .then((res) => {
                console.log("MY RES: ", res)
                setAvatar(res.data.path);
                console.log("RES дата:  ", res.data);
                console.log("RES дата path:  ", res.data.path);

            })
            .catch(error => {
                console.log("AXIOS ERROR: ", error)
            })
    }, [img])


    if (img != null) {
        sendFile();
       console.log("not null");
   } else {
       console.log("it's null")
   }


    return (
        <div className="upload">

            <div className="selfie-upload-icon">
                <form encType="multipart/form-data">
                    <label htmlFor="selfie-upload">
                        <img src={addSelfie} alt="загрузить фото"></img>
                    </label>
                    <input type="file"
                           id="selfie-upload"
                           className="selfie-upload-input"
                           accept="image/*"
                           onChange={handleSelfie}/>
                </form>
            </div>

            <div className="selfie-uploaded"><img src={avatar} alt = "ваше фото" ></img></div>

        </div>
    );
}

export default SelfieUpload;
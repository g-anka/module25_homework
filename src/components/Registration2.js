import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import "../styles/Registration.css"
import Header from "./Header";
import Button from "./Button/Button";
import BackArrow from "./BackArrow";
import ErrorPopup from "./ErrorPopup";
import addSelfie from "../img/selfie_upload.svg";
import axios from "axios";



function Registration2() {

    const [serverError, setServerError] = useState(false); //Для отображения компонента ErrorPopup
    const [errorMessage, setErrorMessage] = useState(""); //Для отображения текста в компоненте ErrorPopup
    const history = useHistory(); //Для перехода на другую станицу

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
                .catch((error, response) => {
                    console.log("AXIOS ERROR: ", error);
                    setErrorMessage(error.response.data.message);
                })
        }
    }, [img])

    return (
        <>
            <ErrorPopup
                className="reg_error"
                text={errorMessage}
                style={{display: serverError ? "flex" : "none" }}/>

            <Header />
            <main className="reg__main">
                <BackArrow />
                <section className="reg__main-heading">
                    <p>Шаг 2 из 3</p>
                    <h1>Загрузите селфи</h1>
                    <h6>Смотрите прямо в камеру, без солнцезащитных очков и головных уборов.</h6>
                </section>

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

                <hr size="1" color="#E5E5E5"/>
                <Button
                    className="reg__main_btn"
                    type="submit"
                    btnName="Продолжить" />
            </main>
        </>
    );
};

export default Registration2;
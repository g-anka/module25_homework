const {Router} = require('express');
const router = Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const Selfie = require('../models/Selfie');
const selfieMiddleware = require("../middleware/selfieUpload")


// /api/register/step1
router.get(
    '/step1', async (req, res) => {
        const data = await User.find();
        res.send(`Here is your users collection: ${data}`)
    })

router.post(
    '/step1', async (req, res) => {
        try {
            console.log("REQ BODY: ", req.body);

            if(!req.body) return res.sendStatus(400);

            const {username, birthDate, email, phone, passport, passportDate, passportWhoGave, passportOfficeNumber, drivingLicence, drivingLicenceDate, password } = req.body;

            //Проверка оригинальности почты
            const candidate = await User.findOne({ email });
            if(candidate) {
                return res.status(400).json({message: "Пользователь с такой почтой уже зарегистрирован" })
            }

            //Хэширование пароля
            const hashedPassword = await bcrypt.hash(password, 12);

            //Запись нового пользователя в БД
            const newUser = new User({ username, birthDate, email, phone, passport, passportDate, passportWhoGave, passportOfficeNumber, drivingLicence, drivingLicenceDate, password: hashedPassword });
            await newUser.save();
            res.send("Your user has been saved!");

        } catch (e) {
            return res.status(500).json({ message: "Не удалось продолжить регистрацию. Попробуйте ещё раз" })
        }
    }
)

// /api/register/step2
router.post(
    '/step2', selfieMiddleware.single('selfie'), async (req, res) => {
        try {
            console.log("REQ FILE: ", req.file);
            if(!req.file) return res.sendStatus(400);

            const {path} = req.file;
            //Запись данных в БД
            const newSelfie = new Selfie({path});
            await newSelfie.save();

           // res.send("User's selfie has been saved!");
            res.json(newSelfie)

        } catch (e) {
            console.log("MY SERVER ERROR: ", e);
            return res.status(500).json({ message: "Не удалось продолжить регистрацию. Попробуйте ещё раз" })
        }
    }
)

module.exports = router
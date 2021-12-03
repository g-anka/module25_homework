const {Router} = require('express');
const router = Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');


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
                return res.status(400).json({message: "Пользователь с такой почтой уже зарегистрирован"})
            }

            //Хэширование пароля
            const hashedPassword = await bcrypt.hash(password, 12);

            //Запись нового пользователя в БД
            const newUser = new User({ username, birthDate, email, phone, passport, passportDate, passportWhoGave, passportOfficeNumber, drivingLicence, drivingLicenceDate, password: hashedPassword });
            await newUser.save();
            res.send("Your user has been saved!");

        } catch (e) {
            res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" })
        }
    }
)

module.exports = router
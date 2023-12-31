const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Домашняя страница',
        isIndex: true
    })
});


router.get('/enter', (req, res) => {
    res.render('enter', {
        title: 'Вход', 
        isEnter: true
    })
});


router.get('/registration', (req, res) => {
    res.render('registration', {
        title: 'Вход', //передача динамических параметров
        isRegistration: true
    })
});



// тут ли нам надо открывать наши КОМНАТЫ
router.get('/allroom', (req, res) => {
    res.render('allroom', {
        title: 'Комнаты', //передача динамических параметров
        isRegistration: true
    })
});





module.exports = router

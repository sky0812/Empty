'use strict';

const carrier = document.querySelector(`#carrier`),
    trans = document.querySelector(`#trans`),
    self = document.querySelector(`#self`),
    cart_text = document.querySelector(`.cart_text`),
    sales_price_last = document.querySelector(`.sales_price_last`),
    sales_name_last = document.querySelector(`.sales_name_last`),
    sum_price = document.querySelector(`.sum_price`),
    self_delivery_wrap = document.querySelector('.self_delivery_wrap');

let innerPrice = '',
    selectSelf = document.querySelector('.select_self'),
    mapAddress = document.querySelector('.map_address');

function prettify(num) {
    var n = num.toString();
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
};

    // радиобоксы доставки
carrier.addEventListener('change', () => {
    if(carrier.checked) {
        sales_name_last.innerHTML = 'Доставка курьерской службой';
        sales_price_last.innerHTML = carrier.value + ` ₽`;
        innerPrice = 18344 + +carrier.value + ` ₽`;
        sum_price.innerHTML = prettify(innerPrice);
        mapBlock();
        cart_text.innerHTML = prettify(innerPrice);
        mapBlock();
    }
});

trans.addEventListener('change', () => {
    if(trans.checked) {
        sales_name_last.innerHTML = 'Доставка транспортной компанией';
        sales_price_last.innerHTML = trans.value + ` ₽`;
        innerPrice = 18344 + +trans.value + ` ₽`;
        sum_price.innerHTML = prettify(innerPrice);
        mapBlock();
        cart_text.innerHTML = prettify(innerPrice);
        mapBlock();
    }
});

self.addEventListener('change', () => {
    if(self.checked) {
        sales_name_last.innerHTML = 'Самовывоз';
        sales_price_last.innerHTML = self.value + ` ₽`;
        innerPrice = 18344 + +self.value + ` ₽`;
        sum_price.innerHTML = prettify(innerPrice);
        mapBlock();
        cart_text.innerHTML = prettify(innerPrice);
        mapBlock();
    }
});

// показ карты
function mapBlock() {
    if(self.checked) {
        self_delivery_wrap.classList.add('d-block');
    } else {
        self_delivery_wrap.classList.remove('d-block');
    }
};

// загрузка карт
ymaps.ready(function () {
    let myMap = new ymaps.Map('map', {
            center: [55.762059, 37.620860],
            zoom: 15,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        }, {
            iconLayout: 'default#image',
            iconImageHref: '../img/mark.png',
            iconImageSize: [36, 44],
            iconImageOffset: [-100, -100]
        });

        myMap.geoObjects
            .add(myPlacemark);

        var myMap1 = new ymaps.Map('map', {
            center: [55.758559, 37.619342],
            zoom: 15,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark1 = new ymaps.Placemark(myMap1.getCenter(), {
        }, {
            iconLayout: 'default#image',
            iconImageHref: '../img/mark.png',
            iconImageSize: [36, 44],
            iconImageOffset: [-100, -100]
        });

        myMap1.geoObjects
            .add(myPlacemark1);

        var myMap2 = new ymaps.Map('map', {
            center: [55.752830, 37.610826],
            zoom: 15,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark2 = new ymaps.Placemark(myMap2.getCenter(), {
        }, {
            iconLayout: 'default#image',
            iconImageHref: '../img/mark.png',
            iconImageSize: [36, 44],
            iconImageOffset: [-100, -100]
        });

        myMap2.geoObjects
            .add(myPlacemark2);  
        

            // определяю карты с адресами
        let map1 = document.querySelectorAll('#map > .ymaps-2-1-78-map')[0],
        map2 = document.querySelectorAll('#map > .ymaps-2-1-78-map')[1],
        map3 = document.querySelectorAll('#map > .ymaps-2-1-78-map')[2];
        map2.style.display = 'none';
        map3.style.display = 'none';


        // смена карт по выбору адресов
        selectSelf.addEventListener('change', () => {
            if(selectSelf.value == 'bridge') {
                map1.style.display = 'block';
                map2.style.display = 'none';
                map3.style.display = 'none';
                mapAddress.innerHTML = `Ул. Кузнецкий мост, 9/10 стр.2, офис 204<br>Ежедневно с 12:00 до 22:00`;
            } else if(selectSelf.value == 'theater') {
                map1.style.display = 'none';
                map2.style.display = 'block';
                map3.style.display = 'none';
                mapAddress.innerHTML = `ст. метро Театральная<br>Ежедневно с 10:00 до 21:00`;
            } else if(selectSelf.value == 'lenin') {                
                map1.style.display = 'none';
                map2.style.display = 'none';
                map3.style.display = 'block';
                mapAddress.innerHTML = `ст. метро Библиотека имени Ленина<br>Ежедневно с 12:00 до 18:00`;
            }
        });


});  

let inputLettersName = document.querySelector('.input_letters_name'),
inputLettersFam = document.querySelector('.input_letters_fam'),
inputMail = document.querySelector('.input_mail'),
inputPhone = document.querySelector('.input_phone'),
contactLabel = document.querySelectorAll('.contact_label')[0],
errorMailLat = contactLabel.querySelector('.error_mail_lat'),
contactLabel1 = document.querySelectorAll('.contact_label')[1],
errorMailLat1 = contactLabel1.querySelector('.error_mail_lat'),
contactLabel2 = document.querySelectorAll('.contact_label')[2],
errorMailLat2 = contactLabel2.querySelector('.error_mail_lat'),
contactLabel3 = document.querySelectorAll('.contact_label')[3],
errorMailLat3 = contactLabel3.querySelector('.error_mail_lat');

inputLettersName.addEventListener('keypress', function() {
    var that = this;

    setTimeout(function() {
        var res = /[^А-яа-я ]/g.exec(that.value);
        that.value = that.value.replace(res, '');
        if(res) {
            errorMailLat.textContent = 'Недопустимые символы. Это поле может содержать только русские символы';
            errorMailLat.classList.add('d-block');
        } else {
            errorMailLat.classList.add('d-none');
        }
    }, 0);
});
inputLettersFam.addEventListener('keypress', function() {
    var that = this;

    setTimeout(function() {
        var res = /[^А-яа-я ]/g.exec(that.value);
        that.value = that.value.replace(res, '');
        if(res) {
            errorMailLat1.textContent = 'Недопустимые символы. Это поле может содержать только русские символы';
            errorMailLat1.classList.add('d-block');
        } else {
            errorMailLat1.classList.add('d-none');
        }
    }, 0);
});
inputMail.addEventListener('keypress', function() {
    var that = this;

    setTimeout(function() {
        var res = /[^a-z ]/g.exec(that.value);
        that.value = that.value.replace(res, '');
        if(res) {
            errorMailLat2.textContent = 'Недопустимые символы. Это поле может содержать только русские символы';
            errorMailLat2.classList.add('d-block');
        } else {
            errorMailLat2.classList.add('d-none');
        }
    }, 0);
});

Inputmask({
  "mask": "999 999 99-99",
  showMaskOnHover: false
}).mask(inputPhone);
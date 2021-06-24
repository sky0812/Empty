const sendForm = () => {
    const errorMessage = 'Что то пошло не так!';
    const loadMessage = 'Загрузка... ';
    const successMessage = 'Спасибо! Мы скоро с Вами свяжемся!';
    const tooShortMessage = 'Должно быть 12 знаков';
    const inputName = document.getElementsByName('fio')[0];
    const inputTel = document.getElementsByName('tel')[0];
    const form = document.getElementsByName('form-callback')[0];
    const callback = document.getElementById('callback');
    const modalOverlay = document.querySelector('.modal-overlay');
    const submitBtn = document.querySelector('.submit_btn');

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem;';

    // inputTel.addEventListener('focusout', () => {
    //     if(inputTel.value.length === 12) {
    //         submitBtn.setAttribute('disabled', false);
    //     } else {
    //         submitBtn.setAttribute('disabled', true);    
    //         alert(tooShortMessage);
    //     }
    // });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
 
        if(inputTel.value.length === 12) {
            
        } else {
            alert(tooShortMessage);
            return
        }  

        form.appendChild(statusMessage);
        statusMessage.style.cssText = 'color: #000000;';

        statusMessage.textContent = loadMessage;
        const formData = new FormData(form);
        let body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });
        postSata(body, () => {
            statusMessage.textContent = successMessage;
        }, (error) => {
            statusMessage.textContent = errorMessage;
        });
        let count = 0;
        const removeMessage = setInterval(() => {
            count++;
            if (count >= 3) {
                statusMessage.textContent = successMessage;
            }
            if (count >= 5) {
                clearInterval(removeMessage);
                statusMessage.textContent = '';
                callback.style.cssText = 'display:none;';
                modalOverlay.style.cssText = 'display:none;';
            }
        }, 1000);
        form.reset();


    });
    const postSata = (body) => {
        return new Promise((resolve, project) => {
            const request = new XMLHttpRequest();
            request.addEventListener('readystatechange', () => {
                if (request.readyState !== 4) {
                    return;
                }
                if (request.status === 200) {
                    resolve(statusMessage.textContent = successMessage);
                } else {
                    project(request.status);
                }
            });
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-Type', 'application/json');
            request.send(JSON.stringify(body));
        })

    }
};

export default sendForm;
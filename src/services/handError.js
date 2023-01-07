export function handError(message){
    document.querySelector('.error').textContent = message
    document.querySelector('.error-panel').style.animation = 'alertAnimation 3s ease'
    setTimeout(() => {
        document.querySelector('.error-panel').style.animation = ''
    }, 3000)
}
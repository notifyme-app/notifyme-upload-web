import './styles/main.scss'

let readKey = async () => {
    const urlPayload = window.location.hash.slice(1);
    console.log("URL payload: " + urlPayload);
};

let ready = (fn) => {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(() => {
    readKey();
})

import '@dmuy/toast/dist/mdtoast.css'
import './styles/main.scss'
import mdtoast from '@dmuy/toast'

let upload = async () => {
    const tracePayload = window.location.hash.slice(1);
    console.log("Trace Payload: " + tracePayload);
    const startTime = document.getElementById('start-time').value;
    const endTime = document.getElementById('end-time').value;
    console.log("Start time: " + startTime  + " End time: " + endTime);
    
    if(!startTime || !endTime) {
        mdtoast("Please fill out both fields", {type: "WARNING"});
        return;
    }

    let formData = new FormData();
    formData.append('ctx', tracePayload);
    formData.append('startTime', new Date(startTime).getTime());
    formData.append('endTime', new Date(endTime).getTime());

    const rawResponse = await fetch(`${POST_URL}`, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
      }).then(function(response) {
        console.log(response.ok);
      });
};

let ready = (fn) => {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(() => {
    document.getElementById('upload-btn').onclick = () => { upload() };
})

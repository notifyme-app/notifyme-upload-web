import './styles/main.scss'

let upload = async () => {
    const tracePayload = window.location.hash.slice(1);
    console.log("Trace Payload: " + tracePayload);
    const startTime = document.getElementById('start-time').value;
    const endTime = document.getElementById('end-time').value;
    console.log("Start time: " + startTime  + " End time: " + endTime);

    const rawResponse = await fetch(`${POST_URL}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ctx: tracePayload, starTime: startTime, endTime: endTime})
      });
    const responseContent = await rawResponse.json();
    console.log(responseContent)
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

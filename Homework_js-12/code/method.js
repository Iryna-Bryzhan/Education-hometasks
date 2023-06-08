function req (url, callback) {
    const r = new XMLHttpRequest();

    r.open("GET", url);
    r.send();
    r.addEventListener("readystatechange", () => {
        if(r.readyState === 4 && r.status >= 200 && r.status < 300){
         callback(JSON.parse(r.response));
        }else if (r.readyState === 4){
            alert("перезавантажте сторінку")
        }
    })
}

export default req
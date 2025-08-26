const errorBtn = document.querySelector("#error");
const infoBtn = document.querySelector("#info");
const warnBtn = document.querySelector("#warn");
const welcomeBtn = document.querySelector("#welcome");
const normalBtn = document.querySelector("#normal");
const container = document.querySelector(".main");

function toaster(config = {}){
    const duration = config.duration ;
    const msgType = config.type.toLowerCase();
    const div = document.createElement("div");
    const msg = document.createElement("p");

    return function(textMsg){
        msg.textContent = textMsg;
        div.append(msg)
        container.appendChild(div);
        setTimeout(()=>{
            div.remove();
        }, duration);

        div.classList.add("text-white");
        if (msgType === "error") {
            div.classList.add("bg-red-500");
        } else if (msgType === "information") {
            div.classList.add("bg-purple-500");
        } else if (msgType === "warning") {
            div.classList.add("bg-orange-500");
        } else if (msgType === "welcome") {
            div.classList.add("bg-green-800");
            div.classList.add("text-black");
            msg.textContent = `${textMsg} 🎉`
        } else if (msgType === "normal") {
            div.classList.add("bg-black");
        }
        div.classList.add("bg-black");
        div.classList.add("p-4");
        div.classList.add("inline-block");
        div.classList.add("rounded-xl");
    }

};

errorBtn.addEventListener("click", function(){
    toaster({
        duration: 5000,
        type: "error"
    })("Something went wrong !")
});

infoBtn.addEventListener("click", function(){
    toaster({
        duration: 5000,
        type: "info"
    })("Message sent successfully to John.")
});

warnBtn.addEventListener("click", function(){
    toaster({
        duration: 5000,
        type: "warning"
    })("Username or Password is Incorrect !")
});

welcomeBtn.addEventListener("click", function(){
    toaster({
        duration: 5000,
        type: "welcome"
    })("Welcome to my palace ")
});

normalBtn.addEventListener("click", function(){
    toaster({
        duration: 5000,
        type: "normal"
    })("Hi, John You are doing great..")
});
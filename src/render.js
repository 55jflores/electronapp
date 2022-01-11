const ipcRenderer = require('electron').ipcRenderer;

const generateWeather = () => {

    ipcRenderer.send(
        "generateWeather",
        document.querySelector(".keyWord").value
    );
};

let i = false;
ipcRenderer.on("receiveWeather", (event,data) => {
  
    if (i){
        document.getElementById("cityid").textContent = data[0]
        document.getElementById("imageid").src = 'http://openweathermap.org/img/wn/' + data[1] + '@2x.png';
        document.getElementById("tempid").textContent = data[2] + String.fromCharCode(176) + 'F'
    }
    else{
        i = true;

        var thecity = document.createElement("h2");
        thecity.id = "cityid";
        thecity.textContent = data[0] 
        document.body.appendChild(thecity);

        var weatherIcon = document.createElement("img");
        weatherIcon.id = "imageid"
        weatherIcon.setAttribute("src", 'http://openweathermap.org/img/wn/' + data[1] + '@2x.png');
        document.body.appendChild(weatherIcon);

        var temp = document.createElement("h2");
        temp.id = "tempid";
        temp.textContent = data[2] + String.fromCharCode(176) + 'F'
        document.body.appendChild(temp);
    }
})



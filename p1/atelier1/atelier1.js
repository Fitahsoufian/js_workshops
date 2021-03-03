function getTime(){

    let startTime = new Date(),
    startS = startTime.getSeconds(),
    startM = startTime.getMinutes(),
    startH = startTime.getHours();

    if (startH < 10)  startH = '0' + startH;
    if (startM < 10)  startM = '0' + startM;
    if (startS < 10)  startS = '0' + startS;

    document.getElementById("time").innerHTML = startH + ":" + startM + ":" + startS;
    document.getElementById("time").style = " color:#17d3fd;display:inline-block;font-size:80px";
    document.getElementById("nightorday").style = "margin-left:25px;color:#17d3fd;display:inline-block;font-size:80px";

    if (startH > 12) { 
            document.getElementById('nightorday').innerHTML = 'PM'; 
        }
        else { 
            document.getElementById('nightorday').innerHTML = 'AM'; 
        };
};
    window.setInterval('getTime()', 1000); 	
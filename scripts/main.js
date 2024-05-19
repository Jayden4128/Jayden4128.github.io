function printMessage()
{
    document.getElementById('helllo').innerHTML = alert("Hello! Have a Great Day!");
   
}
var img = new Image();
img.src = 'Steam_icon_logo.svg.webp';
img.onclick = function()
{
    window.location.href = 'https://steamcommunity.com/profiles/76561198079348284/';
};
document.body.appendChild(img);
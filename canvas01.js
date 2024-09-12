function initiate(){
    var elem = document.getElementById('canvas')
    canvas = elem.getContext('2d')
    
    canvas.strokeRect(100,100,120,120)
    canvas.fillRect(110,110,100,100)
    canvas.clearRect(120,120,70,80)


    canvas.strokeRect(210,210,60,60)
    canvas.fillRect(220,220,40,40)
    canvas.clearRect(230,230,20,10)
}
window.addEventListener("load", initiate, false)
$(".sub").on("click",function(event){
    $(event.target).addClass("click_style");
    setTimeout(function(){
        $(event.target).removeClass("click_style");
    },500);
var atr = $(event.target).attr("class");
atr = atr.slice(4,7);
music(atr);
});
function music(prms){
   var audio =  new Audio("./sounds/"+ prms + ".mp3");
   audio.play();
}
function rdmng()
{
    var randomn = Math.random()*4+1;
    randomn = Math.floor(randomn);
    return randomn;
}
function logic()
{
    var randomn = rdmng();
    if(randomn == 1)
    {
        
    }
}
logic();
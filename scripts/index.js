
var c = 0;
function toggle(){
    var pop = document.getElementById('pop');
    if(c==0)
    {
        pop.classList.add("pop");
        c=1;
    }
    else
    {
        pop.classList.remove("pop");
        c=0;
    }
}

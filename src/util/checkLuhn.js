const checkLuhn=()=>{
    console.log("checking ...");
    var carte=document.getElementById("num_carte");
    var num_carte=carte.value;
    var n=num_carte.length;
    var isDouble=false;
    var total=0;
    for(var i=n-1; i>=0; i--){
        var d=parseInt(num_carte[i]);
        if(isDouble){
            d=2*d;
        }
        total+=Math.floor(d/10);
        total+=(d%10);
        isDouble=!isDouble;
    }
    if(total % 10 === 0 ){
        return true;
    }
    else{
        alert("Entrez un numero de carte valide");
        return false;
    }
}
module.exports={checkLuhn};
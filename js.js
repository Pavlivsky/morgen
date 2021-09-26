send.addEventListener("click",fnc);
function fnc(){
    let val_C = C.value;
    let val_I = I.value;
    let val_G = G.value;
    let val_X = X.value;
let val_ВНП = 0;
        val_ВНП = parseInt(val_C) + parseInt(val_I) + parseInt(val_G) + parseInt(val_X);
        ВНП.value = val_ВНП;
}
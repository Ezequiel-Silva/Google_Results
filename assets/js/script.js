let qs = (valor) => document.querySelector(valor);
function keydownFunction(event, enterobj) {
    if (event.keyCode == 13) {
        event.preventDefault();
        let nameHome = qs("#search");
        let vlrHome = nameHome.value;
        nextPage(vlrHome);
        //qs('#search_rst').value = 'ResultNew';
        //window.location.href = "pages/result.html";  
    }  
}
function nextPage(vlrHome){
    qs('#lupaHome').click();
    console.log(vlrHome);
}




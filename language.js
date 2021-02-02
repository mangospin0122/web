function LanguageChange(){
  let element = document.getElementById("grid");
  let element_korea = document.getElementById("grid_korea");
  if(Language.value ==='韓国語'){
    element.style.display = "none";
    element_korea.style.display = "grid";
    Language.value ='日本語';
  }else{
    element.style.display = "grid";
    element_korea.style.display = "none";
    Language.value ='韓国語';
  }
}

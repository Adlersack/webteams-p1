function confirmDelete_p (event_opl) {
   if ((event_opl.target.tagName.toLowerCase() == 'a'       ) &&
       (event_opl.target.className             == "clDelete")    ) {
      if(confirm("Willst du den Eintrag wirklich löschen?")){
         //prompt(event_opl.target.id);
         window.location.replace("/delete/" + event_opl.target.id);
      }
   }
}
window.onload = function () {
   let body_o = document.getElementsByTagName('body')[0];
   body_o.addEventListener('click', confirmDelete_p, false);
}
function display_AY(evt, ayYear) {
  // // Declare all variables
  var i, tabcontent, tablinks

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("-active", "");
  }

  document.getElementById(ayYear).style.display = "block";
  evt.currentTarget.className += "-active";
  
  // change year label on dropdown
  document.getElementById("year-label").innerHTML = ayYear + ' <i class="arrow"></i>';
}

document.getElementById("defaultOpen").click();

var services= document.getElementById("barcelona");


var firstcontent =`
<div>
  <div class="icon"><i class="bi bi-briefcase"></i></div>
  <h4 class="title"><a href="">Title</a></h4>
  <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
</div>

`

fetch('http://localhost:3000/services')
  .then(response => response.json())
  .then(json => {
    json.forEach(element => {
        var content=firstcontent;
        content=content.replace('Title',element);
         var anth=document.createElement('div')
        anth.innerHTML=content;
    anth.className='col-lg-4 col-md-6 icon-box';

    services.appendChild(anth)
        
    });
})

fetch('http://localhost:3000/anthoo')
  .then(response => response.json())
  .then(json => {
    json.forEach(element => {
var content=firstcontent;
content=content.replace('Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',element);

var mathi=document.createElement('div')
mathi.innerHTML=content;
mathi.className='col-lg-4 col-md-6 icon-box';
services.appendChild(mathi)
});
})



// example.org
// 
// Update the h1 to 'my domain now'
// Then, promt the user for a new h1-text on clicking the header


var h1s = document.getElementsByTagName('h1'); 
var h1 = h1s[0]
h1.textContent = 'my domain now';


/**
returns a 'random' RGB color : '#123abc'
*/
let randomize_color = function(){
  let color = ''

  // create three colors
  for (let i = 0; i < 3; i++){
	  let color_num = Math.floor(Math.random() * 255);
    
    if(color_num < 16)
      color_num += 16;
    
    color += color_num.toString(16);
  }

  // catch edge cases that might generate less than 6 hex-values
  while(color.length < 6){
      color += '5';
  }
  
  return '#' + color;
}


var hand = function(event){
  var clickedElement = event.target;
  clickedElement.textContent = prompt();

  var color = randomize_color();
  clickedElement.style.backgroundColor = color;
  
}
h1.addEventListener('mousedown', hand); 



  

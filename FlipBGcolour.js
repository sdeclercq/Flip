/*Note: 
  How this works:
  1) get colour from the website visitor (Hex or string)
  2) change the background colour of the document
  3) change the background colour of divs in the document (as they can sometimes cover/hide the document background)
*/

javascript: (function () {
  let color = prompt('Give me a background colour? Hex or name will do. May I suggest a colour that goes with your eyes!', 'blue');
  document.body.style.backgroundColor = color;
  let divElements = document.querySelectorAll('div');
  for (elements of divElements) {
	   elements.style.backgroundColor = color;
  }
})();

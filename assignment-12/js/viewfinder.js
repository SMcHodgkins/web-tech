var viewFinderArray = new Array();
class viewFinder {
  constructor(title, image, description, author, year){
    this.title = title;
    this.image = image;
    this.description = description;
    this.author = author;
    this.year = year;
  }

  get theTitle(){
    return this.title;
  }
  get theImage(){
    return this.image;
  }
  get theDescription(){
    return this.description;
  }
  get theAuthor(){
    return this.author;
  }
  get theYear(){
    return this.year;
  }
}
function initializeArray(){
  var vf1 = new viewFinder("In Search of Rubbish: Cheating the System","./images/vf/img1.jpg","This work is a phantasmagoric, ironic kaleidoscopic grid consisting of a seventeenth-century demonological spell book which is reminiscent of narratives of identity, mortality, loss and love. The work deploys illusions with reflective surfaces as turning the mundane into the fantastical.","Salvador Dalí","June 27, 1587");
  var vf2 = new viewFinder("salt, revolutionary, volunteer","./images/vf/img2.jpg","This work is an explicit, representational collected and manipulated images consisting of upended objects and rooms which is reminiscent of San Francisco’s architectural and urban markers.","Rembrandt Harmenszoon van Rijn","July 1, 1694");
  var vf3 = new viewFinder("power","./images/vf/img3.png","This artwork is a combination of futurism and nostalgia. The methods that it draws upon was actually based off the original The Batman in Dick Sprang's 'Tomorrow Begins' project. It was inspired by a book I found from 1967 called A Book of Imaginary Battles and Elements of Fantasy. It is also a inspiration for an early concept piece that I have in mind but do not want to give away just yet.","Albrecht Durer","May 10, 1877");
  var vf4 = new viewFinder("Chronicle of a normal criminal","./images/vf/img4.jpg","Groundbreaking is not the word to use for this piece of art. But what is? DeGuzman, a planetary scientist at the Goddard Space Flight Center in Greenbelt, Maryland, worked with a team of 11 other scientists at the space agency, including several 'well-known experts on both Mars and asteroids.'' NASA scientists discovered the part of the atmosphere and melted the section on April 18th. The piece has been named 'Ganymede,'' after the Greek god of the ocean. It was sculpted using platinum, garnet, and hexagonal gems from Houston. The painting now sits on the roof of NASA's Jet Propulsion Laboratory at nearby the California Institute of Technology. Here are more details: ...","M.C. Escher","July 20, 1998");
  viewFinderArray.push(vf1);
  viewFinderArray.push(vf2);
  viewFinderArray.push(vf3);
  viewFinderArray.push(vf4);
}
function information(){
  //console.log(vf1.theTitle);
  var random = Math.floor(Math.random()*4);
  document.getElementById('title').innerHTML = viewFinderArray[random].theTitle;
  document.getElementById('vfImage').src = viewFinderArray[random].theImage;
  document.getElementById('description').innerHTML = viewFinderArray[random].theDescription;
  document.getElementById('author').innerHTML = "Author: " + viewFinderArray[random].theAuthor;
  document.getElementById('year').innerHTML = "Year: " + viewFinderArray[random].theYear;
  console.log(random);
}

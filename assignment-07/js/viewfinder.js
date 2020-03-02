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
  var vf2 = new viewFinder("After the Relevance","./images/vf/img2.jpg",)
  viewFinderArray.push(vf1);
}
function information(){
  //console.log(vf1.theTitle);
  document.getElementById('title').innerHTML = viewFinderArray[0].theTitle;
  document.getElementById('vfImage').src = viewFinderArray[0].theImage;
  document.getElementById('description').innerHTML = viewFinderArray[0].theDescription;
  document.getElementById('author').innerHTML = "Author: " + viewFinderArray[0].theAuthor;
  document.getElementById('year').innerHTML = "Year: " + viewFinderArray[0].theYear;
}

/*  @TODO - Add references to the elements we want to use  */
let changeButton = document.getElementById("change_button");
let addButton = document.getElementById("add_button");
let deleteButton = document.getElementById("delete_button");
let imageDiv = document.getElementById("image_div");
let firstImage = document.getElementById("first_image");

/*  @TODO - Create an array of Pokemon to select from  */
let pokemonArray = ["pikachu", 'bulbasaur', 'squirtle', 'charmander'];

/*  @TODO - Create a Function for our changeButton to change first Pokemon  */
let counter = 0;

function changeImage(){
   firstImage.src =  "images/" + pokemonArray[counter] +".png";
   counter ++;
   if (counter > 3){
    counter = 0
   }
   
}

changeButton.addEventListener("click", changeImage);

/*  @TODO - Create a Function for our addButton to Add New Pokemon  */

function addImage(){
    let newPokemon = document.createElement("img"); // <img>
    newPokemon.src = "images/squirtle.png"; // <img src="images/squirtle.png"
    imageDiv.appendChild(newPokemon);
}
addButton.addEventListener("click", addImage);


/*   @TODO - Create a Function for our deleteButton to Delete the First Pokemon   */
function removeImage(){
    imageDiv.removeChild(   imageDiv.children[0]   );
}
deleteButton.addEventListener("click", removeImage);

function removeImage() {
    imageDiv.removeChild(imageDiv.firstChild);
    imageDiv.firstChild.id = "first_image"
    firstImage = document.getElementById("first_image")
}
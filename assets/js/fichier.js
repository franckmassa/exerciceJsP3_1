//Affectation de l'image à la fonction mouseover
document.getElementById('image1').addEventListener('mouseover', mouseOver);
//Affectation de l'image à la fonction mouseout
document.getElementById('image1').addEventListener('mouseout', mouseOut);
  //Déclaration de la fonction et affichage de la bordure au passage de la souris
  function mouseOver(){
    document.getElementById('image1').style.border = '3px solid red';
  }
  //Déclaration de la fonction et retour à l'image d'origine
  function mouseOut(){
    document.getElementById('image1').style.border = 0;
  }

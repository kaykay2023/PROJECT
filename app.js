//Display images
const images = [
  {
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/50f95eb5-7c8c-4f06-9ccf-ba936069debf/air-jordan-13-retro-big-kids-shoes-3Bbs9J.png",
    name: "jordan retro",
  },
  {
    image: "https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/852c5323-cf29-435d-919d-2936c4bce051/air-jordan-5-x-dj-khaled-mens-shoes-F3jrrH.png",
    name: "dj khaled",
  },

  {
    image: "https://houseofheat.co/app/uploads/2022/08/air-jordan-13-black-flint-dj5982-060-release-date-1.jpg",
    name: "Black flint",
  },

  {
    image: "https://assets.hermes.com/is/image/hermesproduct/freestyle-sneaker--222920ZH90-worn-1-0-0-800-800_g.jpg",
    name: "freestyle",
  },

  {
    image: "https://assets.hermes.com/is/image/hermesproduct/freestyle-sneaker--222914ZHBK-worn-1-0-0-800-800_g.jpg",
    name: "Hermes",
  },
];



let score = 0;
let round = 1;
let sneakers = ['Hermes',' freestyle',' Black flint','dj khaled','jordan retro'];
let currentImage = sneakers[Math.floor(Math.random() * sneakers.length)];
let sneaker 

const changeImage = ()=>{
let randomIndex = Math.floor(Math.random() * (images.length ));
 sneaker =  images[randomIndex];
let randomImageUrl = sneaker.image;
let newImage = document.createElement('img');
newImage.src = randomImageUrl;
newImage.classList.add('src')
let imageContainer = document.getElementById('imageUrls');
 imageContainer.innerHTML = ''
console.log(newImage)
imageContainer.append(newImage);
}
changeImage()


const Button = document.getElementById('refreshbutton');
refreshButton.addEventListener('click', () => {
  location.reload();
});



let result = document.getElementById('result');
const guess = (name)=>{
 
  if (name===sneaker.name){
    console.log('right')
    score++
    result.innerHTML=score
    changeImage()
  }
     else {
      console.log('wrong');
      // score = false
       result.innerHTML = score;

      }
      if (score ===5) {
        result.innerHTML = 'You win the game!';
      // } else {
      //   result.innerHTML = 'You lose the game!';
}
}










































// GenerateRandomImages();

// function guess(image) {
//   for (let i = 0; i < images.length; i++){
//     image.push
//       let randomIndex = Math.floor(Math.random() * images.length);
    
  
//   }


//   }
// const randomIndex = Math.floor(Math.random() * imageUrls.length);
// const imageUrl = imageUrls[randomIndex];
// const imageTag = `<img src="${imageUrl}" alt="Random image">`;
// document.addEventListener('DOMContentLoaded', function() {
//   document.getElementById("src").innerHTML = imageTag;
// });


  



// const player1ButtonA = document.getElementsByClassName("player1ButtonA");
// const player1ButtonB = document.getElementsByClassName("player1ButtonB");
// const player2ButtonA = document.getElementsByClassName("player2ButtonA");
// const player2ButtonB = document.getElementsByClassName("player2ButtonB");
// const player1ScoreElement = document.getElementsByClassName("player1Score");
// const player2ScoreElement = document.getElementsByClassName("player2Score");
// const currentImageElement = document.getElementsByClassName("currentImage");
// const nextImageButton = document.getElementById("nextImage");
// const winnerDeclarationElement = document.getElementById("winnerDeclaration");


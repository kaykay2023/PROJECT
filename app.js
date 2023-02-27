//Display images
const images = [
  {
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/50f95eb5-7c8c-4f06-9ccf-ba936069debf/air-jordan-13-retro-big-kids-shoes-3Bbs9J.png",
    name: "jordan-retro",
  },
  {
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/852c5323-cf29-435d-919d-2936c4bce051/air-jordan-5-x-dj-khaled-mens-shoes-F3jrrH.png",
    name: "dj-khaled",
  },

  {
    image:
      "https://houseofheat.co/app/uploads/2022/08/air-jordan-13-black-flint-dj5982-060-release-date-1.jpg",
    name: "Black-flint",
  },

  {
    image:
      "https://assets.hermes.com/is/image/hermesproduct/freestyle-sneaker--222920ZH90-worn-1-0-0-800-800_g.jpg",
    name: "freestyle",
  },

  {
    image:
      "https://assets.hermes.com/is/image/hermesproduct/freestyle-sneaker--222914ZHBK-worn-1-0-0-800-800_g.jpg",
    name: "Hermes",
  },
  {
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0b275c8ae41e4dfd9d12af2d000c2e15_9366/Harden_Volume_7_Basketball_Shoes_Silver_HQ3424_01_standard.jpg",
    name: "Harden",
  },
  {
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1350,h_1350/global/195683/01/sv01/fnd/PNA/fmt/png/PUMA-x-BALMAIN-Court-Basketball-Shoes",
    name: "BALMAIN",
  },
  {
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1350,h_1350/global/390514/01/sv01/fnd/PNA/fmt/png/PUMA-x-BLACK-FIVES-TRC-Blaze-Mid-Sneakers",
    name: "BLACK-FIVES",
  },
  {
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1350,h_1350/global/377012/01/sv01/fnd/PNA/fmt/png/Rise-NITRO-Men's-Basketball-Shoes",
    name: "Rise-NITRO",
  },

  {
    image:
      "https://img.stadiumgoods.com/adidas-yeezy-yeezy-700-mnvn-honey-flux_17316131_43050991_2048.jpg",
    name: "yeezy-700",
  },
];

let score = 0;
let wrongScore = 0;
let round = 1;
let sneakers = [
  "Hermes",
  " freestyle",
  " Black-flint",
  "dj-khaled",
  "jordan-retro",
  "Harden",
  "BALMAIN",
  "BLACK-FIVES",
  "Rise-NITRO",
  "yeezy-700",
];
let playerTurn = false;

let currentImage = sneakers[Math.floor(Math.random() * sneakers.length)];
let sneaker;

const changeImage = () => {
  let randomIndex = Math.floor(Math.random() * images.length);
  sneaker = images[randomIndex];
  let randomImageUrl = sneaker.image;
  let newImage = document.createElement("img");
  newImage.src = randomImageUrl;
  newImage.classList.add("src");
  let imageContainer = document.getElementById("imageUrls");
  imageContainer.innerHTML = "";
  console.log(newImage);
  imageContainer.append(newImage);
};
setTimeout(() => {
  changeImage();
}, "0");

const Button = document.getElementById("refreshbutton");
refreshButton.addEventListener("click", () => {
  location.reload();
});

let result = document.getElementById("result");
const guess = (name) => {
  console.log("guess");
  //result
  if (playerTurn === false) {
    if (name === sneaker.name && score < 4) {
      if (wrongScore < 2) {
        console.log("right");
        score++;
        result.innerHTML = `${score} this is the score
      ${wrongScore} this is the score`;
        setTimeout(() => {
          changeImage();
        }, "0");
      }
      //  document.location.reload();
    } else if (name != sneaker.name && score < 4 && wrongScore < 2) {
      console.log("wrong");
      wrongScore++;
      console.log(wrongScore);
      result.innerHTML = `${score} 
     ${wrongScore} YOU LOOSE`;

      // score = false
    } else if (score === 4 && wrongScore < 2) {
      result.innerHTML = "YOU WIN";
      console.log(playerTurn);
      playerTurn = true;
      score = 0;
      wrongScore = 0;
      console.log(playerTurn);
    } else if (score < 4 && wrongScore === 2) {
      console.log(playerTurn);
      playerTurn = true;
      score = 0;
      wrongScore = 0;
      console.log(playerTurn);
      result.classList.add("addimage");
    }
  } else if (playerTurn === true) {
    result.classList.remove("addimage");
    result.innerHTML = "";
    console.log("its player 2 turn");

    if (name === sneaker.name && score < 4) {
      if (wrongScore < 2) {
        console.log("right");
        score++;
        result.innerHTML = `${score} this is the score
       ${wrongScore} this is the score`;
        setTimeout(() => {
          changeImage();
        }, "0");
      }
      //  document.location.reload();
    } else if (name != sneaker.name && score < 4 && wrongScore < 2) {
      console.log("wrong");
      wrongScore++;
      console.log(wrongScore);
      result.innerHTML = `${score} 
      ${wrongScore} YOU LOOSE`;

      // score = false
    } else if (score === 4 && wrongScore < 2) {
      result.innerHTML = "YOU WIN";
      console.log(playerTurn);
      playerTurn = true;
      score = 0;
      wrongScore = 0;
      console.log(playerTurn);
    } else if (score < 4 && wrongScore === 2) {
      console.log(playerTurn);
      playerTurn = true;
      score = 0;
      wrongScore = 0;
      console.log(playerTurn);
      result.classList.add("addimage");
    }
  }
};

//  result.style.backgroundImage = "url('https://t4.ftcdn.net/jpg/03/23/94/95/360_F_323949531_MJO2jRTEXyKGJEk94g0fUaoqG7Atmbmy.jpg')"

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

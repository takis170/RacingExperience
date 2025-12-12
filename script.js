var Porsche = document.getElementById("Porsche");
var iframe = document.getElementById("video");
var button1 = document.getElementById("button1");
const info1 = document.getElementById("info1");
const pic1 = document.getElementById("pic1");
const pic2 = document.getElementById("pic2");
const pic3 = document.getElementById("pic3");
const middle = document.querySelector(".middle");
const Bmw = document.getElementById("Bmw");
const Ferrari2 = document.getElementById("Ferrari2");
const teamContainer = document.querySelector(".teamContainer");
const infoContainer = document.getElementById("infoContainer");
var Ferrari = document.getElementById("Ferrari");

Ferrari.addEventListener("click", function () {
  iframe.src =
    "https://www.youtube.com/embed/zU-fpGcpBtU?autoplay=1&mute=1&start=60";
  document.body.style.background = "#bec3bb";
  infoContainer.style.display = "none";
  teamContainer.style.display = "flex";
  middle.style.height = "50vh";
  iframe.style.height = "50vh";
  FerrariTeams();
  console.log("Hello, world!");
});
Porsche.addEventListener("click", function () {
  iframe.src = "https://www.youtube.com/embed/N2W_0of8nXY?autoplay=1&mute=1";
  document.body.style.background = "#bec3bb";
  infoContainer.style.display = "none";
  teamContainer.style.display = "flex";
  middle.style.height = "50vh";
  iframe.style.height = "50vh";
  PorscheTeams();
});
Bmw.addEventListener("click", function () {
  iframe.src =
    "https://www.youtube.com/embed/PhdgxgMqHeE?autoplay=1&mute=1&start=5";
  document.body.style.background = "#bec3bb";
  infoContainer.style.display = "none";
  teamContainer.style.display = "flex";
  middle.style.height = "50vh";
  iframe.style.height = "50vh";
  BmwTeams();
});
button1.addEventListener("click", () => {
  Ferrari.click();
});
button2.addEventListener("click", () => {
  Porsche.click();
});
button3.addEventListener("click", () => {
  Bmw.click();
});
//Team functions
function BmwTeams() {
  const slot1 = document.getElementById("slot1");
  const slot2 = document.getElementById("slot2");
  slot1.src = "images/2022-ROWE-BMW-M4-GT3-3-removebg-preview.png";
  slot2.src = "images/TeamWrt-removebg-preview.png";
}
function FerrariTeams() {
  const slot1 = document.getElementById("slot1");
  const slot2 = document.getElementById("slot2");
  slot1.src = "images/AFcorsa.png";
  slot2.src = "images/EmilFrey.png";
}
function PorscheTeams() {
  iframe.src =
    "https://www.youtube.com/embed/DaGMj6ekdH0?autoplay=1&mute=1&start=60";
  const slot1 = document.getElementById("slot1");
  const slot2 = document.getElementById("slot2");
  slot1.src = "images/Rexy_Cars-1024x670-removebg-preview.png";
  slot2.src = "images/Lionspeed_PM02-23_1-1000x600-removebg-preview.png";
}
function Reset() {
  infoContainer.style.display = "none";
  teamContainer.style.display = "none";
  iframe.src =
    "https://www.youtube.com/embed/WHXXWVhQp7M?autoplay=1&mute=1&loop=1&playlist=WHXXWVhQp7M";
}

// Brand state
let ferrariClicked = false;
let porscheClicked = false;
let BmwClicked = false;

// BUTTON EVENTS
Ferrari.addEventListener("click", () => {
  ferrariClicked = true;
  porscheClicked = false;
  BmwClicked = false;
  console.log("Ferrari clicked!");
});

Porsche.addEventListener("click", () => {
  porscheClicked = true;
  ferrariClicked = false;
  BmwClicked = false;
  console.log("Porsche clicked!");
});
Bmw.addEventListener("click", () => {
  BmwClicked = true;
  porscheClicked = false;
  ferrariClicked = false;
  console.log("Bmw clicked!");
});

// SLOT 1 CLICK
slot1.addEventListener("click", () => {
  if (ferrariClicked) {
    // Sixty Sevennnnn
    document.body.style.background =
      "radial-gradient(circle, #ff2800 0%, #b30000 40%, #7a0000 80%)";

    infoContainer.style.display = "flex";
    info1.textContent = "Arthur Leclerc";
    info2.textContent = "Eliseo Donno";
    info3.textContent = "Antonio Fuoco";
    pic1.src = "images/ArthurLeclerc.png";
    pic2.src = "images/EllisoDonno.png";
    pic3.src = "images/AtonioFuoco.png";
  } else if (porscheClicked) {
    document.body.style.background =
      "radial-gradient(circle, #39FF14 0%, #00cc00 40%, #004d00 100%)";
    infoContainer.style.display = "flex";
    info1.textContent = "Nick Tandy";
    info2.textContent = "Alessio Picariello";
    info3.textContent = "Harry King";
    pic1.src = "images/NICKTANDY.jpg";
    pic2.src = "images/ALESSIOPICARIELLO.jpg";
    pic3.src = "images/HARRY KING.jpg";
  } else if (BmwClicked) {
    document.body.style.background =
      "linear-gradient(135deg, #1A1A1A 0%, #F7D100 70%)";
    infoContainer.style.display = "flex";
    info1.textContent = "Raffaele Marciello";
    info2.textContent = "Jesse Krohn";
    info3.textContent = "August oFarfus";
    pic1.src = "images/RaffaeleMarciello.png";
    pic2.src = "images/JesseKrohn.png";
    pic3.src = "images/AugustoFarfus.png";
    // Porsche → Slot 1
  } else {
    console.log("Please click a brand first!");
  }
});

// SLOT 2 CLICK
slot2.addEventListener("click", () => {
  if (ferrariClicked) {
    // Ferrari → Slot 2
    document.body.style.background =
      "linear-gradient(135deg, #003B75, #0054A6 50%, #4FA3FF)";
    infoContainer.style.display = "flex";
    info1.textContent = "Konsta Lappalainen";
    info2.textContent = "Thierr Vermeulen";
    info3.textContent = "Chris Lulham";
    pic1.src = "images/KonstaLappalainen.png";
    pic2.src = "images/ThierrVermeulen.png";
    pic3.src = "images/ChrisLulham.png";
  } else if (porscheClicked) {
    // Porsche → Slot 2 (add data if you want)
    document.body.style.background =
      "linear-gradient(135deg, #FFFFFF 0%, #000000 60%, #C30020 100%)";
    console.log("Porsche slot 2 clicked");
    infoContainer.style.display = "flex";
    info1.textContent = "Patrick Kolb";
    info2.textContent = "Riccardo Pera";
    info3.textContent = "Riccardo Feller";
    pic1.src = "images/PatrickKolb.png";
    pic2.src = "images/RiccardoPera.png";
    pic3.src = "images/RicardoFeller.png";
  } else if (BmwClicked) {
    document.body.style.background =
      "radial-gradient(circle, #39FF14 0%, #00cc00 40%, #004d00 100%)";
    infoContainer.style.display = "flex";
    info1.textContent = "Valentino Rossi";
    info2.textContent = "Kelvin van der Linde";
    info3.textContent = "Ahmad Al Harthy";
    pic1.src = "images/Valentino_Rossi.png";
    pic2.src = "images/Kelvin_van_der_Linde.png";
    pic3.src = "images/AhmadAlHarthy.png";
  } else {
    console.log("Please click a brand first!");
  }
});



const frases = [
  "Nosotros",
  "Primera salida",
  "Noviazgo",
  "Convivencia",
  "Primer viaje",
  "Adoptamos a Remy",
  "Propuesta"
];

const fechas = [
  "a través del<br> tiempo",
  "29-03-2022",
  "05-09-2022",
  "23-07-2023",
  "11-11-2023",
  "30-11-2023",
  "04-03-2025"
];

let index = 0;

function updateText() {
  const textTop = document.getElementById("corazon-top");
  const textBottom = document.getElementById("corazon-bottom")
  textTop.textContent = frases[index];
  textBottom.innerHTML = fechas[index];
  index = (index + 1) % frases.length;
}

function calculateTimer() {
    const targetDate = new Date(2026, 10, 7, 20, 15, 0).getTime();

    const now = new Date().getTime();

    // 3. Find the distance between now and the target date
    const distance = targetDate - now;

    // 4. Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // 5. Handle the case where the date has already passed
    if (distance < 0) {
      return "The event has started!";
    }

    console.log("Days span: ", document.getElementById("days-span"));
    document.getElementById("days-span").innerText = days;
    document.getElementById("hours-span").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes-span").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds-span").innerText = seconds.toString().padStart(2, '0');
  }

// Variabel for å lagre inntektene
let revenue = [];

// Funksjon for å betale parkering
function payParking() {

  // Henter verdien fra dropdown-listen
  const numberOfHours = document.getElementById("numberOfHours").value;

  // Beregner prisen basert på valgt antall timer
  const price = numberOfHours * 28;

  // Legger til prisen i inntektslisten
  revenue.push(price);

  // Viser en popup-melding med prisen
  alert(`Du må betale ${price} kr for parkering.`);
}

// Funksjon for å vise inntektene i synkende rekkefølge
function showRevenue() {

  // Henter referansen til inntektslisten
  const revenueList = document.getElementById("revenue-list");

  // Tømmer innholdet i inntektslisten
  revenueList.innerHTML = "";

  // Sorterer inntektene i synkende rekkefølge
  revenue.sort((a, b) => b - a);

  // Går en etter en gjennom inntektene og legger dem til i inntektslisten
  revenue.forEach((amount, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `Inntekt ${index + 1}: ${amount} kr`;
    revenueList.appendChild(listItem);
  });
}

// Funksjon for å avslutte dagen og vise total inntekt
function endDay() {

  // Beregner total inntekt
  const totalRevenue = revenue.reduce((acc, curr) => acc + curr, 0);

  // Viser en popup-melding med total inntekt
  alert(`Total inntekt for dagen er ${totalRevenue} kr.`);
  
  // Tømmer inntektslisten for å starte en ny dag
  revenue = [];
}


function generateQuote() {
    const coverageOptions = {
        africa: ["Medical Coverage up to $100,000", "Emergency Evacuation", "Trip Cancellation Protection"],
        asia: ["Comprehensive Medical Insurance", "Lost Luggage Reimbursement", "24/7 Travel Assistance"],
        europe: ["Schengen Visa Compliant Plan", "Accident & Injury Coverage", "Flight Delay Compensation"],
        "north-america": ["Premium Travel Protection", "COVID-19 Coverage", "Rental Car Insurance"],
        "south-america": ["Adventure Sports Coverage", "Emergency Medical Transport", "Travel Delay Reimbursement"],
        australia: ["Long Stay Travel Insurance", "Extreme Sports Coverage", "Baggage Loss Coverage"]
    };

    let continent = document.getElementById("continent").value;
    let quoteBox = document.getElementById("quote-result");

    let options = coverageOptions[continent] || ["No coverage available for this region."];
    let optionsHtml = options.map(option => `<li>${option}</li>`).join("");

    let formattedContinent = continent.replace("-", " ").replace(/\b\w/g, char => char.toUpperCase());

    quoteBox.innerHTML = `
        <h3>Coverage Options for ${formattedContinent}</h3>
        <ul class="no-bullets">${optionsHtml}</ul>
    `;

    quoteBox.style.display = "block";
    quoteBox.classList.add("fadeIn");
}

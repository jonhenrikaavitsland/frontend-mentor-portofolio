const countriesContainer = document.querySelector(".countries-container");

export function createCountryCard(countries) {
  for (let i = 0; i < countries.length; i++) {
    const element = document.createElement("div");
    element.classList.add("country-container");

    const childFlag = document.createElement("img");
    childFlag.setAttribute("src", `${countries[i].flag}`);
    childFlag.setAttribute("alt", `flag of ${countries[i].name}`);
    childFlag.classList.add("flag");
    element.append(childFlag);

    const childCountry = document.createElement("section");
    childCountry.classList.add("country-card");
    element.append(childCountry);

    const countryName = document.createElement("h2");
    countryName.innerText = `${countries[i].name}`;
    childCountry.append(countryName);

    const conutryInformation = document.createElement("div");
    childCountry.append(conutryInformation);

    const population = document.createElement("p");
    population.innerHTML = `<span>Population:</span> ${countries[i].population
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    conutryInformation.append(population);

    const region = document.createElement("p");
    region.innerHTML = `<span>Region:</span> ${countries[i].region}`;
    conutryInformation.append(region);

    const capital = document.createElement("p");
    capital.innerHTML = `<span>Capital:</span> ${countries[i].capital}`;
    conutryInformation.append(capital);

    countriesContainer.append(element);
  }
}

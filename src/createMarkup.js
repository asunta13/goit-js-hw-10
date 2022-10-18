export function createMarkupOne([
  { name, capital, population, flags, languages },
]) {
  const langValue = languages.values[2].join(', ');
  return `
  <div class="country-wrap">
    <img class="flag" src="${flags.svg}" alt="flag" width="60" height="40"/>
    <h2>${name}</h2></div>
    <ul class="country-info-list">
    <li class="country-info__item">Capital: <span class="info">${capital}</span></li>
    <li class="country-info__item">Population: <span class="info">${population}</span></li>
    <li class="country-info__item">Languages: <span class="info">${langValue}</span></li>
    </ul>`;
}
export function createMarkupList({ name, flags }) {
  return `<li class="country-list__item">
        <img class="flag" src="${flags.svg}" alt="flag" width="60" height="40"/>
        <h2>${name}</h2>
      </li>`;
}

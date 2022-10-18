import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from './refs';
import { createMarkupList, createMarkupOne } from './createMarkup';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;
const debounce = require('lodash.debounce');

refs.input.addEventListener('input', debounce(onFormInput, DEBOUNCE_DELAY));

function onFormInput(event) {
  const country = event.target.value.trim().toLowerCase();
  if (!country) {
    refs.countryList.innerHTML = '';
    refs.countryWrapper.innerHTML = '';
    return;
  }
  fetchCountries(country)
    .then(data => {
      if (data.length === 1) {
        const markupOne = createMarkupOne(data);
        refs.countryWrapper.innerHTML = markupOne;
        refs.countryList.innerHTML = '';
      } else if (data.length >= 2 && data.length <= 10) {
        const markupList = data.map(createMarkupList).join('');
        refs.countryList.innerHTML = markupList;
        refs.countryWrapper.innerHTML = '';
      } else {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      }
    })
    .catch(error => {
      Notify.failure('Oops, there is no country with that name');
    });
}

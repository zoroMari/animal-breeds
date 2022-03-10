function openAnimals(evt, animalName) {

  const tabcontent = document.querySelectorAll('.Tabcontent');
  for (let animal of tabcontent) {
    animal.style.display = 'none';
  }

  const tablinks = document.querySelectorAll('.Tablinks');
  for (let link of tablinks) {
    link.classList.remove('active');
  }

  document.getElementById(animalName).style.display = 'flex';
  evt.currentTarget.classList.add('active');
}

document.getElementById('defaultOpen').click();


const catBreeds = document.querySelectorAll('.Tabcontent-Cats .Breed');


function filterCat() {
  const filterCat = document.forms.filterCat;
  const filterSize = filterCat.elements.size;
  const filterCoat = filterCat.elements.coat;
  const filterEnergy = filterCat.elements.energy;
  const buttonClean = document.querySelector('.Cats-Filter .Clear');

  function handleChangeSelect(event) {
    const label = event.target.closest('label');
    const selectValue = label.querySelector('.Select-Value');

    selectValue.innerHTML = event.target.options[event.target.selectedIndex].text;
  }

  filterSize.addEventListener('change', handleChangeSelect);
  filterCoat.addEventListener('change', handleChangeSelect);
  filterEnergy.addEventListener('change', handleChangeSelect);

  buttonClean.addEventListener('click', function() {
    filterSize.removeEventListener('change', handleChangeSelect);
    filterCoat.removeEventListener('change', handleChangeSelect);
    filterEnergy.removeEventListener('change', handleChangeSelect);
  });
}

filterCat();


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
const globalSizeSelectValue = document.querySelector('.FilterOption-Size .Select-Value');
const globalCoatSelectValue = document.querySelector('.FilterOption-Coat .Select-Value');
const globalEnergySelectValue = document.querySelector('.FilterOption-Energy .Select-Value');

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

  function handleFilterBreeds(event) {
    const selectedOption = event.target.options[event.target.selectedIndex];

    const name = event.target.name;

    for (let breed of catBreeds) {

      if (breed.dataset[name] !== selectedOption.value  
        && selectedOption.value !== 'all') {
          breed.style.display = "none";
        } else {
          breed.style.display = "flex";
        }
    }
  }

  filterSize.addEventListener('change', handleChangeSelect);
  filterSize.addEventListener('change', handleFilterBreeds);

  filterCoat.addEventListener('change', handleChangeSelect);
  filterCoat.addEventListener('change', handleFilterBreeds);

  filterEnergy.addEventListener('change', handleChangeSelect);
  filterEnergy.addEventListener('change', handleFilterBreeds);

  buttonClean.addEventListener('click', function(e) {
    globalSizeSelectValue.innerHTML = 'All sizes';
    globalCoatSelectValue.innerHTML = 'All coat';
    globalEnergySelectValue.innerHTML = 'All energy';

    catBreeds.forEach((item) => {
      item.style.display = 'flex';
    });
  });

}

filterCat();


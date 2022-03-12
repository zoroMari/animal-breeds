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



function filterCat() {
  const catBreeds = document.querySelectorAll('.Tabcontent-Cats .Breed');

  const globalSizeSelect = document.querySelector('#size');
  const globalCoatSelect = document.querySelector('#coat');
  const globalEnergySelect = document.querySelector('#energy');
  
  const globalSizeSelectValue = document.querySelector('.FilterOption-Size .Select-Value');
  const globalCoatSelectValue = document.querySelector('.FilterOption-Coat .Select-Value');
  const globalEnergySelectValue = document.querySelector('.FilterOption-Energy .Select-Value');
  
  const buttonClean = document.querySelector('.Cats-Filter .Clear');

  const background = document.querySelector('.Background');
  
  const state = {
    size: 'all',
    coat: 'all',
    energy: 'all',
  }


  function handleChangeSelect(event) {
    const label = event.target.closest('label');
    const selectValue = label.querySelector('.Select-Value');

    selectValue.innerHTML = event.target.options[event.target.selectedIndex].text;
  }


  function filterState(state) {
    let availableItems = 0;

    catBreeds.forEach((item) => {
      const isSizeFilterCorrect = item.dataset.size === state.size || state.size === 'all';
      const isCoatFilterCorrect = item.dataset.coat === state.coat || state.coat === 'all';
      const isEnergyFilterCorrect = item.dataset.energy === state.energy || state.energy === 'all';

      if (isSizeFilterCorrect && isCoatFilterCorrect && isEnergyFilterCorrect) {
        item.style.display = 'flex';
        availableItems++;
      } else {
        item.style.display = 'none';
      }
    });

    if (!availableItems) {
      document.querySelector('.Message').style.display = 'flex';
    } else {
      document.querySelector('.Message').style.display = 'none';
    }
  }


  function handleSizeFilterChange(event) {
    const selectedOption = event.target.options[event.target.selectedIndex];
    state.size = selectedOption.value;
  
    filterState(state);
    handleChangeSelect(event)
  }


  function handleCoatFilterChange(event) {
    const selectedOption = event.target.options[event.target.selectedIndex];
    state.coat = selectedOption.value;
  
    filterState(state);
    handleChangeSelect(event)
  }


  function handleEnergyFilterChange(event) {
    const selectedOption = event.target.options[event.target.selectedIndex];
    state.energy = selectedOption.value;
  
    filterState(state);
    handleChangeSelect(event)
  }


  globalSizeSelect.addEventListener('change', handleSizeFilterChange);
  globalCoatSelect.addEventListener('change', handleCoatFilterChange);
  globalEnergySelect.addEventListener('change', handleEnergyFilterChange);


  buttonClean.addEventListener('click', function(e) {
    globalSizeSelect.value = 'all';
    globalCoatSelect.value = 'all';
    globalEnergySelect.value = 'all';

    state.size = 'all sizes';
    state.coat = 'all coat';
    state. energy = 'all energy';

    globalSizeSelectValue.innerHTML = 'All sizes';
    globalCoatSelectValue.innerHTML = 'All coat';
    globalEnergySelectValue.innerHTML = 'All energy';

    catBreeds.forEach((item) => {
      item.style.display = 'flex';
    });
  });


  function handlerOpenPopUp(event) {
    target = event.target.closest('.Breed');

    if(!target) return;

    background.style.display = 'block';

  }


  document.querySelector('.Tabcontent-Cats .Breeds').addEventListener('click', handlerOpenPopUp);

}

filterCat();


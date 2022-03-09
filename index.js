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

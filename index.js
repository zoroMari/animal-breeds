const SIZES = {
  all: 'all',
  small: 'small',
  medium: 'medium',
  large: 'large',
};

const COATS = {
  all: 'all',
  short: 'short',
  medium: 'medium',
  large: 'long',
};

const ENERGIES = {
  all: 'all',
  low: 'low',
  medium: 'medium',
  high: 'high',
};

class FilterState {
  constructor({
    size = SIZES.all,
    coat = COATS.all,
    energy = ENERGIES.all,
  } = {}) {
    this.size = size;
    this.coat = coat;
    this.energy = energy;
  }
}

const currentState = new FilterState();

class Animal {
  constructor({
    name,
    id,
    mainImg,
    size,
    coat,
    energy,
    characteristics,
    lifespan,
    colors,
  }) {
    this.name = name;
    this.id = id;
    this.mainImg = mainImg;
    this.size = size;
    this.coat = coat;
    this.energy = energy;
    this.characteristics = characteristics;
    this.lifespan = lifespan;
    this.colors = colors;
  }
}

const cats = [
  new Animal({
    name: 'Bengal',
    id: 'Bengal',
    mainImg: 'img/cats/bengal/bengal_main.jpeg',
    size: SIZES.large,
    coat: 'medium',
    energy: 'high',
    characteristics: `
      Bengal Cats have an athletic appearance with well-defined muscles, 
      creating a lean, balanced appearance. They feature high cheekbones, dark markings around the eyes 
      and the ears are small and pointed but round at the tips. Their coats have a unique, plush feel 
      unlike any other cat breed.`,
    lifespan: '12 to 16 years',
    colors: `
      One of the most distinctive features of this feline is its unique coat pattern and color.
      Most Bengal Cats’ coats have rich, highly contrasted shades of bright orange to light brown, 
      with dark spots or a distinctive marbling pattern. Some even have a “glitter” to the tips of 
      their fur, which glistens when the light hits it.`,
  }),

  new Animal({
    name: 'Main Coon',
    id: 'MainCoon',
    mainImg: 'img/cats/mainCoon/mainCoon_main.jpeg',
    size: 'large',
    coat: 'long',
    energy: 'medium',
    characteristics: `
      The most recognizable characteristics of adult Maine Coon cats are their large size and long, 
      bushy tail. Their paws are big and well-tufted to be suitable for walking in snow, as can be 
      seen in both adult and kitten Maine Coon cats. In addition, their ears are tufted, 
      often with points of hair at the tips.`,
    lifespan: '10 to 13 years',
    colors: `
      The most common color for Maine Coon cats is brown tabby. However, they can be nearly any color 
      and pattern. Their eye colors, too, have a wide range from blue to green to gold, and can 
      include odd-eyes (i.e. two different colored eyes).`,
  }),

  new Animal({
    name: 'Siamese',
    id: 'Siamese',
    mainImg: 'img/cats/siameseCat/siameseCat_main.jpeg',
    size: 'large',
    coat: 'medium',
    energy: 'high',
    characteristics: `
      This highly intelligent feline will seek out things to occupy her mind. So if you don’t want 
      your cat getting into mischief, give her puzzle feeders, games and more to keep her entertained.
      Their point coloring isn’t the only distinguishing feature of Siamese Cats. 
      They also have a distinct, wedge-shaped head with large, triangular ears. 
      The Siamese have a long and slim physique, with longer hind legs and a long, thin tail. 
      Perhaps their most stunning feature is their deep blue eyes, which are almond-shaped and 
      slightly slanted.`,
    lifespan: '11 to 15 years',
    colors: `
      Their distinct coloration makes Siamese Cats easily recognizable. Their point coloring, 
      meaning their ears, feet and tails are darker than their body, can range from brown to chocolate 
      to a blue gray and even lilac. Other point color variations include tabby and other patterns. 
      The body is light in color and usually appears as ivory, cream and even glacial white.`,
  }),

  new Animal({
    name: 'Abyssinian',
    id: 'Abyssinian',
    mainImg: 'img/cats/abyssinian/abyssinian_main.jpeg',
    size: 'small',
    coat: 'medium',
    energy: 'high',
    characteristics: `
      Seemingly always in motion, she’ll slow down occasionally to curl up next to you on the couch 
      or in bed. Although independent, she does best with another Aby companion to match her 
      high activity levels while you’re away. Abyssinians love attention from you and respectful 
      children and get along well with cat-friendly dogs, as well as other pets, like large 
      parrots and ferrets.
      The Abyssinian has a wedge-shaped, yet rounded head with broad ears and almond-shaped 
      eyes in shades of gold or green. Her body is muscular and athletic, but slim, and supported 
      by fine-boned legs.`,
    lifespan: '9 to 15 years',
    colors: `
      Abyssinians have what is known as a “ticked” coat, which alternates light and dark bands of 
      color on each hair shaft. The warmth glow of their coat resembles wild cats like cougars. 
      The coat comes in four primary colors: ruddy brown, red, blue and fawn. 
      Some associations permit additional colors, however.`,
  }),

  new Animal({
    name: 'British Shorthair',
    id: 'BritishShorthair',
    mainImg: 'img/cats/britishShorthair/britishShorthair_main.jpeg',
    size: 'large',
    coat: 'short',
    energy: 'low',
    characteristics: `
      British Shorthairs are round all over, with a broad chest and strong legs. 
      Their coats are short, thick and plush. Eye color depends on coat color, but you can expect 
      British Blues to have gold eyes and those with point coloring to have blue eyes. 
      Other eye colors range from golden to copper.`,
    lifespan: '12 to 17 years',
    colors: `
      Although their coats come in almost every possible color and pattern, the most popular color 
      is blue (gray). These cats are sometimes referred to as British Blues.`,
  }),

  new Animal({
    name: 'Sphynx',
    id: 'Sphynx',
    mainImg: 'img/cats/sphynx/sphynx_main.jpg',
    size: 'small',
    coat: 'short',
    energy: 'high',
    characteristics: `
      The most striking characteristic of the Sphynx is of course her hairlessness, 
      which exposes her warm, chamois like skin for the world to see, touch and enjoy. 
      Her wrinkled skin, exaggerated ears and large eyes give her face an otherworldly expression and wisdom.`,
    lifespan: '8 to 15 years',
    colors: `
      Sphynx colors include white, black, blue, red, cream, chocolate, lavender, cinnamon and fawn, 
      plus various patterns and shadings.`,
  }),

  new Animal({
    name: 'American Shorthair',
    id: 'AmericanShorthair',
    mainImg: 'img/cats/americanShorthair/americanShorthair_main.png',
    size: 'large',
    coat: 'short',
    energy: 'medium',
    characteristics: `
      As a working cat, American Shorthairs have a stocky, muscular build. Their muscular legs 
      lend themselves to the American’s agility and endurance. They have a large head and full face, 
      medium-sized ears and large, wide eyes.`,
    lifespan: '15 to 20 years',
    colors: `
      White, black, blue, red, cream and silver, plus various patterns and shadings`,
  }),

  new Animal({
    name: 'Cornish Rex',
    id: 'CornishRex',
    mainImg: 'img/cats/cornishRex/cornishRex_main.jpeg',
    size: 'small',
    coat: 'short',
    energy: 'high',
    characteristics: `
      Bat-eared, big-eyed and wavy-coated, the Cornish Rex has a distinctive look and exceptionally 
      silky coat due to not having guard hairs like other breeds. This active cat has a small, 
      whippetlike body and loves to climb, leap and sprint. With kittenlike antics that last a lifetime, 
      this feline likes to be where the action is. The Cornish Rex is perfect for those who want a cat 
      to participate in their family life.`,
    lifespan: '8 to 15 years',
    colors: `
      White, black, blue, red, cream, chocolate, lavender, silver, smoke and tabby, plus various 
      patterns and shadings`,
  }),
]

const dogs = [
  new Animal({
    name: 'Husky_large',
    id: 'Husky',
    mainImg: 'img/cats/bengal/bengal_main.jpeg',
    size: 'large',
    coat: 'medium',
    energy: 'high',
    characteristics: `
      Bengal Cats have an athletic appearance with well-defined muscles, 
      creating a lean, balanced appearance. They feature high cheekbones, dark markings around the eyes 
      and the ears are small and pointed but round at the tips. Their coats have a unique, plush feel 
      unlike any other cat breed.`,
    lifespan: '12 to 16 years',
    colors: `
      One of the most distinctive features of this feline is its unique coat pattern and color.
      Most Bengal Cats’ coats have rich, highly contrasted shades of bright orange to light brown, 
      with dark spots or a distinctive marbling pattern. Some even have a “glitter” to the tips of 
      their fur, which glistens when the light hits it.`,
  }),

  new Animal({
    name: 'Husky_small',
    id: 'Husky',
    mainImg: 'img/cats/bengal/bengal_main.jpeg',
    size: 'small',
    coat: 'medium',
    energy: 'high',
    characteristics: `
      Bengal Cats have an athletic appearance with well-defined muscles, 
      creating a lean, balanced appearance. They feature high cheekbones, dark markings around the eyes 
      and the ears are small and pointed but round at the tips. Their coats have a unique, plush feel 
      unlike any other cat breed.`,
    lifespan: '12 to 16 years',
    colors: `
      One of the most distinctive features of this feline is its unique coat pattern and color.
      Most Bengal Cats’ coats have rich, highly contrasted shades of bright orange to light brown, 
      with dark spots or a distinctive marbling pattern. Some even have a “glitter” to the tips of 
      their fur, which glistens when the light hits it.`,
  }),
]

const rootCatBreeds = document.querySelector('.Cats .Breeds');
const rootDogBreeds = document.querySelector('.Dogs .Breeds');
const rootRatBreeds = document.querySelector('.Rats .Breeds');

const rootFilterCats = document.querySelector('.Cats form');
const rootFilterDogs = document.querySelector('.Dogs form');
const rootFilterRats = document.querySelector('.Rats form');


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


function capitalize(string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
}


function createAnimalTemplate(animal) {
  return `
    <div class="Breed ${animal.id}" id="${animal.id}" data-size="${animal.size}" 
      data-coat="${animal.coat}" data-energy="${animal.energy}">
      <div class="Breed-Img"></div>
      <div class="Breed-Info">
        <p class="Breed-Name">${animal.name}</p>
        <button>
          <p>Learn more</p>
          <img src="img/icons/learnMore.svg">
        </button>
      </div>
    </div>
  `;
}


function insertAnimalCards(animalsList, root) {
  const template = animalsList.reduce((acc, curr) => {
    return `${acc}${createAnimalTemplate(curr)}`;
  }, '');

  root.innerHTML = template;
}


function createOptionTemplate(option) {
  return `
    <option value="${option.value}">${option.name}</option>
  `;
}


function createFilterTemplate(filterElem) {
  const options = filterElem.options.reduce((acc, curr) => {
    return `${acc}${createOptionTemplate(curr)}`
  }, '');

  return `
    <label class="FilterOption FilterOption-${capitalize(filterElem.title)}">
      <p class="Label">${filterElem.title}</p>

      <div class="Select">
        <p class="Select-Value">All ${filterElem.title}</p>
        <img src="img/icons/arrow_open.svg">
      </div>

      <select name="${filterElem.title}" id="${filterElem.title}" onchange="handleOnChange(event)">
        ${options}
      </select>
    </label>
  `;
}


function createFiltersOptions(animalsInfo, keys) {
  if (!animalsInfo || !keys) throw new Error('Please, provide both: input list and necessary keys');

  const filtersMap = keys.reduce((acc, curr) => ({
    ...acc,
    [curr]: { title: curr, options: [{ value: 'all', name: `All ${curr}` }] },
  }), { });

  animalsInfo.forEach((item) => {
    keys.forEach((key) => {
      if (!item[key]) return;

      const isOptionInList = filtersMap[key].options.find((option) => option.value === item[key]);
      if (isOptionInList) return;

      filtersMap[key].options.push({ value: item[key], name: capitalize(item[key]) });
    })

  });

  return Object.values(filtersMap).filter((item) => item.options.length > 1);
}


function insertFilterTemplate(filterElems, root) {
  const template = filterElems.reduce((acc, curr) => {
    return `${acc}${createFilterTemplate(curr)}`;
  }, '');

  root.innerHTML = `
    ${template}
    ${root.innerHTML}
  `;
}


function insertFilter(animalsInfo, keys, root) {
  const filterOptions = createFiltersOptions(animalsInfo, keys);

  insertFilterTemplate(filterOptions, root);
}


function handleChangeLableValue(event) {
    const label = event.target.closest('label');
    const selectValue = label.querySelector('.Select-Value');

    selectValue.innerHTML = event.target.options[event.target.selectedIndex].text;
}


function filterState(state, animal) {
  let availableItems = 0;

  const animalFiltered = [];

  animal.forEach((item) => {
    const isSizeFilterCorrect = item.size === currentState.size || currentState.size === SIZES.all;
    const isCoatFilterCorrect = item.coat === currentState.coat || currentState.coat === COATS.all;
    const isEnergyFilterCorrect = item.energy === currentState.energy || currentState.energy === ENERGIES.all;

    if (isSizeFilterCorrect && isCoatFilterCorrect && isEnergyFilterCorrect) {
      animalFiltered.push(item);
      availableItems++;
    } 
  });

  console.log('animal >>>', animal);

  insertAnimalCards(animalFiltered, rootCatBreeds);

  // let animalType = animal.parentNode;
  // console.log('animalType >>>', animalType);


  // if (animalType === 'cats') {
  //   insertAnimalCards(animalFiltered, rootCatBreeds);
  // } else if (animalType === 'dogs') {
  //   insertAnimalCards(animalFiltered, rootDogBreeds);
  // } else {
  //   insertAnimalCards(animalFiltered, rootRatBreeds);
  // }
  
  if (!availableItems) {
    document.querySelector('.Message').style.display = 'flex';
  } else {
    document.querySelector('.Message').style.display = 'none';
  }
}


function handleOnChange(event) {
  const selectedOption = event.target.options[event.target.selectedIndex];

  const stateName = selectedOption.closest('select').id;
  const animalCurr = (selectedOption.closest('.Tabcontent').id).toLowerCase();

  console.log('animalCurr >>>', animalCurr);

  currentState[stateName] = selectedOption.value;

  filterState(currentState, cats);
  handleChangeLableValue(event);
}


function clearFilter(event) {
  const globalSizeSelect = document.querySelector('#size');
  const globalCoatSelect = document.querySelector('#coat');
  const globalEnergySelect = document.querySelector('#energy');
  
  const globalSizeSelectValue = document.querySelector('.FilterOption-Size .Select-Value');
  const globalCoatSelectValue = document.querySelector('.FilterOption-Coat .Select-Value');
  const globalEnergySelectValue = document.querySelector('.FilterOption-Energy .Select-Value');

  globalSizeSelect.value = 'all';
  globalCoatSelect.value = 'all';
  globalEnergySelect.value = 'all';

  globalSizeSelectValue.innerHTML = 'All sizes';
  globalCoatSelectValue.innerHTML = 'All coat';
  globalEnergySelectValue.innerHTML = 'All energy';

  currentState.size = 'all';
  currentState.coat = 'all';
  currentState.energy = 'all';

  insertAnimalCards(cats, rootCatBreeds);
  document.querySelector('.Message').style.display = 'none';
}



insertAnimalCards(cats, rootCatBreeds);
insertAnimalCards(dogs, rootDogBreeds);
// insertAnimalCards(rats, rootRatBreeds);


insertFilter(cats, ['size', 'coat', 'energy'], rootFilterCats);
insertFilter(dogs, ['size', 'coat', 'energy'], rootFilterDogs);
// insertFilter(rats, rootFilterRats);

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
  long: 'long',
};

const ENERGIES = {
  all: 'all',
  low: 'low',
  medium: 'medium',
  high: 'high',
};

const ANIMAL_TYPES = {
  cats: 'cats',
  dogs: 'dogs',
  rats: 'rats',
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

  set(key, value) {
    this[key] = value;
  }

  reset() {
    this.size = SIZES.all;
    this.coat = COATS.all;
    this.energy = ENERGIES.all;
  }
}

class Animal {
  constructor({
    type,
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
    this.type = type;
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
    type: 'cat',
    name: 'Bengal',
    id: 'Bengal',
    mainImg: 'img/cats/bengal/bengal_main.png',
    size: SIZES.large,
    coat: COATS.medium,
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
    type: 'cat',
    name: 'Main Coon',
    id: 'MainCoon',
    mainImg: 'img/cats/mainCoon/mainCoon_main.png',
    size: SIZES.large,
    coat: COATS.long,
    energy: ENERGIES.medium,
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
    type: 'cat',
    name: 'Siamese',
    id: 'Siamese',
    mainImg: 'img/cats/siameseCat/siameseCat_main.png',
    size: SIZES.large,
    coat: COATS.medium,
    energy: ENERGIES.high,
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
    type: 'cat',
    name: 'Abyssinian',
    id: 'Abyssinian',
    mainImg: 'img/cats/abyssinian/abyssinian_main.png',
    size: SIZES.small,
    coat: COATS.medium,
    energy: ENERGIES.high,
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
    type: 'cat',
    name: 'British Shorthair',
    id: 'BritishShorthair',
    mainImg: 'img/cats/britishShorthair/britishShorthair_main.png',
    size: SIZES.large,
    coat: COATS.short,
    energy: ENERGIES.low,
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
    type: 'cat',
    name: 'Sphynx',
    id: 'Sphynx',
    mainImg: 'img/cats/sphynx/sphynx_main.png',
    size: SIZES.small,
    coat: COATS.short,
    energy: ENERGIES.high,
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
    type: 'cat',
    name: 'American Shorthair',
    id: 'AmericanShorthair',
    mainImg: 'img/cats/americanShorthair/americanShorthair_main.png',
    size: SIZES.large,
    coat: COATS.short,
    energy: ENERGIES.medium,
    characteristics: `
      As a working cat, American Shorthairs have a stocky, muscular build. Their muscular legs 
      lend themselves to the American’s agility and endurance. They have a large head and full face, 
      medium-sized ears and large, wide eyes.`,
    lifespan: '15 to 20 years',
    colors: `
      White, black, blue, red, cream and silver, plus various patterns and shadings`,
  }),

  new Animal({
    type: 'cat',
    name: 'Cornish Rex',
    id: 'CornishRex',
    mainImg: 'img/cats/cornishRex/cornishRex_main.png',
    size: SIZES.small,
    coat: COATS.short,
    energy: ENERGIES.high,
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
    type: 'dog',
    name: 'Husky',
    id: 'Husky',
    mainImg: 'img/dogs/husky/husky_main.png',
    size: SIZES.large,
    coat: COATS.medium,
    energy: ENERGIES.medium,
    characteristics: `
      Huskies are excellent with children and usually friendly to everyone, 
      making them fantastic family dogs. However, this love of people means 
      they are not natural guard dogs.`,
    lifespan: '12 to 15 years',
    colors: `
      The breed standard permits any color, though the dog can be black, silver, or a variety of tans. 
      These are generally shaded and mixed with white markings, leading to varied wolfish markings 
      on the head and muzzle.`,
  }),

  new Animal({
    type: 'dog',
    name: 'Pug',
    id: 'Pug',
    mainImg: 'img/dogs/mops/mops_main.png',
    size: SIZES.small,
    coat: COATS.short,
    energy: ENERGIES.low,
    characteristics: `
      Pugs are even-tempered, outgoing, loving, and affectionate—all of which make them popular 
      with families. The breed is known for being both calm and playful. 
      Pugs are happy to romp with children and other pets or curl up on the couch for a nap.`,
    lifespan: '12 to 15 years',
    colors: `
      The breed comes in two colors — fawn (light brown) and black. 
      Clearly defined markings include a black mask and back trace (a line extending from 
      the back of the skull to the tail).`,
  }),
  new Animal({
    type: 'dog',
    name: 'Corgi',
    id: 'Corgi',
    mainImg: 'img/dogs/corgi/corgi_main.png',
    size: SIZES.small,
    coat: COATS.short,
    energy: ENERGIES.medium,
    characteristics: `
      Corgis are active, affectionate dogs. Despite having short legs, these canines are quick and agile. 
      Corgis adore their families and are generally great with other pets and children. 
      They're adaptable—comfortable living in an apartment or on a ranch.`,
    lifespan: '12 to 15 years',
    colors: `
      Corgis come in all shades of red, sable, and brindle—as well as black with or without tan or 
      brindle points—and blue merle, defined as black and gray, marbled. White on the neck, chest, 
      legs, muzzle, underparts, tip of tail, and head (as a blaze) is possible. 
      But white should never be the predominant color.`,
  }),
  new Animal({
    type: 'dog',
    name: 'Jagdterrier',
    id: 'Jagdterrier',
    mainImg: 'img/dogs/jagdterrier/jagdterrier_main.png',
    size: SIZES.medium,
    coat: COATS.short,
    energy: ENERGIES.high,
    characteristics: `
      The Jagdterrier is courageous, enduring, vital, full of temperament, reliable, 
      sociable and trainable. He always takes pleasure in his work. 
      The Jagdterrier is a versatile hunting dog from Germany. 
      In German, literally means "hunt terrier." `,
    lifespan: '12 to 16 years',
    colors: `
      His coat is usually black and tan, but can be dark brown or grayish-black as well.`,
  }),
  new Animal({
    type: 'dog',
    name: 'Labrador Retrievers',
    id: 'Labrador',
    mainImg: 'img/dogs/labrador/labrador_main.png',
    size: SIZES.large,
    coat: COATS.short,
    energy: ENERGIES.low,
    characteristics: `
      The Labrador Retriever is one of the best breeds for families and can be an excellent breed for 
      even an inexperienced dog owner. Known for their happy-go-lucky, easy-going personalities, 
      these dogs are always up for adventure. They like to be included in all aspects of family life.`,
    lifespan: '10 to 12 years',
    colors: `
      Labrador Retrievers come in solid black, chocolate, or yellow. 
      The yellow varies from a pale cream to a rich red fox color. 
      Some Labradors also have white chest blazes.`,
  }),
  new Animal({
    type: 'dog',
    name: 'Toyterrier',
    id: 'Toyterrier',
    mainImg: 'img/dogs/toyterrier/toyterrier_main.png',
    size: SIZES.small,
    coat: COATS.short,
    energy: ENERGIES.high,
    characteristics: `
      Intelligent, affectionate, and outgoing, Toyterrier is a people-oriented breed that forms close 
      family bonds. These easy-going dogs interact well with both children and elderly people. 
      (Of course, all dogs should be supervised around kids to ensure safety.)`,
    lifespan: '12 to 14 years',
    colors: `
      Toy's coat can be short (smooth, close-lying, and shiny) or long (soft, and wavy to curly). 
      It may be black and tan, chocolate and tan, blue and tan, red, red sable, or red-brown. 
      Small white markings and brindle are also possible, but the latter is disqualified by 
      the breed standard.`,
  }),
  new Animal({
    type: 'dog',
    name: 'Spitz',
    id: 'Spitz',
    mainImg: 'img/dogs/spitz/spitz_main.png',
    size: SIZES.small,
    coat: COATS.long,
    energy: ENERGIES.high,
    characteristics: `
      Spitz is an attentive, intelligent, and upbeat breed that makes an excellent companion. 
      These adorable little bundles of energy have a spring in their steps and the stamina to keep up 
      with their people—until it's time to curl up for a nap.`,
    lifespan: '13 to 15 years',
    colors: `
      Their coats come in five primary colors: white, black, brown, orange, and grey-shaded. 
      Other less common colors include cream, cream-sable, orange-sable, black, and tan. `,
  }),
]

const rats = [
  new Animal({
    type: 'rat',
    name: 'Standart',
    id: 'Standart',
    mainImg: 'img/rats/standart_main.png',
    size: SIZES.small,
    coat: COATS.short,
    energy: ENERGIES.high,
    characteristics: `
      A standard rat has a short coat with a smooth appearance and ears that sit on top of their head. 
      Male standard rats have longer hair than females that may feel rougher to the touch and 
      can be greasy.`,
    lifespan: '2 to 3 years',
    colors: `
      Rats come in many different coat colors. 
      There are 40 distinct colors, including beige, champagne, chocolate, platinum, black-eyed white, 
      pink-eyed white, silver black, silver lilac, hooded, Dalmatian, and many more.`,
  }),
  new Animal({
    type: 'rat',
    name: 'Dumbo',
    id: 'Dumbo',
    mainImg: 'img/rats/dumbo_main.png',
    size: SIZES.small,
    coat: COATS.short,
    energy: ENERGIES.high,
    characteristics: `
      This rat variety gets their name from the Disney cartoon elephant Dumbo. 
      They have large, round ears that are set lower on the head than standard, "top" ears.`,
    lifespan: '2 to 3 years',
    colors: `
      There are two primary color types found in dumbo rats: agouti and black. 
      Agouti means they have three different tones on each individual hair, 
      which often combines to give them a gray or brownish coloring. 
      However, agouti dumbos can also be found in cinnamon and fawn.`,
  }),
  new Animal({
    type: 'rat',
    name: 'Sphynx',
    id: 'Sphynx',
    mainImg: 'img/rats/sphynx_main.png',
    size: SIZES.small,
    coat: COATS.short,
    energy: ENERGIES.high,
    characteristics: `
      Hairless rats have been bred to be completely bald, although they often have some short curly fur 
      around their whiskers, which are small and curly.`, 
    lifespan: '1 to 3 years',
    colors: `
      The color of their skin will depend on the genes they have for fur color and markings. 
      Pale colored hairless rats will be pink, while those with dark coloring will have black 
      or grey areas of skin.`,
  }),
  new Animal({
    type: 'rat',
    name: 'Rex',
    id: 'Rex',
    mainImg: 'img/rats/rex_main.png',
    size: SIZES.small,
    coat: COATS.short,
    energy: ENERGIES.high,
    characteristics: `
      The rex rat has curly fur, somewhat like a Cornish Rex cat. 
      They also have whiskers that look crumpled and wrinkled. 
      A "double rex" rat has even curlier fur in smaller quantities, 
      giving these rats a hairless appearance if viewed from far away.`,
    lifespan: '2 to 3 years',
    colors: `
      Albino, blue, black, cream, platinum, buff, silver, sable, Siamese, fawn, gray`,
  }),
]

const rootCatBreeds = document.querySelector('.Cats .Breeds');
const rootDogBreeds = document.querySelector('.Dogs .Breeds');
const rootRatBreeds = document.querySelector('.Rats .Breeds');

const rootFilterCats = document.querySelector('.Cats form .Filter-Controls');
const rootFilterDogs = document.querySelector('.Dogs form .Filter-Controls');

const popupRoot = document.querySelector('.Popup');


const animalsMapping = {
  cats: {
    list: cats,
    state: new FilterState(),
    filterKeys: Object.keys(new FilterState()),
    breedsRoot: rootCatBreeds,
    filtersRoot: rootFilterCats,
  },
  dogs: {
    list: dogs,
    state: new FilterState(),
    filterKeys: Object.keys(new FilterState()),
    breedsRoot: rootDogBreeds,
    filtersRoot: rootFilterDogs,
  },
  rats: {
    list: rats,
    state: new FilterState(),
    breedsRoot: rootRatBreeds,
  },
};


function openAnimals(evt, animalType) {

  const tabcontent = document.querySelectorAll('.Tabcontent');
  for (let animal of tabcontent) {
    animal.style.display = 'none';
  }

  const tablinks = document.querySelectorAll('.Tablinks');
  for (let link of tablinks) {
    link.classList.remove('active');
  }

  document.getElementById(animalType).style.display = 'flex';
  evt.currentTarget.classList.add('active');
  toggleEmptyMessage(true);
  clearFilter(animalType);
}

document.getElementById('defaultOpen').click();


function capitalize(string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
}


function createAnimalTemplate(animal) {
  return `
    <div class="Breed ${animal.id}" id="${animal.id}" data-size="${animal.size}" 
      data-coat="${animal.coat}" data-energy="${animal.energy}">
      <img class="Breed-Img" src="${animal.mainImg}"/>
      <div class="Breed-Info">
        <p class="Breed-Name">${animal.name}</p>
        <button onclick="handleOpenPopup(event, '${animal.id}', popupRoot)">
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


function createFilterTemplate(filterElem, animalType) {
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

      <select name="${filterElem.title}" id="${filterElem.title}" 
        onchange="handleOnChange(event, '${filterElem.title}', '${animalType}')">
        ${options}
      </select>
    </label>
  `;
}


// function createFiltersOptions_old(animalsInfo, keys) {
//   if (!animalsInfo || !keys) throw new Error('Please, provide both: input list and necessary keys');

//   const filtersMap = keys.reduce((acc, curr) => ({
//     ...acc,
//     [curr]: { title: curr, options: [{ value: 'all', name: `All ${curr}` }] },
//   }), { });

//   animalsInfo.forEach((item) => {
//     keys.forEach((key) => {
//       if (!item[key]) return;

//       const isOptionInList = filtersMap[key].options.find((option) => option.value === item[key]);
//       if (isOptionInList) return;

//       filtersMap[key].options.push({ value: item[key], name: capitalize(item[key]) });
//     })

//   });

//   return Object.values(filtersMap).filter((item) => item.options.length > 1);
// }


function createFilterOptions(title, availableOptionsMap) {
  const options = Object.keys(availableOptionsMap).map((key) => {
    const name = key === 'all' 
      ? `${capitalize(availableOptionsMap[key])} ${title}` 
      : capitalize(availableOptionsMap[key]);
    return {
      name,
      value: availableOptionsMap[key],
    };
  });

  return { title, options };
}


function createFiltersOptionsArray() {
  return [
    createFilterOptions('size', SIZES),
    createFilterOptions('coat', COATS),
    createFilterOptions('energy', ENERGIES),
  ]
}


function insertFilterTemplate(filterElems, root, animalType) {
  if (!root) return;

  const template = filterElems.reduce((acc, curr) => {
    return `${acc}${createFilterTemplate(curr, animalType)}`;
  }, '');

  root.innerHTML = template;
}


function insertFilter(animalType) {
  const { list, filterKeys, filtersRoot } = animalsMapping[animalType];

  if (!list || !filterKeys || !filtersRoot) return;

  const filterOptions = createFiltersOptionsArray();

  insertFilterTemplate(filterOptions, filtersRoot, animalType);
}


function handleChangeLableValue(event) {
  const label = event.target.closest('label');

  const selectValue = label.querySelector('.Select-Value');

  selectValue.innerHTML = event.target.options[event.target.selectedIndex].text;
}


function filterState(state, animals) {
  return animals.filter((item) => {
    const isSizeFilterCorrect = item.size === state.size || state.size === SIZES.all;
    const isCoatFilterCorrect = item.coat === state.coat || state.coat === COATS.all;
    const isEnergyFilterCorrect = item.energy === state.energy || state.energy === ENERGIES.all;

    return isSizeFilterCorrect && isCoatFilterCorrect && isEnergyFilterCorrect;
  });
}


function toggleEmptyMessage(shouldHide) {
  const displayState = shouldHide ? 'none' : 'flex';
  document.querySelector('.Message').style.display = displayState;
}


function handleOnChange(event, stateName, animalType) {
  const selectedOption = event.target.options[event.target.selectedIndex];
  
  const { list, breedsRoot, state } = animalsMapping[animalType];
  
  state.set(stateName, selectedOption.value);
  const filteredAnimals = filterState(state, list);
  insertAnimalCards(filteredAnimals, breedsRoot);
  toggleEmptyMessage(filteredAnimals.length);
  handleChangeLableValue(event);
}


function clearFilter(animalType) {
  const { state, list, breedsRoot, filtersRoot } = animalsMapping[animalType];
  state.reset();

  insertAnimalCards(list, breedsRoot);
  insertFilter(animalType);
  toggleEmptyMessage(true);
}


function createPopupTemplate(animal) {
  return `
    <img class="Close" src="img/icons/close.svg" onclick="handleClosePopup(popupRoot)"/>

    <div class="Popup-Info" id="popup${animal.id}">
      <div class="Popup-Header">  
        <h1>${animal.name}</h1>
        <button class="Add"><img src="img/icons/heart.svg"/><p>Add to Favorites</p></button>
        <button class="Remove Button_hidden"><img src="img/icons/heart_solid.svg"/><p>Remove from Favorites</p></button>
      </div>
      <img class="Popup-Img" src="${animal.mainImg}"/>

      <table>
        <tr>
          <td>
            <p class="Name">size:</p>
            <p class="Value">${capitalize(animal.size)}</p>
          </td>
          <td>
            <p class="Name">coat:</p>
            <p class="Value">${capitalize(animal.coat)}</p>
          </td>
          <td>
            <p class="Name">energy:</p>
            <p class="Value">${capitalize(animal.energy)}</p>
          </td>
        </tr>
      </table>

      <div class="AllInfo">
        <div class="InfoBlock">
          <h2>Characteristics:</h2>
          <p>${animal.characteristics}</p>
        </div>
        <div class="InfoBlock">
          <h2>Colors:</h2>
          <p>${animal.colors}</p>
        </div>
        <div class="InfoBlock">
          <h2>Lifespan:</h2>
          <p>${animal.lifespan}</p>
        </div>
      </div>
    </div>
  `;
}


function showPopup(popup) {
  popup.classList.add('Popup_active');
  document.documentElement.style.overflowY = 'hidden';
}


function insertPopup(animalId, root) {
  const animal = Object
    .values(animalsMapping) 
    .map((item) => item.list) 
    .reduce((acc, curr) => acc.concat(curr), []) 
    .find((item) => item.id === animalId);

  const template = createPopupTemplate(animal);
  root.innerHTML = template;
    
  showPopup(root);
}


function handleOpenPopup(_event, animalId, root) {
  insertPopup(animalId, root);
}


function handleClosePopup(popup) {
  popup.classList.remove('Popup_active');
  document.documentElement.style.overflowY = '';
}

function isPopupOpen(popup) {
  return popup.classList.contains('Popup_active');
}


function handleClosePopupByEsc(event) {
  if (!isPopupOpen(popupRoot)) return;

  if (event.code === 'Escape') {
    handleClosePopup(popupRoot);
  }
}

document.addEventListener('keydown', handleClosePopupByEsc);


function startFunctions() {
  insertAnimalCards(animalsMapping.cats.list, animalsMapping.cats.breedsRoot);
  insertAnimalCards(animalsMapping.dogs.list, animalsMapping.dogs.breedsRoot);
  insertAnimalCards(animalsMapping.rats.list, animalsMapping.rats.breedsRoot);
  
  insertFilter(ANIMAL_TYPES.cats);
  insertFilter(ANIMAL_TYPES.dogs);
}

startFunctions();

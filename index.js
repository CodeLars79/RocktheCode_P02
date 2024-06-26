document.addEventListener('DOMContentLoaded', () => {
  //Filters and containers:
  const filterContainer = document.getElementById('filterContainer')
  const posterContainer = document.getElementById('posterContainer')

  const sortSelect = createSelect('sort', [
    { value: 'AtoZ', text: 'A to Z' },
    { value: 'ZtoA', text: 'Z to A' },
    { value: 'Random', text: 'Surprise Me' }
  ])

  const priceSelect = createSelect('price', [
    { value: 'all', text: 'All' },
    { value: '59', text: '59' },
    { value: '69', text: '69' },
    { value: '79', text: '79' },
    { value: '89', text: '89' }
  ])

  const formatSelect = createSelect('format', [
    { value: 'all', text: 'All' },
    { value: 'Portrait', text: 'Portrait' },
    { value: 'Landscape', text: 'Landscape' },
    { value: 'Square', text: 'Square' }
  ])

  const colorSelect = createSelect('colors', [
    { value: 'all', text: 'All' },
    { value: 'Black', text: 'Black' },
    { value: 'White', text: 'White' },
    { value: 'Blue', text: 'Blue' },
    { value: 'Pink', text: 'Pink' }
  ])

  filterContainer.appendChild(createLabel('Sort:', 'name'))
  filterContainer.appendChild(sortSelect)
  filterContainer.appendChild(createLabel('Price:', 'price'))
  filterContainer.appendChild(priceSelect)
  filterContainer.appendChild(createLabel('Format:', 'format'))
  filterContainer.appendChild(formatSelect)
  filterContainer.appendChild(createLabel('Color:', 'colors'))
  filterContainer.appendChild(colorSelect)

  const resetButton = document.createElement('button')
  resetButton.id = 'btnReset'
  resetButton.textContent = 'Reset filters'
  filterContainer.appendChild(resetButton)

  //Array of posters:
  const posters = [
    {
      name: 'God is in the Details',
      price: 59,
      format: 'Landscape',
      colors: ['black', 'white'],
      imageUrl: './assets/godIsInTheDetails.jpg'
    },
    {
      name: 'Pink God is in the Details',
      price: 59,
      format: 'Landscape',
      colors: ['black', 'pink'],
      imageUrl: './assets/pinkGodIsInTheDetails.jpg'
    },
    {
      name: 'Conscious City',
      price: 79,
      format: 'Landscape',
      colors: ['black', 'white'],
      imageUrl: './assets/consciousCity.jpg'
    },
    {
      name: 'Conscious City Pink',
      price: 79,
      format: 'Landscape',
      colors: ['black', 'pink'],
      imageUrl: './assets/consciousCityPink.jpg'
    },
    {
      name: 'Facadism',
      price: 59,
      format: 'Landscape',
      colors: ['black', 'white'],
      imageUrl: './assets/facadism.jpg'
    },
    {
      name: 'Facadism Blue',
      price: 69,
      format: 'Landscape',
      colors: ['black', 'white', 'Blue'],
      imageUrl: './assets/facadismBlue.jpg'
    },
    {
      name: 'Facadism Pink',
      price: 69,
      format: 'Landscape',
      colors: ['black', 'white', 'Pink'],
      imageUrl: './assets/facadismPink.jpg'
    },
    {
      name: 'New Suburbanism',
      price: 89,
      format: 'Square',
      colors: ['black', 'white'],
      imageUrl: './assets/newSuburbanism.jpg'
    },
    {
      name: 'Squared Permeability',
      price: 59,
      format: 'Square',
      colors: ['black', 'white'],
      imageUrl: './assets/squaredPermeability.jpg'
    },
    {
      name: 'Stacked City',
      price: 89,
      format: 'Portrait',
      colors: ['black', 'white'],
      imageUrl: './assets/stackedCity.jpg'
    },
    {
      name: 'Stacked City Black',
      price: 89,
      format: 'Square',
      colors: ['black', 'white'],
      imageUrl: './assets/stackedCityBlack.jpg'
    },
    {
      name: 'Stacked City Pink',
      price: 89,
      format: 'Portrait',
      colors: ['pink', 'white'],
      imageUrl: './assets/stackedCityPink.jpg'
    },
    {
      name: 'Supertanker',
      price: 69,
      format: 'Landscape',
      colors: ['black', 'white'],
      imageUrl: './assets/Supertanker.jpg'
    },
    {
      name: 'Supertanker Blue',
      price: 69,
      format: 'Landscape',
      colors: ['black', 'white', 'blue'],
      imageUrl: './assets/SupertankerBlue.jpg'
    },
    {
      name: 'Urban Virus',
      price: 89,
      format: 'Square',
      colors: ['black', 'white'],
      imageUrl: './assets/urbanVirus.jpg'
    },
    {
      name: 'Urban Virus Blue',
      price: 89,
      format: 'Square',
      colors: ['black', 'white', 'blue'],
      imageUrl: './assets/urbanVirusBlue.jpg'
    },
    {
      name: 'Urbicide',
      price: 79,
      format: 'Landscape',
      colors: ['black', 'white', 'blue'],
      imageUrl: './assets/urbicide.jpg'
    },
    {
      name: 'Vertical City',
      price: 59,
      format: 'Portrait',
      colors: ['black', 'white'],
      imageUrl: './assets/verticalCity.jpg'
    },
    {
      name: 'Vertical City Blue',
      price: 59,
      format: 'Portrait',
      colors: ['black', 'white', 'blue'],
      imageUrl: './assets/verticalCityBlue.jpg'
    },
    {
      name: 'Vertical City Pink',
      price: 59,
      format: 'Portrait',
      colors: ['pink', 'white'],
      imageUrl: './assets/verticalCityPink.jpg'
    },
    {
      name: 'Vertical City Pink & Blue',
      price: 69,
      format: 'Portrait',
      colors: ['pink', 'white', 'blue'],
      imageUrl: './assets/verticalCityPinkBlue.jpg'
    },
    {
      name: 'Vertical Permeability',
      price: 59,
      format: 'Portrait',
      colors: ['white', 'black'],
      imageUrl: './assets/verticalPermeability.jpg'
    },
    {
      name: 'Vertical Permeability Blue',
      price: 59,
      format: 'Portrait',
      colors: ['white', 'blue'],
      imageUrl: './assets/verticalPermeabilityBlue.jpg'
    },
    {
      name: 'Vertical Permeability Blue & Pink',
      price: 69,
      format: 'Portrait',
      colors: ['white', 'blue', 'pink'],
      imageUrl: './assets/verticalPermeabilityBluePink.jpg'
    }
  ]

  const displayPosters = (filteredPosters, suggested = false) => {
    posterContainer.innerHTML = ''

    if (suggested) {
      const message = document.createElement('p')
      message.textContent =
        'Sorry, no posters found matching your request. Why not check out these great artworks instead?'
      posterContainer.appendChild(message)
    }

    //Display of poster item:
    const postersHtml = filteredPosters
      .map(
        (poster) => `
      <div class="poster">
        <img src="${poster.imageUrl}" alt="${poster.name}">
        <h2>${poster.name}</h2>
        <p>Price: ${poster.price} €</p>
        <p>Format: ${poster.format}</p>
        <p>Colors: ${poster.colors.join(', ')}</p>
      </div>
    `
      )
      .join('')

    posterContainer.innerHTML += postersHtml
  }

  const filterPosters = () => {
    let filteredPosters = posters

    const selectedSort = sortSelect.value
    const selectedPrice = priceSelect.value
    const selectedFormat = formatSelect.value
    const selectedColor = colorSelect.value

    //Filter by price:
    if (selectedPrice !== 'all') {
      filteredPosters = filteredPosters.filter(
        (poster) => poster.price === parseInt(selectedPrice, 10)
      )
    }
    //Filter by format:
    if (selectedFormat !== 'all') {
      filteredPosters = filteredPosters.filter(
        (poster) => poster.format === selectedFormat
      )
    }
    //Filter by color:
    if (selectedColor !== 'all') {
      filteredPosters = filteredPosters.filter((poster) =>
        poster.colors
          .map((color) => color.toLowerCase())
          .includes(selectedColor.toLowerCase())
      )
    }
    //Filter by name:
    switch (selectedSort) {
      case 'AtoZ':
        filteredPosters.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'ZtoA':
        filteredPosters.sort((a, b) => b.name.localeCompare(a.name))
        break
      case 'Random':
        filteredPosters.sort(() => Math.random() - 0.5)
        break
    }

    if (filteredPosters.length === 0) {
      const randomPosters = getRandomPosters(3)
      displayPosters(randomPosters, true)
    } else {
      displayPosters(filteredPosters)
    }
  }

  const getRandomPosters = (count) => {
    const shuffled = posters.sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
  }

  sortSelect.addEventListener('change', filterPosters)
  priceSelect.addEventListener('change', filterPosters)
  formatSelect.addEventListener('change', filterPosters)
  colorSelect.addEventListener('change', filterPosters)

  resetButton.addEventListener('click', () => {
    sortSelect.value = 'AtoZ'
    priceSelect.value = 'all'
    formatSelect.value = 'all'
    colorSelect.value = 'all'
    filterPosters()
  })

  // Initial display of posters:
  filterPosters()
})

function createSelect(id, options) {
  const select = document.createElement('select')
  select.id = id

  options.forEach((option) => {
    const opt = document.createElement('option')
    opt.value = option.value
    opt.textContent = option.text
    select.appendChild(opt)
  })

  return select
}

function createLabel(text, forId) {
  const label = document.createElement('label')
  label.textContent = text
  label.setAttribute('for', forId)
  return label
}

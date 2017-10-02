class Locations {
  constructor() {
    this.locations = []
    this.initBindingsAndEventListeners()
    this.adapter = new LocationsAdapter()
    this.fetchAndLoadLocations()
  }

  initBindingsAndEventListeners() {
    this.locationsForm = document.getElementById('new-location-form')
    this.locationsLatitudeInput = document.getElementById('new-location-latitude')
    this.locationsLongitudeInput = document.getElementById('new-location-longitude')
    this.locationsNode = document.getElementById('locations-container')
    this.locationsForm.addEventListener('submit', this.handleAddLocation.bind(this))
    this.locationsNode.addEventListener('click', this.handleDeleteLocation.bind(this))
  }

  fetchAndLoadLocations() {
    this.adapter.getLocations()
    .then(locationsJSON => locationsJSON.forEach( location => this.locations.push( new Location(location) )))
    .then( this.render.bind(this) )
    .catch( (error) => console.log(error))
  }

  handleAddLocation() {
    event.preventDefault()
    const latitude = this.locationsLatitudeInput.value
    const longitude = this.locationsLongitudeInput.value
    this.adapter.createLocation(latitude, longitude)
    .then( (locationsJSON) => this.locations.push(new Location(locationJSON)) )
    .then( this.render.bind(this) )
    .then( () => this.locationsLatitudeInput = "")
    .then( () => this.locationsLongitudeInput = "")
  }

}

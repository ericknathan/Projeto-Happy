//Create map
const map = L.map('mapid').setView([-27.222633,-49.6455874], 15);

//Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//Create Icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;

//Create and add marker
map.on('click', (event) => {
    console.log(event)
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //Remove icon
    marker && map.removeLayer(marker)

    //Add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)

})

//Add photo area
function addPhotoField() {
    //Give Photo Container #images
    const container = document.querySelector('#images')
    //Give Field Container for duplication .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //Duplicate the last Photo added
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    //Verify if has text
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return;
    }
    //Clear container
    input.value = ""
    //Add the duplicate container for #images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1) {
        //Clear value of Field
        span.parentNode.children[0].value=""
        return;
    }

    //Delete Field
    span.parentNode.remove()

}

//Switch between Yes & No

function toggleSelect(event) {

    //Remove class .active of the buttons
    document.querySelectorAll('.button-select button')
    .forEach( function(button) {
        button.classList.remove('active')
    })
    //insert class .active in the selected button
    const button = event.currentTarget
    button.classList.add('active')
    //Get the button switched

    //Check yes or no

    //Update the input hidden with the selected value
    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value
}
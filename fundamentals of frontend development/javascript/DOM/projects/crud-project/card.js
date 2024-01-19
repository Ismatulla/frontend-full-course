const singleCard = document.querySelector('.card')
const deleteWindow = document.querySelector('.modal_window_delete')
const modalDeleteBtn = document.querySelector(".modal_delete_btn")
const overlay = document.querySelector('.overlay')
const addNewCard = document.querySelector('.add_card')
const deleteBtn = document.querySelector('.card_delete')
const updateBtn = document.querySelector('.card_update')


const updateForm = document.querySelector(".modal_update")
const closeFormBtn = document.querySelector(".modal_close_btn")

// single card data access
const cardHeader = document.querySelector(".card_header")
const cardImage = document.querySelector('.card_image')
const date = document.querySelector('.time')
const cardLocation = document.querySelector('.location')

// update for form
const updateImg = document.querySelector('.update_file')
const updateTitle = document.querySelector('.update_title')
const updateDate = document.querySelector('.update_date')
const updateLocation = document.querySelector('.update_location')

// create a card 
const createForm = document.querySelector('.modal_create')
const createTitle = document.querySelector(".create_title");
const createDate = document.querySelector(".create_date");
const createLocation = document.querySelector(".create_location");
const createImage = document.querySelector('.create_img')




let titleValue
let locationsValue
let timeValue
let imgUpload



// delete button and overlay
deleteBtn.addEventListener('click', () => {
  console.log('clicked')
  deleteWindow.classList.add('active')
  overlay.classList.add('active')
})

overlay.addEventListener('click', () => {
  overlay.classList.remove('active')
  deleteWindow.classList.remove('active')
  updateForm.classList.remove('active')
})

// delete 
modalDeleteBtn.addEventListener('click', () => {
  deleteWindow.classList.remove('active')
  overlay.classList.remove('active')
  singleCard.remove()
})

// update form

updateBtn.addEventListener('click', () => {
  console.log('clicked')
  updateForm.classList.add('active')
  overlay.classList.add('active')
})

// image upload
let newImage =
  updateImg.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        newImage = event.target.result;

      };
      reader.readAsDataURL(file);
    }
  });

updateTitle.addEventListener('change', () => {
  cardHeader.innerText = updateTitle.value
  console.log(updateTitle.value)
})

updateDate.addEventListener('input', () => {
  date.innerText = updateDate.value

})
updateLocation.addEventListener('change', () => {
  cardLocation.innerText = updateLocation.value
})
updateForm.addEventListener('submit', (e) => {
  e.preventDefault()
  cardImage.style.backgroundImage = `url('${newImage}')`;
  updateForm.classList.remove('active')
  overlay.classList.remove('active')

});

// update the form 

closeFormBtn.addEventListener('click', () => {
  console.log('close')
  updateForm.classList.remove('active')
  overlay.classList.remove('active')
})

// create form
createImage.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      imgUpload = event.target.result;

    };
    reader.readAsDataURL(file);
  }
});

createTitle.addEventListener('change', () => {
  titleValue = createTitle.value
})
createDate.addEventListener('input', () => {
  timeValue = createDate.value
})
createLocation.addEventListener('change', () => {
  locationsValue = createLocation.value
})

createForm.addEventListener('submit', (e) => {
  e.preventDefault()
  singleCard.insertAdjacentHTML('beforebegin', `<article class="card">
  <div class="card_image" style="background-image: url('${imgUpload}')">
    <figure class="card_icons">
      <button class="card_delete"><i class="fa-regular fa-trash-can card_delete"></i></button>
      <button class="card_update"><i class="fa-regular fa-pen-to-square"></i></button>
    </figure>
  </div>
  <figcaption class="card_content">
    <h1 class="card_header">${titleValue}</h1>
    <div class="card_info">
      <div class="card_date">
        <i class="fa-regular fa-calendar"></i>
        <time class="time" datetime="17/05/23">${timeValue}</time>
      </div>
      <div class="card_location">
        <i class="fa-solid fa-location-dot"></i>
        <p class="location">${locationsValue}</p>
      </div>
    </div>
  </figcaption>
</article>`)
  createForm.classList.remove('active')
  overlay.classList.remove('active')
});

addNewCard.addEventListener('click', () => {
  console.log('clicked')
  createForm.classList.add('active')
  overlay.classList.add('active')
})

//? great explanation case
// The issue is related to the fact that deleteBtn is assigned only once, and it refers to the first element with the class .card_delete that exists when the script runs. For dynamically added elements, you need to use event delegation or reassign event listeners after creating the new elements.

// If you're trying to attach an event listener to an element that doesn't exist at the time the code runs (for example, if it's dynamically added later), you won't be able to directly attach an event listener to it. That's why event delegation or reassigning event listeners after creating new elements is commonly used for dynamically added content.

// Event delegation involves attaching a single event listener to a common ancestor of the elements you're interested in and then checking the target of the event to determine if it matches the desired elements. This allows you to handle events for dynamically added elements as well.
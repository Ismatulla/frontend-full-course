// card container
const cardSection = document.querySelector('.card_section') 

// delete elements
const deleteWindow = document.querySelector('.modal_window_delete')  
const modalDeleteBtn = document.querySelector(".modal_delete_btn") 
const overlay = document.querySelector('.overlay')

//close btns
const closeFormBtn = document.querySelector(".modal_close_btn")
const closeFormBtnUpdate = document.querySelector(".modal_close_btn_update")



// update card
const updateForm = document.querySelector(".modal_update")
const updateTitle = document.querySelector('.update_title')
const updateDate = document.querySelector('.update_date')
const updateLocation = document.querySelector('.update_location')

// create a card 
const addNewCard = document.querySelector('.add_card')
const createForm = document.querySelector('.modal_create')
const createTitle = document.querySelector(".create_title");
const createDate = document.querySelector(".create_date"); 
const createLocation = document.querySelector(".create_location");

function generateRandomId(){
  return Math.round(Math.random() * 9)
}

let formData =
 [{ title: 'my first title', time: "01/23/2024", location: "North Holland", id: 1 }]

 // overlay close  (birinchi navbatda overlay va form lani chiqarib ko'rsatish)

overlay.addEventListener('click', () => {
  overlay.classList.remove('active')
  deleteWindow.classList.remove('active')
  createForm.classList.remove('active')
  updateForm.classList.remove('active')
})

// rendering existion card 
function displayForm() {
 
  if (formData.length === 0) {
    cardSection.innerHTML = ""
  }
  const cardsHtml = formData.map((data) => `<article class="card" id=${data.id} >
    <div class="card_image">
      <figure class="card_icons">
        <button class="card_delete"><i class="fa-regular fa-trash-can card_delete"></i></button>
        <button class="card_update"><i class="fa-regular fa-pen-to-square"></i></button>
      </figure>
    </div>
    <figcaption class="card_content">
      <h1 class="card_header">${data.title}</h1>
      <div class="card_info">
        <div class="card_date">
          <i class="fa-regular fa-calendar"></i>
          <time class="time" datetime="17/05/23">${data.time}</time>
        </div>
        <div class="card_location">
          <i class="fa-solid fa-location-dot"></i>
          <p class="location">${data.location}</p>
        </div>
      </div>
    </figcaption>
  </article>`

  )
  cardSection.innerHTML = cardsHtml.join("")
}

displayForm()

function addActiveClass(element,overlay=0){
  element.classList.add('active')
overlay.classList.add('active')
}

function removeActiveClass(element,overlay=0){
  element.classList.remove('active')
overlay.classList.remove('active')
}

//  delete card functions
let captureId

cardSection.addEventListener('click', (e) => {
  if (e.target.classList.contains('card_delete')) {
    captureId=e.target.closest('.card').id
    addActiveClass(deleteWindow,overlay)
    
  }
})

modalDeleteBtn.addEventListener('click', (e) => {
 formData = formData.filter(data=>data.id !==Number(captureId))
 removeActiveClass(deleteWindow,overlay)
 displayForm()
})

//



// add new card
closeFormBtn.addEventListener('click', () => {
  removeActiveClass(createForm,overlay)
  })

addNewCard.addEventListener('click', () => {
  addActiveClass(createForm,overlay)
})

createForm.addEventListener('submit', (e) => {
  e.preventDefault()
  if (createTitle.value == '' || createDate.value == "" || createLocation == "") return
  formData = [...formData, { title: createTitle.value, time: createDate.value, location: createLocation.value, id: generateRandomId() }]
  createTitle.value = ""
  createDate.value = ""
  createLocation.value = ""
removeActiveClass(createForm,overlay)
  displayForm()
})


// update the card
closeFormBtnUpdate.addEventListener('click', () => {
  removeActiveClass(updateForm,overlay)
})

cardSection.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-pen-to-square')) {
    captureId=e.target.closest('.card').id
    addActiveClass(updateForm,overlay)
  
   let currentData = formData.find(data=>data.id===Number(captureId))

   const dateParts = currentData.time.split('/');
   const formattedDate = `20${dateParts[2]}-${dateParts[0]}-${dateParts[1]}`;
   updateDate.value = formattedDate;   
   
   updateTitle.value=currentData.title
   updateLocation.value=currentData.location
  }
})
updateForm.addEventListener('submit', (e) => {
  e.preventDefault()
  if (updateTitle.value == '' || updateDate.value == "" || updateLocation == "") return
formData=formData.map(data=>{
  if(data.id===Number(captureId)){
    return {
      ...data,
      title: updateTitle.value,
      time: updateDate.value,
      location: updateLocation.value,
    }
  }
  return data
})
removeActiveClass(updateForm,overlay)
  displayForm()
})

// lets break above expression
  // 1)called spread operator ,creating new array and putting copy of formData in it [...formData]
  // 2) then at the end object is added to copied version of new array and updated existing formData [...formData,{}]
  //? 3) when we spread formData it expands to objects thats why we added object at the end 

  
//? great explanation case
// The issue is related to the fact that deleteBtn is assigned only once, and it refers to the first element with the class .card_delete that exists when the script runs. For dynamically added elements, you need to use event delegation or reassign event listeners after creating the new elements.

// If you're trying to attach an event listener to an element that doesn't exist at the time the code runs (for example, if it's dynamically added later), you won't be able to directly attach an event listener to it. That's why event delegation or reassigning event listeners after creating new elements is commonly used for dynamically added content.

// Event delegation involves attaching a single event listener to a common ancestor of the elements you're interested in and then checking the target of the event to determine if it matches the desired elements. This allows you to handle events for dynamically added elements as well.
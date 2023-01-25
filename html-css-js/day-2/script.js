const $form = document.querySelector('.form')
const $input = document.querySelector('.form-input')
const $list = document.querySelector('.list')

const initialValue = [
  'regalo X',
  'regalo Y',
  'regalo Z'
]

const createGift = (gift) =>{
  const newGift = document.createElement('li')
  newGift.classList = 'list-item'
  newGift.textContent = gift
  return newGift
}

const addInitialGifts = () => {
  initialValue.forEach(gift => $list.appendChild(createGift(gift)))
}

const handleSubmit = (evt)=>{
  evt.preventDefault()
  const gift = evt.target.newGift.value
  $list.insertBefore(newItem,$list.firstChild)
  evt.target.newGift.value = ''
 return 
}

document.addEventListener('DOMContentLoaded', addInitialGifts)
$form.addEventListener('submit',handleSubmit)

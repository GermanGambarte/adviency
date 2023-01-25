const $form = document.querySelector('.form')
const $input = document.querySelector('.form-input')
const $list = document.querySelector('.list')


const createGift = (gift) =>{
  const newGift = document.createElement('li')
  newGift.classList = 'list-item'
  newGift.textContent = gift
  return newGift
}


const handleSubmit = (evt)=>{
  evt.preventDefault()
  const gift = evt.target.newGift.value
  $list.insertBefore(createGift(gift),$list.firstChild)
  evt.target.newGift.value = ''
 return 
}


$form.addEventListener('submit',handleSubmit)

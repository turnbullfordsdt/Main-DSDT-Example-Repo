
console.log(document.body)

// access the web page and create an element
my_divider = document.createElement('div')

// add some text to that web page element
my_divider.textContent = 'Hello world!'

// set id of that element
my_divider.id = 'my_divider_id'

// set class of that element
my_divider.className = 'my_divider_class'

// add the element to the body itself
document.body.appendChild(my_divider)

// create button and add to my_divider
my_button = document.createElement('button')
my_button.textContent = 'Click me!'
my_button.id = 'my_button_id'
my_button.className = 'my_button_class'
my_divider.appendChild(my_button)

// add event listener to button
my_button.addEventListener('click', function(){
    alert('Button clicked!')
})





console.log('successfully ran!')
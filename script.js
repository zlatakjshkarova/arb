let arden = document.querySelector('.arden')

let ardenitem = document.querySelectorAll('.arden_item')

arden.addEventListener('click', (event) => {
    let elementTarget = event.target;
    console.log(elementTarget)
    for (let item of ardenitem) {
        item.classList.remove('active')

    }
    elementTarget.closest('.arden_item').classList.add('active')
})

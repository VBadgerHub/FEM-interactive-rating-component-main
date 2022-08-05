

let lastId = ''

const ratCilcked = (id) => {
    document.getElementById(id).classList.add('n_active')
    lastId ? document.getElementById(lastId).classList.remove('n_active') : null
    lastId = id
}

const addRating = () => {
    document.getElementById('rating_container').classList.add('rating_box_fade')
    document.getElementById('thanks_container').classList.add('thanks_container_fade')
    document.getElementsByClassName('rating_out')[0].innerHTML = lastId
}




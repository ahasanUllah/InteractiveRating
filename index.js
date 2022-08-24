const ratings = document.getElementById('ratings')
console.log(ratings[0]);
const mainContainer = document.getElementById('main')
const thankYou = document.getElementById('thanks-container')
const selectedRating = document.getElementById('selected-rating')

document.querySelector('.btn-submit').addEventListener('click', function(){
    if(selectedRating.innerText != ''){
    mainContainer.style.display = 'none'
    thankYou.style.display = 'flex'
    }
    else{
        return alert('please give ratings')
    }
})
document.getElementById('rate-again-btn').addEventListener('click', function(){
    mainContainer.style.display = 'block'
    thankYou.style.display = 'none'
})

ratings.addEventListener('click', function(e){
    
    if(e.target.classList.contains('btn')){
        selectedRating.innerText = e.target.innerText
    }
    
})
const ratingBtns = document.querySelectorAll('.rating-btn')
const ratingBox = document.querySelector('.rating-div')
const thankYouBox = document.querySelector('.thank-you-div')
const submitBtn = document.querySelector('.submit-btn')
const thankYouText = document.querySelector('.thank-you__rating-text')
// Rating Part

function refreshBtns (ratingBtn){
    ratingBtns.forEach(function(ratingBtn){
        ratingBtn.removeAttribute('id')
        ratingBtn.className = "rating-btn-comp"
    })
}

let rate = 0
ratingBtns.forEach(function(ratingBtn){
    ratingBtn.addEventListener('click',function(){
        refreshBtns()
        ratingBtn.id = 'choosen'
        if (ratingBtn.id === 'choosen'){
            ratingBtn.className = "bg-orange text-white rating-btn-comp"
            rate = ratingBtn.innerHTML
            console.log(rate);
        }
    })
})

// ThankYou Part

submitBtn.addEventListener('click',function(){
    // This function hidden rating box by sumbit btn and unhidden thank you box
    if(rate){
        ratingBox.className = 'hidden'
        thankYouBox.classList.remove('hidden')
        thankYouText.innerHTML = 'You selected ' + rate + ' out of 5'
    }
})

ratingBtns = document.querySelectorAll('.rating-btn')

function refreshBtns (ratingBtn){
    ratingBtns.forEach(function(ratingBtn){
        ratingBtn.removeAttribute('id')
        ratingBtn.className = "rating-btn-comp"

    })

}


ratingBtns.forEach(function(ratingBtn){
    ratingBtn.addEventListener('click',function(){
        refreshBtns()
        ratingBtn.id = 'choosen'
        if (ratingBtn.id === 'choosen'){
            ratingBtn.className = "bg-orange text-white rating-btn-comp"

        }
    })
})

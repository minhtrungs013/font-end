<script>
    const buybtns = document.querySelectorAll('.js-btn-buytickets')
    const modal = document.querySelector('.js-modal')
    const modalclose = document.querySelector('.js-modal-close')
    const footerclose = document.querySelector('.js-footer')
    const tiskerform = document.querySelector('.js-tisker-form')
        function showbuytickets(){
            modal.classList.add('modal__open')
        }
        function hidenbuytickets(){
            modal.classList.remove('modal__open')
        }
    for(const buybtn of buybtns){
        buybtn.addEventListener('click', showbuytickets)
    }
    modalclose.addEventListener('click', hidenbuytickets )
    footerclose.addEventListener('click', hidenbuytickets)
    modal.addEventListener('click', hidenbuytickets)
    tiskerform.addEventListener('click',function(event){
        event.stopPropagation()
    })
</script>

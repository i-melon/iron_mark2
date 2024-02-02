addEventListener("DOMContentLoaded", function () {
    function openModal() {
        document.getElementById('modalWrapper').style.display="flex"
    }
    document.addEventListener('click', function(event) {
        if (event.target === document.getElementById('modalWrapper')) {
            document.getElementById('modalWrapper').style.display = 'none';
        }
    });
    document.getElementById('closeModal').addEventListener("click", function (){document.getElementById('modalWrapper').style.display = 'none';})
    document.getElementById('modal1').addEventListener("click", openModal)
    document.getElementById('modal2').addEventListener("click", openModal)
    document.getElementById('modal3').addEventListener("click", openModal)
    document.getElementById('modal4').addEventListener("click", openModal)
    document.getElementById('modal5').addEventListener("click", openModal)
    document.getElementById('modal6').addEventListener("click", openModal)
    document.getElementById('modal7').addEventListener("click", openModal)
    document.getElementById('modal8').addEventListener("click", openModal)
    document.getElementById('modal9').addEventListener("click", openModal)
    document.getElementById('modal10').addEventListener("click", openModal)
    document.getElementById('modal11').addEventListener("click", openModal)
    document.getElementById('modal21').addEventListener("click", openModal)
    document.getElementById('modal22').addEventListener("click", openModal)
    document.getElementById('modal23').addEventListener("click", openModal)
    document.getElementById('modal24').addEventListener("click", openModal)
    document.getElementById('modal25').addEventListener("click", openModal)
    document.getElementById('modal26').addEventListener("click", openModal)


    document.getElementById('openDrop').addEventListener("click", function (){
        document.getElementById('dropDown').style.display='block'
    })
    document.getElementById('openDrop2').addEventListener("click", function (){
        document.getElementById('dropDown').style.display='block'
    })
    document.getElementById('dropDown').addEventListener("click", function (){
        document.getElementById('dropDown').style.display='none'
    })
})
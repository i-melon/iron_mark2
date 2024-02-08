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

    let buttonIds = ['modal1', 'modal2', 'modal3', 'modal4', 'modal5', 'modal6', 'modal7', 'modal8', 'modal9',
        'modal10', 'modal11', 'modal21', 'modal22', 'modal23', 'modal24', 'modal25', 'modal26']

    for (let i = 0; i < buttonIds.length; i++) {
        if (document.getElementById(buttonIds[i])) {
            document.getElementById(buttonIds[i]).addEventListener("click", openModal)
        }
    }

    if (document.getElementById('openDrop') && document.getElementById('dropDown')) {
        document.getElementById('openDrop').addEventListener("click", function (){
            document.getElementById('dropDown').style.display='block'
        })
        document.getElementById('dropDown').addEventListener("click", function (){
            document.getElementById('dropDown').style.display='none'
        })
    }
})
function getId(id){
    let element =1;
    if(id == "first"){
        element = 1;
    }else{
        element = 2;
    }
    return element;
}

function increment(id){
    let element = getId(id);
    let price = document.getElementById(`price-${element}`).innerText;
    var newValue =  +(document.getElementById(id).value)+1;
    document.getElementById(id).value =newValue;
    document.getElementById(`total-price-${element}`).innerText =( newValue * (+price)).toFixed(2);
    calculateTotal();

}
function decrement(id){
    let element = getId(id);
    let price = document.getElementById(`price-${element}`).innerText;
    let currentValue = document.getElementById(id).value;
    if(currentValue > 1){
        document.getElementById(id).value = +(currentValue)-1;
        var newPrice = (+(currentValue)-1) * price
        document.getElementById(`total-price-${element}`).innerText =newPrice.toFixed(2);
        calculateTotal();
    }
}

function like(id){
    if(document.getElementById(id).style.color == "red"){
        document.getElementById(id).style.color = "gray"
    }else
    document.getElementById(id).style.color = "red"
}
function refresh(){
    window.location.reload()
}
function remove(id){
    const index = getId(id)-1;
   document.getElementsByClassName('product')[index].innerHTML = '';
   calculateTotal();
}

function calculateTotal(){
    var totalOne= +(document.getElementById('total-price-1')?.innerText) || 0;
    var totalTow= +(document.getElementById('total-price-2')?.innerText) || 0;
    document.getElementById('cart-total').innerText = (totalOne + totalTow).toFixed(2);
}
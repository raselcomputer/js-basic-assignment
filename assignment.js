
// problem - 1 =========================================================================



function seerToMon(number){
    if(typeof number != 'number' || number < 0){
        return 'please put a positive number';
    }
    var seers = number / 40;
    return seers;
}
const totalMon = seerToMon(200);
console.log(totalMon);



// problem - 2 =========================================================================




function totalSales(shirtQuantity, pantQuantity, shoeQuantity)
    {
        if(typeof shirtQuantity != 'number' || shirtQuantity < 0){
            return 'please check your keyword';}
        const perShirtPrice = 100;
        const perPantPrice = 200;
        const perShoePrice = 500;

        let shirtSales = shirtQuantity * perShirtPrice;
        let pantSales = pantQuantity * perPantPrice;
        let shoeSales = shoeQuantity * perShoePrice;
        
        let totalSales = shirtSales + pantSales + shoeSales;
        return totalSales;
    }
     
const totally = totalSales(50, 20, 10);
console.log(totally);



// problem - 3 =========================================================================



const first100perTshirtDeliveryCost = 100; 
const second100perTshirtDeliveryPrice = 80; 
const thirdMoreperTshirtDeliveryPrice = 50; 

function deliveryCost(perTshirt){
    if(typeof perTshirt != 'number' || perTshirt < 0){
        return 'this is not a valid number...please recheck again.';}
    if((perTshirt > 0) && (perTshirt <= 100)){
        const cost = perTshirt * first100perTshirtDeliveryCost;
        return cost;
    }
    else if((perTshirt > 100) && (perTshirt <=200)){
        const first100DeliveryCost = 100 * first100perTshirtDeliveryCost;
        const extraTshirt = perTshirt - 100;
        const extraTshirtDeliveryCost = extraTshirt * second100perTshirtDeliveryPrice;
        const totalSecondDeliveryCost = first100DeliveryCost + extraTshirtDeliveryCost;
        return totalSecondDeliveryCost;
    }
    else{
        const first100DeliveryCost = 100 * first100perTshirtDeliveryCost;
        const second100DeliveryCost = 100 * second100perTshirtDeliveryPrice;
        const extraTshirt = perTshirt - 200;
        const extraTshirtDeliveryCost = extraTshirt * thirdMoreperTshirtDeliveryPrice;
        const totalDeliveryCost = first100DeliveryCost + second100DeliveryCost + extraTshirtDeliveryCost;
        return totalDeliveryCost;
    }
    
}
const total = deliveryCost(201);
console.log(total);




// Problem - 4 =======================================================================

function perfectFriend(names){
    if( typeof names != 'object')
    {
        return 'input is not valid';
    }
    for(const name of names){
        if(name.length == 5){
            return name;
        }
    }
    return 'there is no five index name';  
}
const friendnames = ['aman', 'sahinur', 'biplop', 'jaman', 'rabbi'];
const bestFriend = perfectFriend(friendnames);
console.log(bestFriend);


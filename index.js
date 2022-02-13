var customerName = 'bob'

const leastFavoriteCustomer = 'punished bob'

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer(){
    bestCustomer = 'not bob';
        return bestCustomer;
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
        return bestCustomer;
}

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'venom bob' 
        return leastFavoriteCustomer;
}
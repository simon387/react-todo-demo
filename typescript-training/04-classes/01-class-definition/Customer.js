var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
var myCustomer = new Customer("martin", "dixon");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);

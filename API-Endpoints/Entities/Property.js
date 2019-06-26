//Property class

class Property{
    constructor(id,owner,status,price,state,city,address,type,createdOn,imageUrl){
        this.id = id;
        this.owner = owner;
        this.status = status;
        this.price = price;
        this.state = state;
        this.city = city;
        this.address = address;
        this.type = type;
        this.createdOn = DateTime();
        this.imageUrl = imageUrl;

    }
}

module.exports=Property

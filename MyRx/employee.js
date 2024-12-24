
class Address {
    constructor(street, city, state, zipCode) {
        this._street = street;
        this._city = city;
        this._state = state;
        this._zipCode = zipCode;

        Object.freeze(this);
    }

    get street() {
        return this._street;
    }

    get city() {
        return this._city;
    }

    get state() {
        return this._state;
    }

    get zipCode() {
        return this._zipCode;
    }

    toString() {
        return `${this.street}, ${this.city}, ${this.state} - ${this.zipCode}`;
    }
}


class Employee{
    constructor(name,id,dateOfJoining,addresses){
        this._name=name
        this._id=id

        this._dateOfJoining=new Date(dateOfJoining.getTime())
        this._addresses=Object.freeze([...addresses.map(addr=>Object.freeze(addr))])

        Object.freeze(this)
    }

    get name(){

        return this._name
    }
    get id(){
        return this._id
    }

    get dateOfJoining(){
        return new Date(this._dateOfJoining)
    }

    get addresses(){
        return [...this._addresses]
    }

    toString(){
        return `Employee-Details {name='${this.name}', id='${this.id}', dateOfJoining='${this.dateOfJoining}',
         addresses='${this.addresses.join(',')}'}`
    }

}


const address1=new Address("4/60 Main street","kadapa","AndhraPradesh","516175")
const address2=new Address("10/60 Main street","kadapa","AndhraPradesh","516175")

const addresses=[address1,address2]

const employee=new Employee("Ravi","A1",new Date(),addresses)

console.log(employee.toString())
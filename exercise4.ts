// 1. Create a Person class with name and age properties. Implement a method to return
// the person's name.
// 2. Add a private property socialSecurityNumber to the Person class and a method
// to get the age.
class Person{
    name:string="Mishi Makade";
    age:number=16;
    private socialSecurityNumber:number=78;
    get name_property():string{
        return this.name;
    }
    get age_property():number{
        return this.age;
    }
}
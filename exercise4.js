var Person = /** @class */ (function () {
    function Person() {
        this.name = "Mishi Makade";
        this.age = 16;
        this.socialSecurityNumber = 78;
    }
    Object.defineProperty(Person.prototype, "name_property", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age_property", {
        get: function () {
            return this.age;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());

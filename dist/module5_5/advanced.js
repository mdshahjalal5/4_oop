"use strict";
class User {
    constructor(firstName, lastName) {
        this.data = { firstName, lastName };
        this.methods = {
            fullName: () => `${firstName} ${lastName}`,
        };
    }
}
const user1 = new User("Mezbaul", "Persian");
console.log(user1.methods.fullName());

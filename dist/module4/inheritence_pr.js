"use strict";
class developers {
    // ie_experience:boolean;
    constructor(name3, age, //!n! as age not mention so public keyword is used 
    skill, is_experience) {
        this.age = age;
        this.is_experience = is_experience;
        this.name3 = name3;
        this.age = age;
        this.skill = skill;
        this.is_experience = is_experience;
    }
}
class designer extends developers {
    constructor(name3, age, skill, is_experience, host) {
        // !n! super for getting the parent property (perhaps)
        super(name3, age, skill, is_experience);
        this.host = host;
        this.host = host;
        console.log(host);
    }
}

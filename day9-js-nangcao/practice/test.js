class Person {
   name: string;
   email: string;
   password: string;
   constructor(name: string, email: string, password: string) {
      this.name = name;
      this.email = email;
      this.password = password;
   }
   login(email: string, password: string) {
      if (email === this.email && password === this.password) {
         console.log("Login successful");

      } else {
         console.log(('login failed'));
      }
   }
   setPassword(password: string) {
      this.password = password;
   }
}
let person1 = new Person('an', 'an', '123')
console.log(person1.name);
console.log(person1.email);
console.log(person1.password);
person1.login('an1', '123')
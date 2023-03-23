class User {
   private name: string;
   username: string
   password: string
   constructor(name: string, username: string, password: string) {
      this.name = name;
      this.username = username;
      this.password = password;
   }
   login(username: string, password: string) {
      if (username == this.username && password == this.password) {
         console.log('Login successful');
      } else {
         console.log('Authentication failed');
      }
   }
   setPassword(newPassword: string) {
      let isValid = false
      isValid = this.validateUsernameOfPassword(newPassword)
      if (isValid) {
         this.password = newPassword;
      } else {
         console.log('Password not valid');
      }
   }
   validateUsernameOfPassword(text: string) {
      if (text.length > 6) {
         return true
      }
      return false
   }
}
let user1 = new User('username1', 'username1', '12234')
console.log(user1.username, user1.password);
user1.login('username1', '12234')
user1.setPassword('1223344')


class Author extends User {
   numOfPost: number
   email: string
   constructor(email: string, username: string, name: string, password: string) {
      super(name, username, password)
      this.numOfPost = 0
      this.email = email
   }
   createPost() {
      this.numOfPost++
   }
   getNumOfPost() {
      return this.numOfPost
   }
}

let author1 = new Author('example@gmail.com', 'author1', 'author1', '12345678')
console.log(author1.email);
author1.login('author1', '12345678');
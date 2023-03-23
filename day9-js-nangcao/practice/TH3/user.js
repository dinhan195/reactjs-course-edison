var User = /** @class */ (function () {
    function User(name, username, password) {
        this.name = name;
        this.username = username;
        this.password = password;
    }
    User.prototype.login = function (username, password) {
        if (username == this.username && password == this.password) {
            console.log('Login successful');
        }
        else {
            console.log('Authentication failed');
        }
    };
    User.prototype.setPassword = function (password) {
        this.password = password;
    };
    return User;
}());
var user1 = new User('user1', 'user1', '12234');
console.log(user1.name);
user1.login('user1', '12234');

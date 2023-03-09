/** @format */

function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    // Coding here
    //get ID of good users
    // let getIdGoodUSer = goodUsers.map((goodUser) => goodUser.id);
    // // Check id of submitted users with good users
    // let submitUser = submittedUsers.map((userSumitId) => {
    //   return getIdGoodUSer.some((id) => {
    //     return id === userSumitId.id;
    //   });
    // });
    // console.log(submitUser);
    // // result of valid list users
    // let result = submitUser.every((user) => {
    //   return user === true;
    // });
    // console.log(result);
    return submittedUsers.every((submitUser) => {
      return goodUsers.some((goodUser) => {
        return goodUser.id === submitUser.id;
      });
    });
  };
}

var goodUsers = [{ id: 1 }, { id: 2 }, { id: 3 }];

// `checkUsersValid` is the function you'll define
var testAllValid = checkUsersValid(goodUsers);
console.log(testAllValid([{ id: 2 }, { id: 1 }]));
// => true
console.log(testAllValid([{ id: 2 }, { id: 4 }, { id: 1 }]));
// => false

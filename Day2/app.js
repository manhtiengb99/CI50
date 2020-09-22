// Câu 1
// Setter là 1 phương thức để thiết lập giá trị cho biến
// Để khởi tạo ta thêm từ khóa Set vào ngay trước hàm khai báo để biến hàm đó thành Setter

//Câu 2
// class Person {
//   name;
//   age;
//   sex;
//   address;
//   constructor(name, age, sex, address) {
//     this.name = name;
//     this.age = age;
//     this.sex = sex;
//     this.address = address;
//   }
//   speak() {
//     console.log(`Hello world`);
//   }
//   introduce() {
//     console.log(`Lý lịch:
//     Tên: ${this.name},
//     Tuổi: ${this.age},
//     Giới tính: ${this.sex},
//     Địa chỉ: ${this.address}`);
//   }
// }
// class Crush extends Person {
//   favorites;
//   appearance;
//   constructor(name, age, address, favorites, appearance) {
//     super(name, age, "famale", address);
//     this.favorites = favorites;
//     this.appearance = appearance;
//   }
//   speak() {
//     alert("tớ thích cậu mất rồi");
//   }
// }
// class Myex extends Person {
//   appearance;
//   constructor(name, age, address, appearance) {
//     super(name, age, "girl", address);
//     this.appearance = appearance;
//   }
//   speak() {
//     alert("đừng nhớ gì về nhau nữa");
//   }
// }
// class list {
//   owner;
//   person = [];
//   constructor(owner, person) {
//     this.owner = owner;
//     this.person = person;
//   }
//   showAll() {
//     let personList = this.person;
//     let i = 0;
//     while (true) {
//       if (personList[i] == undefined) {
//         break;
//       } else {
//         if (personList[i].favorites == undefined) {
//           console.log(
//             `tên nyc: ${personList[i].name}, tuổi: ${personList[i].age}, địa chỉ: ${personList[i].address}, ngoại hình: ${personList[i].appearance}`
//           );
//         } else {
//           console.log(
//             `tên người thương: ${personList[i].name}, tuổi: ${personList[i].age}, địa chỉ: ${personList[i].address}, sở thích ${personList[i].favorites}, ngoại hình: ${personList[i].appearance}`
//           );
//         }
//         i++;
//       }
//     }
//   }
//   addCrush() {
//     alert("Hãy nhập thông tin về thương");
//     let name = prompt("Tên");
//     let age = prompt("Tuổi");
//     let address = prompt("Địa chỉ");
//     let favorites = prompt("Sở thích");
//     let appearance = prompt("Ngoại hình");
//     let crush = new Crush(name, age, address, favorites, appearance);
//     this.person.push(crush);
//   }
//   addMyex() {
//     alert("Hãy nhập thông tin về nyc");
//     let name = prompt("Tên");
//     let age = prompt("Tuổi");
//     let address = prompt("Địa chỉ");
//     let appearance = prompt("Ngoại hình");
//     let ex = new Myex(name, age, address, appearance);
//     this.person.push(ex);
//   }
// }

// let inputOwner = prompt("Tên bạn là gì?");
// let personL = [];
// let listperL = new list(inputOwner, personL);
// while (true) {
//   let input = prompt(
//     `Xin chào ${inputOwner}. Hãy lập danh sách về chuyện tình cảm của bạn nào
//     Nhấn 1 để xem
//     Nhấn 2 để thêm thông tin người thương
//     Nhấn 3 để thông tin về nyc
//     `
//   );
//   if (input == "1") {
//     listperL.showAll();
//   } else if (input == "2") {
//     listperL.addCrush();
//   } else if (input == "3") {
//     listperL.addMyex();
//   } else {
//     break;
//   }
// }

// Câu 3
function checkStr(str1, str2) {
  let count1 = [];
  let count2 = [];
  for (let i = 0; i <= 26; i++) {
    count1[i] = 0;
    count2[i] = 0;
  }
  if (str1.length != str2.length) {
    return false;
  }
  for (let i = 0; i < str1.length; i++) {
    count1[str1.charCodeAt(i) - 97]++;
    count2[str2.charCodeAt(i) - 97]++;
  }
  for (let i = 0; i <= 26; i++) {
    if (count1[i] != count2[i]) {
      return false;
    }
  }
  return true;
}
console.log(checkStr("tien", "itne"));
console.log(checkStr("abc", "abb"));
console.log(checkStr("abcd", "abc"));

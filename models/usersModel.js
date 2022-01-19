//'use strict';
//const db = require('./conn'), 
    

// //class UsersModel {
//         constructor(id, parent, first_name, last_name, email, password) {
//             this.id = id;
//             this.parent = parent;
//             this.first_name = first_name;
//             this.last_name = last_name;
//             this.email = email;
//             this.password = password;
//         }
    
//         static async getUsersList() {
//             const response = await db.any(`SELECT * FROM users;`);
//             return response;
//         }

//         static async addUser(first_name, last_name, email, password) {
//             try {
//                 console.log('attempting to add user');
//                 const query = `INSERT INTO users (first_name, last_name, email, password) VALUES ('${first_name}', '${last_name}', '${email}', '${password}') RETURNING id;`;
//                 const response = await db.one(query);
//                 return response;
//             } catch (error) {
//                 return error.message;
//             }
//         }

        
//     checkPassword(hashedPassword) {
//         return bcrypt.compareSync(this.password, hashedPassword);
//     }

//     async login() {
//         try {
//             const query = `SELECT * FROM users WHERE email = '${this.username}';`;
//             const response = await db.one(query);
//             const isValid = this.checkPassword(response.password);
            

//             if (!!isValid) {
//                 const { id, first_name, last_name } = response;
//                 return { isValid, id: id, first_name, last_name };
//             } else {
//                 return { isValid }
//             }
//         } catch (error) {
//             return error.message;
//         }
//     }
// }
// module.exports = UsersModel;
//
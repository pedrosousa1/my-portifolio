// const fs = require("fs");

// export const saveContact = contactDetails => {
//   try {
//     const data = JSON.parse(fs.readFileSync("db.json", "utf8"));
//     data[Date.now()] = contactDetails;
//     fs.writeFileSync("db.json", JSON.stringify(data));
//     return { code: 200 };
//   } catch (err) {
//     console.error(err);
//     return { code: 500 };
//   }
// };

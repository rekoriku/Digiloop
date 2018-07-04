var connection = require('../config/database2')
module.exports = class sqldata {
  constructor() {
    //tobedone
  }

  async querySql(query, values) {
    try {
      if (typeof values == "undefined") {
        let result = await connection(query)
        console.log(query);
        return result
      } else {
        connection(query, values)
        console.log(query);
        console.log(values);
      }
    } catch (error) {
      console.log(error)
    }
  }

  async categoryAccess(category, condition) {
    try {
      if (await condition) {
        return `SELECT * FROM ${category}`
      } else {
        return `SELECT * FROM ${category} WHERE Status = 1`
      }
    } catch (error) {
      console.log(error)
    }
  }

};

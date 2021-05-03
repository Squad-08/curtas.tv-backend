import Sequelize from 'sequelize'
import databaseConfig from '../config/database'
import Movie from '../app/models/Movie'
import Genre from '../app/models/Genre'
const models = [Movie, Genre]

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(databaseConfig)
    models.map((model) => model.init(this.connection))
      .map((model) => {
        if (model.associate) {
          model.associate(this.connection.models)
        }

        return model
      })
  }
}

export default new Database()

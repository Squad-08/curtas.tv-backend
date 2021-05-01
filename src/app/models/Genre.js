import Sequelize, { Model } from 'sequelize'

class Genre extends Model {

    static init(sequelize) {
        super.init(
            {
                id: { primaryKey: true, type: Sequelize.UUID },
                name: Sequelize.STRING(50)
            },
            {
                sequelize,
                tableName: 'genres'
            }
        )

        return this
    }

    static associate(models) {
        this.belongsToMany(models.Movie, {
            through: 'genre_movie',
            foreignKey: 'id_genre',
            as: 'movies'
        })
    }
}

export default Genre

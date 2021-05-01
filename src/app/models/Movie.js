import Sequelize, { Model } from 'sequelize'

class Movie extends Model {

    static init(sequelize) {
        super.init(
            {
                id: { primaryKey: true, type: Sequelize.UUID },
                title: Sequelize.STRING(150),
                sinopse: Sequelize.STRING(500),
                posterUrl: Sequelize.STRING(100),
                videoUrl: Sequelize.STRING(100),
                popularity: Sequelize.INTEGER
            },
            {
                sequelize,
                tableName: 'movies'
            }
        )

        return this
    }

    static associate(model) {
        this.belongsToMany(model.Genre, {
            through: 'genre_movie',
            foreignKey: 'id_movie',
            as: 'genres'
        })
    }
}

export default Movie

import { Sequelize } from 'sequelize'

import Movie from '../app/models/Movie'
import Genre from '../app/models/Genre'

class MoviesRepository {

    async findOne(id) {
        return await Movie.findOne({
            where: {
                id
            }
        })
    }

    async findAllByGenre(genre, limit) {
        return await Movie.findAll({
            attributes: ['id', 'title', 'posterUrl'],
            limit,
            include: [{
                model: Genre,
                as: 'genres',
                attributes: ['name'],
                where: {
                    name: genre
                },
                through: {
                    attributes: []
                }
            }]
        })
    }

    async findAllMaxPopularity(limit) {
        return await Movie.findAll({
            attributes: ['id', 'title', 'thumbnailUrl'],
            limit,
            group: 'id',
            order: Sequelize.literal('max(popularity) DESC')
        })
    }

    async update(id, fields) {
        return await Movie.update(fields, {
            where: {
                id
            }
        })
    }
}

export default MoviesRepository

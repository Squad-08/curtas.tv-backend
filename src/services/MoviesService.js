import { StatusCode } from 'status-code-enum'

import MoviesRepository from '../repositories/MoviesRepository'
import { ErrorHandler } from '../helpers/error'
import utils from '../helpers/utils'

class MoviesService {

    constructor() {
        this.moviesRepository = new MoviesRepository()
        this.defaultLimit = 3
    }

    async findOne(id) {

        this.validateId(id)

        return await this.moviesRepository.findOne(id)
            .then(async movieFound => {
                if (!movieFound) {
                    return { message: 'No movies found with informed id.' }
                }

                movieFound.popularity++

                await this.moviesRepository.update(id, { popularity: movieFound.popularity })

                return movieFound
            })
            .catch(() => {
                return new ErrorHandler(StatusCode.ServerErrorInternal, 'Error search movie by id.')
            })
    }

    async findByGenre(genre, limitOf) {

        genre = this.validateGenre(genre)

        limitOf = this.validateLimit(limitOf)

        const founds = await this.moviesRepository.findAllByGenre(genre, limitOf)
            .catch(() => {
                return new ErrorHandler(StatusCode.ServerErrorInternal, 'Error search by genre.')
            })

        return founds
    }

    async findAllMaxPopularity(limitOf) {

        limitOf = this.validateLimit(limitOf)

        return await this.moviesRepository.findAllMaxPopularity(limitOf)
            .catch(() => {
                return new ErrorHandler(StatusCode.ServerErrorInternal, 'Error when searching for popular movies.')
            })
    }

    validateLimit = (limitOf) => {
        if (!limitOf || 1 > limitOf) {
            limitOf = this.defaultLimit
        }

        return limitOf
    }

    validateGenre = (genre) => {

        if (!genre) {
            throw new ErrorHandler(StatusCode.ClientErrorBadRequest, 'Genre not informed.')
        }

        return utils.capitalized(genre)
    }

    validateId = (id) => {

        if (!id) {
            throw new ErrorHandler(StatusCode.ClientErrorBadRequest, 'Id not informed.')
        } else if (!utils.isUUIDv4(id)) {
            throw new ErrorHandler(StatusCode.ClientErrorBadRequest, 'Id must be uuid v4.')
        }
    }
}

export default MoviesService

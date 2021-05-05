import { StatusCode } from 'status-code-enum'

import MoviesRepository from '../repositories/MoviesRepository'
import { ErrorHandler } from '../helpers/error'
import capitalize from '../helpers/utils'

class MoviesService {

    constructor() {
        this.moviesRepository = new MoviesRepository()
        this.defaultLimit = 3
    }

    async findByGenre(genre, limitOf) {

        genre = await this.validateGenre(genre)

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

        return capitalize(genre)
    }
}

export default MoviesService

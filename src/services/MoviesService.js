import { StatusCode } from 'status-code-enum'

import MoviesRepository from '../repositories/MoviesRepository'
import { ErrorHandler } from '../helpers/error'

class MoviesService {

    constructor() {
        this.moviesRepository = new MoviesRepository()
        this.defaultLimit = 3
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
}

export default MoviesService

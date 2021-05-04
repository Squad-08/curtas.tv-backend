import MoviesRepository from '../repositories/MoviesRepository'
import { ErrorHandler } from '../helpers/error'
import { StatusCode } from 'status-code-enum'

class MoviesService {

    constructor() {
        this.moviesRepository = new MoviesRepository()
        this.defaultLimit = 3
    }

    async findAllMaxPopularity(limitOf) {
        if (!limitOf) {
            limitOf = this.defaultLimit
        }

        return await this.moviesRepository.findAllMaxPopularity(limitOf)
            .catch(() => {
                return new ErrorHandler(StatusCode.ServerErrorInternal, 'Error when searching for popular movies.')
            })
    }
}

export default new MoviesService()

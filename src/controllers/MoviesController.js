import MoviesService from '../services/MoviesService'

class MoviesController {

    async findAllMaxPopularity(request, response) {

        const { limitOf } = request.query

        const moviesService = new MoviesService()

        return response.json(await moviesService.findAllMaxPopularity(limitOf))
    }

    async findByGenre(request, response) {

        const { limitOf } = request.query
        const { genre } = request.params

        const moviesService = new MoviesService()

        return response.json(await moviesService.findByGenre(genre, limitOf))
    }
}

export default MoviesController

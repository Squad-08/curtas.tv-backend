const swaggerAutogen = require('swagger-autogen')()

const doc = {
    info: {
        version: '1.0.0',
        title: 'Curtas.Tv-API',
        description: 'API do Curtas.TV'
    },
    host: `${process.env.SERVER_URL || 'localhost'}:${process.env.SERVER_PORT || 3333}`,
    schemes: ['http'],
    tags: [
        {
            name: 'movie',
            description: 'Endpoints movies.'
        }
    ],
    definitions: {
        PopularMovies: [{
            id: 'c9a1f40a-65bc-420a-abac-4e140396d526',
            title: 'Movie Title',
            thumbnailUrl: "https://m.media-amazon.com/images/M/MV.jpg"
        }],
        Error500: {
            status: 'error',
            statusCode: 500,
            message: 'ErrorMessage'
        }
    }
}

const outputFile = 'src/doc/swagger-output.json'
const endpointsFiles = ['src/routes.js']

swaggerAutogen(outputFile, endpointsFiles, doc)

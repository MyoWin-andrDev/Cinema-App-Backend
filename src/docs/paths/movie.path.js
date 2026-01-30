module.exports = {
    paths: {
        '/movie': {
            get: {
                tags: ['Movies'],
                summary: 'Get now playing movies',
                responses: {
                    200: {
                        description: 'Movie list',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: { $ref: '#/components/schemas/Movie' },
                                },
                            },
                        },
                    },
                },
            },
        },
        '/movie/sync': {
            get: {
                tags: ['Movies'],
                summary: 'Automatically Sync by Uptimer Robot',
                responses: {
                    200: {
                        description: 'Movie list',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: { $ref: '#/components/schemas/Movie' },
                                },
                            },
                        },
                    },
                },
            },
        },
        '/movie/{movieId}/cinema': {
            get: {
                tags: ['Movies'],
                summary: 'Get Cinema by movieId',
                parameters: [
                    {
                        name: 'movieId',
                        in: 'path',
                        required: true,
                        schema: { type: 'string' },
                    },
                ],
                responses: {
                    200: {
                        description: 'Cinema detail',
                        content: {
                            'application/json': {
                                schema: { $ref: '#/components/schemas/Cinema' },
                            },
                        },
                    },
                    404: {
                        description: 'Cinema not found',
                    },
                },
            },
        },
    },
};

module.exports = {
    async redirects() {
        return [
            {
                source: '/perguntas',
                destination: '/faq',
                permanent: true,
            },
        ]
    },
}
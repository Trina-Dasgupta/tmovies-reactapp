const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'e81e4a57c3dc7fa312f9b2317ae344d1',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;
const dev: boolean = process.env.Node_ENV !== 'production'

export const server: string = dev ? 'http://localhost:3000' : 'https://mywebiste.com'
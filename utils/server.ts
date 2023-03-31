const dev = process.env.NODE_ENV !== 'courseion';

export const server = dev ? 'http://localhost:3000' : 'https://live.app';
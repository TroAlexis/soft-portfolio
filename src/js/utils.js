const {BASE_URL} = process.env;

export const formatPublicPath = (path = '') => {
    return path.replace(/\/$/, '');
}

export const withPublicPath = (images) => {
    return images.map((image) => `${formatPublicPath(BASE_URL)}${image}`)
};
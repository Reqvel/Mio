export function getTokenFromUrl(queryString) {
    const urlParams = new URLSearchParams(queryString)
    return urlParams.get('token')
}
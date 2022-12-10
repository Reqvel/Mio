export function getResetTokensFromUrl(queryString) {
    const urlParams = new URLSearchParams(queryString)
    const token = urlParams.get('token')
    const uidb64 = urlParams.get('uidb64')

    return { 'token': token, 'uidb64': uidb64 }
}
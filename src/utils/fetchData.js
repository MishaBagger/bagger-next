const API_URL = 'http://localhost:3000'

export async function fetchData() {
    const response = await fetch(`${API_URL}/api/posts`)

    if (!response.ok) throw new Error('Ошибка получения даты!')

    const data = await response.json()

    return data
}

export async function fetchPost(id) {
    const response = await fetch(
        `${API_URL}/api/posts/${id}`
    )

    if (!response.ok) throw new Error('Ошибка получения даты!')

    const data = await response.json()

    return data
}

export async function fetchPostByQuery(query) {
    const response = await fetch(
        `${API_URL}/api/posts?q=${query}`
    )

    if (!response.ok) throw new Error('Ошибка получения даты!')

    const data = await response.json()

    return data
}

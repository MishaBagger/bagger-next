export async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')

    if (!response.ok) throw new Error('Ошибка получения даты!')

    const data = await response.json()

    return data
}

export async function fetchPost(id) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    )

    if (!response.ok) throw new Error('Ошибка получения даты!')

    const data = await response.json()

    return data
}

export async function fetchPostByQuery(query) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?q=${query}`
    )

    if (!response.ok) throw new Error('Ошибка получения даты!')

    const data = await response.json()

    return data
}

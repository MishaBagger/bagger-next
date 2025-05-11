export async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')

    const data = await response.json()

    return data
}

export async function fetchPost(id) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    )

    const data = await response.json()

    return data
}

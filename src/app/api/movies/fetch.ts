type ResponseType = {
	id: string
	title?: string
}

export async function getMovies(): Promise<ResponseType[]> {
	const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/movies`
	const response = await fetch(url, {
		method: "GET",
	})

	if (!response.ok)
		throw new Error(`HTTP GET: ${url} failed.`)

	return response.json()
}

export async function createMovie({ title }: { title: string }): Promise<ResponseType> {
	const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/movies`
	const response = await fetch(url, {
		method: "POST",
		body: JSON.stringify({ title })
	})

	if (!response.ok)
		throw new Error(`HTTP POST: ${url} failed.`)

	return response.json()
}

export async function getMovie(id: string): Promise<ResponseType> {
	const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/${id}`
	const response = await fetch(url, {
		method: "GET",
	})

	if (!response.ok)
		throw new Error(`HTTP GET: ${url} failed.`)

	return response.json()
}

export async function updateMovie(id: string, { title }: { title: string }): Promise<ResponseType> {
	const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/${id}`
	const response = await fetch(url, {
		method: "PUT",
		body: JSON.stringify({ title })
	})

	if (!response.ok)
		throw new Error(`HTTP PUT: ${url} failed.`)

	return response.json()
}

export async function deleteMovie(id: string): Promise<ResponseType> {
	const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/${id}`
	const response = await fetch(url, {
		method: "DELETE",
	})

	if (!response.ok)
		throw new Error(`HTTP DELETE: ${url} failed.`)

	return response.json()
}
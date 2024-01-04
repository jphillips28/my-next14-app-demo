type MovieResponse = {
	id: string
	title?: string
}

export async function getMovies(): Promise<MovieResponse[]> {
	const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/movies`
	const response = await fetch(url, {
		method: "GET",
	})

	if (!response.ok) {
		const error: { message: string } = await response.json()
		throw new Error(`HTTP GET: ${url} failed. ERROR: ${error.message}`)
	}

	return response.json()
}

export async function createMovie({ title }: { title: string }): Promise<MovieResponse> {
	const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/movies`
	const response = await fetch(url, {
		method: "POST",
		body: JSON.stringify({ title })
	})

	if (!response.ok) {
		const error: { message: string } = await response.json()
		throw new Error(`HTTP POST: ${url} failed. ERROR: ${error.message}`)
	}

	return response.json()
}

export async function getMovie(id: string): Promise<MovieResponse> {
	const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/${id}`
	const response = await fetch(url, {
		method: "GET",
	})

	if (!response.ok) {
		const error: { message: string } = await response.json()
		throw new Error(`HTTP GET: ${url} failed. ERROR: ${error.message}`)
	}

	return response.json()
}

export async function putMovie(id: string, { title }: { title: string }): Promise<MovieResponse> {
	const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/${id}`
	const response = await fetch(url, {
		method: "PUT",
		body: JSON.stringify({ title })
	})

	if (!response.ok) {
		const error: { message: string } = await response.json()
		throw new Error(`HTTP PUT: ${url} failed. ERROR: ${error.message}`)
	}

	return response.json()
}

export async function deleteMovie(id: string): Promise<MovieResponse> {
	const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/${id}`
	const response = await fetch(url, {
		method: "DELETE",
	})

	if (!response.ok) {
		const error: { message: string } = await response.json()
		throw new Error(`HTTP DELETE: ${url} failed. ERROR: ${error.message}`)
	}

	return response.json()
}
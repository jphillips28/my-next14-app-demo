export async function getMovies(): Promise<{ id: string, title: string }[]> {
	const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/movies`
	const response = await fetch(url, {
		method: "GET",
	})

	if (!response.ok)
		throw new Error(`HTTP GET: ${url} failed.`)

	return response.json()
}

export async function createMovie({ title }: { title: string }): Promise<{ id: string, title: string }> {
	const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/movies`
	const response = await fetch(url, {
		method: "POST",
		body: JSON.stringify({ title })
	})

	if (!response.ok)
		throw new Error(`HTTP POST: ${url} failed.`)

	return response.json()
}

export async function getMovie(id: string): Promise<{ id: string, title: string }> {
	const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/${id}`
	const response = await fetch(url, {
		method: "GET",
	})

	if (!response.ok)
		throw new Error(`HTTP GET: ${url} failed.`)

	return response.json()
}
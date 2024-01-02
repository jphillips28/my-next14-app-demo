import { prisma } from "@/db"
import { NextResponse } from "next/server"

export async function GET() {
	try {
		const result = await prisma.movie.findMany({
			select: { id: true, title: true },
		})
		return NextResponse.json(result)
	} catch (error) {
		return NextResponse.json({ message: `${error}` }, { status: 500 })
	}
}

export async function POST(request: Request) {
	const { title } = await request.json()

	if (title == null) {
		return NextResponse.json({ message: "Movie prop 'title' cannot be null or undefined." }, { status: 400 })
	}

	try {
		const result = await prisma.movie.create({
			data: { title: title },
			select: { id: true, title: true }
		})
		return NextResponse.json(result, { status: 201 });
	} catch (error) {
		return NextResponse.json({ message: `${error}` }, { status: 500 })
	}
}
import { prisma } from "@/db"
import { NextRequest, NextResponse } from "next/server"

export async function GET() {
	// Simulating a long running transaction
	await new Promise(resolve => setTimeout(resolve, 2000))

	try {
		const result = await prisma.movie.findMany({
			select: { id: true, title: true },
		})
		return NextResponse.json(result)
	} catch (error) {
		return NextResponse.json({ message: `${error}` }, { status: 500 })
	}
}

export async function POST(request: NextRequest) {
	// Simulating a long running transaction
	await new Promise(resolve => setTimeout(resolve, 2000))

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
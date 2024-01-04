import { prisma } from "@/db"
import { NextRequest, NextResponse } from "next/server"

export async function GET(_: NextRequest, { params }: { params: any }) {
	// Simulating a long running transaction
	await new Promise(resolve => setTimeout(resolve, 2000))

	const { id } = params

	try {
		const result = await prisma.movie.findUnique({
			where: { id: id as string },
			select: { id: true, title: true },
		})
		if (result == null) {
			return NextResponse.json({ message: `Movie with 'id': '${id}' was not found.` }, { status: 404 })
		}
		return NextResponse.json(result)
	} catch (err) {
		return NextResponse.json({ message: `${err}` }, { status: 500 })
	}
}

export async function PUT(request: NextRequest, { params }: { params: any }) {
	// Simulating a long running transaction
	await new Promise(resolve => setTimeout(resolve, 2000))

	const { id } = params
	const { title } = await request.json()
	if (title == null) {
		return NextResponse.json({ message: "Movie prop 'title' cannot be null or undefined." }, { status: 400 })
	}

	try {
		const result = await prisma.movie.update({
			where: { id: id },
			data: { title: title },
			select: { id: true, title: true },
		})
		return NextResponse.json(result)
	} catch (err) {
		return NextResponse.json({ message: `${err}` }, { status: 500 })
	}
}

export async function DELETE(_: NextRequest, { params }: { params: any }) {
	// Simulating a long running transaction
	await new Promise(resolve => setTimeout(resolve, 2000))

	const { id } = params

	try {
		const result = await prisma.movie.delete({
			where: { id: id },
			select: { id: true, title: true },
		})
		return NextResponse.json(result)
	} catch (err) {
		return NextResponse.json({ message: `${err}` }, { status: 500 })
	}
}
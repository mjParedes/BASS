import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcrypt"

export async function GET() {
	const users = await prisma.user.findMany()
	return NextResponse.json(users)
}

export async function POST(request: Request) {
	const { name, email, password } = await request.json()

	if (!password || password.trim().length < 8) {
		return NextResponse.json(
			{ error: 'Password must be at least 8 characters long' },
			{ status: 400 }
		)
	}

	const hashedPassword = await bcrypt.hash(password, 10)

	const user = await prisma.user.create({
		data: { name, email, password: hashedPassword },
	})
	return NextResponse.json(user, { status: 201 })
}

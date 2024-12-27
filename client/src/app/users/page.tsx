import UserList from "@/components/UserList"

async function fetchUsers() {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
		cache: 'no-store',
		method: 'GET',
	})
	if (!response.ok) throw new Error('Failed to fetch users')
	return response.json()
}

export default async function UsersPage() {
	const users = await fetchUsers()
	console.log(users)

	return (
		<div>
			<h1>Users</h1>
			<UserList users={users} />
		</div>
	)
}

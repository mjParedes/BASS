
interface UserProps {
	name: string
}

export default function UserList({ users }: { users: UserProps[] }) {
	return (
		<ul>
			{users.map((user, idx) => (
				<li key={idx}>
					{user.name}
				</li>
			))}
		</ul>
	)
}


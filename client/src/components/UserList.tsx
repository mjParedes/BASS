
export default function UserList({ users }: { users: any[] }) {
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


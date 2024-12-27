export const ROLES = {
	ADMIN: 'admin',
	USER: 'user',
}

export const PERMISSIONS = {
	VIEW_PRODUCTS: ['admin', 'user'],
	EDIT_PRODUCTS: ['admin'],
	MANAGE_USERS: ['admin']
}

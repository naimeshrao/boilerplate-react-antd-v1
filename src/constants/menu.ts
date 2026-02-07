import type { MenuItemType } from 'antd/es/menu/interface'

export const APP_MENUS = [
  { key: 'dashboard', label: 'Dashboard', route: '/dashboard' },
  { key: 'users', label: 'Users', route: '/users' },
  { key: 'settings', label: 'Settings', route: '/settings' },
  { key: 'profile', label: 'Profile', route: '/profile' },
  { key: 'logout', label: 'Logout', route: '/logout' }
] as const satisfies readonly (MenuItemType & { route: string })[]

export type MenuKey = (typeof APP_MENUS)[number]['key']

// Usage: <Menu items={APP_MENUS} />

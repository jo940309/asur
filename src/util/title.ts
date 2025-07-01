import { navItems } from '../config/nav';

export function getTitleById(id: string): string {
  const item = navItems.find((item) => item.id === id);
  return item ? item.label : '未知頁面';
}

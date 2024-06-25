export interface MenuItem {
  icon?: string; // 图标
  title?: string; // 悬浮提示
  subMenu?: MenuItem[]; // 子菜单
  path?: string; // 路由
  foldTitle?: string; // 折叠后的名称
}

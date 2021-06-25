import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('src/pages/HomePage.vue')
      }
    ]
  },
  {
    path: '/wing',
    component: () => import('layouts/WingLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: 'right',
        name: 'RightWing',
        component: () => import('src/pages/RightWingPage.vue')
      },
      {
        path: 'left',
        name: 'LeftWing',
        component: () => import('src/pages/LeftWingPage.vue')
      }
    ]
  },
  {
    path: '/cockpit',
    component: () => import('layouts/CockpitLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'Cockpit',
        component: () => import('src/pages/CockpitPage.vue')
      },
      {
        path: 'init',
        name: 'InitCockpit',
        component: () => import('src/pages/InitCockpitPage.vue')
      },
      {
        path: 'win',
        name: 'Win',
        component: () => import('src/pages/WinPage.vue')
      },
      {
        path: 'loose',
        name: 'Loose',
        component: () => import('src/pages/LoosePage.vue')
      }
    ]
  },
  {
    path: '/auth',
    component: () => import('layouts/MainLayout.vue'),
    meta: { requiresLogout: true },
    children: [
      {
        path: '',
        name: 'Auth',
        component: () => import('pages/Auth.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

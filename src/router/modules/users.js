export default [
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "users" */ "@/views/Users/Users.vue"),

    children: [
      {
        name: "Usuários",
        path: "",
        component: () =>
          import(
            /* webpackChunkName: "userslist" */ "@/views/Users/UsersList.vue"
          )
      },
      {
        name: "Novo usuário",
        path: "/usuarios/novo",
        component: () =>
          import(/* webpackChunkName: "adduser" */ "@/views/Users/AddUser.vue")
      },
      {
        name: "Editar usuário",
        path: "/usuarios/editar",
        component: () =>
          import(
            /* webpackChunkName: "edituser" */ "@/views/Users/EditUser.vue"
          )
      }
    ]
  }
];

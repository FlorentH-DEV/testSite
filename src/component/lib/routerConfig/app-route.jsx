import ChaletOne from "../../chaletOne/ChaletOne";
import SelectChalet from "../../SelectChalet";

const routeGeneral = [
  {
      path: '/',
      exact: true,
      component: () => (<SelectChalet/>)
  },
  {
    path: '/chalet1',
    exact: true,
    component: () => (<ChaletOne/>)
  }
]
/* Déclaration des tableau de routes */
const routeApp = [
  routeGeneral
]

/* Reconstruction d'un tableau de route unique */
let routes = []
routeApp.forEach(varRoute => {
  varRoute.forEach((route) => {
    routes.push(route)
  })
});

export default routes;


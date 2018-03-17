import {UIRouter} from "@uirouter/angular";
import {Injector} from "@angular/core";
//import {PeopleService} from "../services/users.js"

/** UIRouter Config  */
export function uiRouterConfigFn(router: UIRouter, injector: Injector) {
  //const usersService = injector.get(UsersService);

  // Plunker embeds can time out.
  // Pre-load the people list at startup.
  // usersService.getUsers();

  // If no URL matches, go to the `hello` state by default
  router.urlService.rules.otherwise({ state: 'users' });
}

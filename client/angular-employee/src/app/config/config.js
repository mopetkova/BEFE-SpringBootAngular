/** UIRouter Config  */
import {EmployeeService} from "../employee.service";
import {Injector} from "@angular/core/esm2015/src/di/injector";


export function uiRouterConfigFn(
  // router: UIRouter,
  // injector: Injector
) {
  // const employeeService = injector.get(EmployeeService);

  // Plunker embeds can time out.
  // Pre-load the people list at startup.
  // employeeService.getEmployees();

  // If no URL matches, go to the `hello` state by default
  // router.urlService.rules.otherwise({ state: 'index' });

  // Use ui-router-visualizer to show the states as a tree
  // StateTree.create(router, document.getElementById('statetree'), { width: 200, height: 100 });
}

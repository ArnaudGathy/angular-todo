import { Routes } from '@angular/router';
import { ListComponent } from 'src/app/components/list/list.component';
import { AddComponent } from 'src/app/components/add/add.component';

const routeConfig: Routes = [
  {
    path: '',
    component: ListComponent,
    title: 'TODO List',
  },
  {
    path: 'add',
    component: AddComponent,
    title: 'Add a TODO',
  },
];

export default routeConfig;

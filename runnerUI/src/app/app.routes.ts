import { Routes } from '@angular/router';
import { RunListComponent } from './pages/run-list/run-list.component';
import { RunModifyComponent } from 'C:/Users/Cole/Documents/Programming/runnerUI/src/app/pages/runmodify/runmodify.component';

export const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: RunListComponent
  },
{
  path: 'runmodify',
  component: RunModifyComponent
    }];

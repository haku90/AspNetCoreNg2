import { Routes, RouterModule } from '@angular/router';
import { TestModule } from './test/test.module'

const routes: Routes = [
   { path: '', loadChildren: () => TestModule },
//    { path: '**', component: PageNotFoundComponent }
];


export const appRouting =  RouterModule.forRoot(routes);
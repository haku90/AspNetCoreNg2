import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test.component'

const routes: Routes = [
   { path: '', component: TestComponent },
//    { path: '**', component: PageNotFoundComponent }
];


export const testRouting =  RouterModule.forRoot(routes);

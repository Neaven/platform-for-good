import { ProjectsPageComponent } from './projects-page.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [ {path:'',component:ProjectsPageComponent,data:{shouldReuse:true,key:'projects'}},  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsPageRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { FirstComponent } from './tasks/assignment_five/first/first.component';
import { SecondComponent } from './tasks/assignment_five/second/second.component';
import { ThirdComponent } from './tasks/assignment_five/third/third.component';
import { FourthComponent } from './tasks/assignment_five/fourth/fourth.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { ParentComponent } from './components/parent-child/parent/parent.component';
import { ParentTaskComponent } from './tasks/assignment_five/Feb-07/parent-task/parent-task.component';
import { BootstrapComponent } from './components/bootstrap/bootstrap.component';
import { AngularMaterialComponent } from './components/angular-material/angular-material.component';

const routes: Routes = [
  {path: "interpolation", component:InterpolationComponent},
  {path: "property-binding", component:PropertyBindingComponent},
  {path: "event-binding", component:EventBindingComponent},
  {path: "two-way-binding", component:TwoWayBindingComponent},
  {path: "pipe", component:PipeComponent},
  {path: "ordinal-numbers",component:FirstComponent},
  {path: "MR-MISS",component:SecondComponent},
  {path: "search_object",component:ThirdComponent},
  {path: "built-in-pipe",component:FourthComponent},
  {path: "directive",component:DirectiveComponent},
  {path: "parent",component:ParentComponent},
  {path: "parent_task",component:ParentTaskComponent},
  {path: "bootstrap",component:BootstrapComponent},
  {path: "angular-material",component:AngularMaterialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

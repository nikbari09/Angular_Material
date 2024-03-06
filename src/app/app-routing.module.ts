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
import { HooksComponent } from './components/hooks/hooks.component';
import { ParentOnchangeComponent } from './components/hooks/onchange/parent-onchange/parent-onchange.component';
import { ParentOninitComponent } from './components/hooks/oninit/parent-oninit/parent-oninit.component';
import { ParentDocheckComponent } from './components/hooks/docheck/parent-docheck/parent-docheck.component';
import { ParentAfterContentInitComponent } from './components/hooks/after-content-init/parent-after-content-init/parent-after-content-init.component';
import { ParentAfterContentCheckedComponent } from './components/hooks/after-content-checked/parent-after-content-checked/parent-after-content-checked.component';
import { ParentAfterViewInitComponent } from './components/hooks/after-view-init/parent-after-view-init/parent-after-view-init.component';
import { ParentAfterViewCheckedComponent } from './components/hooks/after-view-checked/parent-after-view-checked/parent-after-view-checked.component';
import { ParentOndestroyComponent } from './components/hooks/ondestroy/parent-ondestroy/parent-ondestroy.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { ModelDrivenFormComponent } from './components/model-driven-form/model-driven-form.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { HomeComponent } from './components/home/home.component';
import { TimeComponent } from './components/time/time.component';

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
  {path: "angular-material",component:AngularMaterialComponent},
  {path: "hooks", component:HooksComponent},
  {path: "parent-onchange", component:ParentOnchangeComponent},
  {path: "parent-oninit", component:ParentOninitComponent},
  {path: "parent-docheck", component:ParentDocheckComponent},
  {path: "parent-after-content-init", component:ParentAfterContentInitComponent},
  {path: "parent-after-content-checked", component:ParentAfterContentCheckedComponent},
  {path: "parent-after-view-init", component:ParentAfterViewInitComponent},
  {path: "parent-after-view-checked", component:ParentAfterViewCheckedComponent},
  {path: "parent-ondestroy", component:ParentOndestroyComponent},
  {path: "template-driven-form", component:TemplateDrivenFormComponent},
  {path: "model-driven-form", component:ModelDrivenFormComponent},
  {path: "dynamic-form", component:DynamicFormComponent},
  {path: "home", component:HomeComponent},
  {path: "time", component:TimeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule,Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { RemainingPipe } from './components/pipe/customize_pipe/remaining.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MysortPipe } from './components/pipe/customize_pipe/mysort.pipe';
import { FirstComponent } from './tasks/assignment_five/first/first.component';
import { SecondComponent } from './tasks/assignment_five/second/second.component';
import { OrdinalPipe } from './tasks/assignment_five/custome_pipe/ordinal.pipe';
import { PrepipePipe } from './tasks/assignment_five/custome_pipe/prepipe.pipe';
import { ThirdComponent } from './tasks/assignment_five/third/third.component';
import { SearchTermPipe } from './tasks/assignment_five/custome_pipe/search-term.pipe';
import { FourthComponent } from './tasks/assignment_five/fourth/fourth.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { TextHighlightDirective } from './components/directive/custome_directive/text-highlight.directive';
import { ParentComponent } from './components/parent-child/parent/parent.component';
import { Child1Component } from './components/parent-child/child1/child1.component';
import { Child2Component } from './components/parent-child/child2/child2.component';
import { ParentTaskComponent } from './tasks/assignment_five/Feb-07/parent-task/parent-task.component';
import { Child1TaskComponent } from './tasks/assignment_five/Feb-07/child1-task/child1-task.component';
import { Child2TaskComponent } from './tasks/assignment_five/Feb-07/child2-task/child2-task.component';
import { BootstrapComponent } from './components/bootstrap/bootstrap.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialComponent } from './components/angular-material/angular-material.component';

import {MatIconModule} from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';

import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { HooksComponent } from './components/hooks/hooks.component';
import { ChildComponent } from './components/hooks/onchange/child/child.component';
import { ParentOnchangeComponent } from './components/hooks/onchange/parent-onchange/parent-onchange.component';
import { ParentOninitComponent } from './components/hooks/oninit/parent-oninit/parent-oninit.component';
import { ChildOninitComponent } from './components/hooks/oninit/child-oninit/child-oninit.component';
import { ParentDocheckComponent } from './components/hooks/docheck/parent-docheck/parent-docheck.component';
import { ChildDocheckComponent } from './components/hooks/docheck/child-docheck/child-docheck.component';
import { ParentAfterContentInitComponent } from './components/hooks/after-content-init/parent-after-content-init/parent-after-content-init.component';
import { ChildAfterContentInitComponent } from './components/hooks/after-content-init/child-after-content-init/child-after-content-init.component';
import { ParentAfterContentCheckedComponent } from './components/hooks/after-content-checked/parent-after-content-checked/parent-after-content-checked.component';
import { ChildAfterContentCheckedComponent } from './components/hooks/after-content-checked/child-after-content-checked/child-after-content-checked.component';
import { ParentAfterViewInitComponent } from './components/hooks/after-view-init/parent-after-view-init/parent-after-view-init.component';
import { ChildAfterViewInitComponent } from './components/hooks/after-view-init/child-after-view-init/child-after-view-init.component';
import { ParentAfterViewCheckedComponent } from './components/hooks/after-view-checked/parent-after-view-checked/parent-after-view-checked.component';
import { ChildAfterViewCheckedComponent } from './components/hooks/after-view-checked/child-after-view-checked/child-after-view-checked.component';
import { ParentOndestroyComponent } from './components/hooks/ondestroy/parent-ondestroy/parent-ondestroy.component';
import { ChildOndestroyComponent } from './components/hooks/ondestroy/child-ondestroy/child-ondestroy.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { ModelDrivenFormComponent } from './components/model-driven-form/model-driven-form.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    PipeComponent,
    RemainingPipe,
    MysortPipe,
    FirstComponent,
    SecondComponent,
    OrdinalPipe,
    PrepipePipe,
    ThirdComponent,
    SearchTermPipe,
    FourthComponent,
    DirectiveComponent,
    TextHighlightDirective,
    ParentComponent,
    Child1Component,
    Child2Component,
    ParentTaskComponent,
    Child1TaskComponent,
    Child2TaskComponent,
    BootstrapComponent,
    AngularMaterialComponent,
    HooksComponent,
    ChildComponent,
    ParentOnchangeComponent,
    ParentOninitComponent,
    ChildOninitComponent,
    ParentDocheckComponent,
    ChildDocheckComponent,
    ParentAfterContentInitComponent,
    ChildAfterContentInitComponent,
    ParentAfterContentCheckedComponent,
    ChildAfterContentCheckedComponent,
    ParentAfterViewInitComponent,
    ChildAfterViewInitComponent,
    ParentAfterViewCheckedComponent,
    ChildAfterViewCheckedComponent,
    ParentOndestroyComponent,
    ChildOndestroyComponent,
    TemplateDrivenFormComponent,
    ModelDrivenFormComponent,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule, 
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatChipsModule,
    MatSidenavModule,
    MatExpansionModule,
    MatTooltipModule,
    MatListModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

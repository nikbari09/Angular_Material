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
import { FormsModule } from '@angular/forms';
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
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';

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
    AngularMaterialComponent
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
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

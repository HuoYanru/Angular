import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { GoodslistComponent } from './components/goodslist/goodslist.component';
import { VoterComponent } from './components/voter/voter.component';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    GoodslistComponent,
    VoterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

FormsModule
RouterModule.forRoot;{[
  {path:'todolist/:id/:num',component:TodolistComponent},
  {path:'goodslist',GoodslistComponent},
  {path:'voter',component:VoterComponent},
  // {path:'gooddetail',component},
  {path:'',redirectTo:'home',pathMatch:'full'},
  // {path:'**',component:NopageComponent}
]};

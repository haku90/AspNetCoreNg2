import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { AppService } from './app.service'
import { CommonModule } from '../commons/common.module'
import { TestModule } from './test/test.module'

@NgModule({
    imports: [ BrowserModule, CommonModule, HttpModule, TestModule, RouterModule],
    providers:[ AppService],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }

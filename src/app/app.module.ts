import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { ChartsModule } from 'ng2-charts';
import { AceEditorModule } from 'ng2-ace-editor';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { FormComponent } from './form/form.component';
import { AvatarComponent } from './avatar/avatar.component';
import { SpinComponent } from './spin/spin.component';
import { EditorComponent } from './editor/editor.component';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import {RoutesModule} from './routes/routes.module';

registerLocaleData(zh);

@NgModule({
  imports: [
    BrowserModule,
    RoutesModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    ChartsModule,
    AceEditorModule,
    HttpClientModule,
    NgZorroAntdModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    DashboardComponent,
    UsersComponent,
    FormComponent,
    AvatarComponent,
    SpinComponent,
    EditorComponent
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }], // 根模块引入服务TranslateService
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}

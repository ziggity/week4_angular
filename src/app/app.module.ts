import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { MembersComponent } from './members/members.component';
import { NewMemberComponent } from './new-member/new-member.component';
import { RoleFilterPipe } from './role-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AdminComponent,
    EditMemberComponent,
    MembersComponent,
    NewMemberComponent,
    RoleFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

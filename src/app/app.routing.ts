import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { MembersComponent } from './members/members.component';
import { NewMemberComponent } from './new-member/new-member.component';
import { RoleFilterPipe } from './role-filter.pipe';
import { BookComponent } from './book/book.component';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'books/:id',
    component: BookComponent
  },
  {
    path: 'members/:id',
    component: MembersComponent
  },
  {
    path: 'editmember/:id',
    component: EditMemberComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

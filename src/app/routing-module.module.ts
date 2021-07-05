import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoleGuardService } from './role-guard.service';
import { PrestitiComponent } from './prestiti/prestiti.component';
import { LibriComponent } from './libri/libri.component';

import { LibriCreateComponent } from './libri-create/libri-create.component';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserDataComponent } from './user-data/user-data.component';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuardService } from './route-guard.service';
import { EditoriComponent } from './editori/editori.component';
import { AutoriComponent } from './autori/autori.component';
import { EditoriDetailComponent } from './editori-detail/editori-detail.component';
import { AutoriDetailComponent } from './autori-detail/autori-detail.component';
import { AutoriCreateComponent } from './autori-create/autori-create.component';
import { EditoriCreateComponent } from './editori-create/editori-create.component';




import { PrestitiCreateComponent } from './prestiti-create/prestiti-create.component';
import { PrestitiDetailComponent } from './prestiti-detail/prestiti-detail.component';

import { LibriDetailComponent } from './libri-detail/libri-detail.component';
import { NavAdminComponent } from './nav-admin/nav-admin.component';

import { Role } from './interface/role';
import { BookComponent } from './book/book.component';
import { RichiesteComponent } from './richieste/richieste.component';
import { RichiesteDetailComponent } from './richieste-detail/richieste-detail.component';
import { RichiesteUserComponent } from './richieste-user/richieste-user.component';
import { TestComponent } from './test/test.component';





const routes: Routes = [
  {
    path:'admin/users',
    component: UsersComponent,
    canActivate : [RouteGuardService,
      RoleGuardService
    ],
    data: {
      role: 'admin'
    }
  },

  {
    path:'',
    pathMatch:'full',
    redirectTo: 'dashboard'
  },

  {
    path:'admin/users/new',
    component: UserDetailComponent,
    canActivate : [RouteGuardService,
      RoleGuardService
    ],
    data: {
      role: 'admin'
    }

  },

  {
    path:'admin/users/:id/edit',
    component: UserDetailComponent,
    canActivate : [RouteGuardService,
      RoleGuardService
    ],
    data: {
      role: 'admin'
    }
  },

  {
    path:'admin/users/:id',
    component: UserDataComponent,
    canActivate : [RouteGuardService,
      RoleGuardService
    ],
    data: {
      role: 'admin'
    }
  },


  {
    path:'utente/:id',
    component: UserDetailComponent,
    

  },


  {
    path:'test',
    component: TestComponent,
    canActivate : [RouteGuardService],

  },




  {
    path:'login',
    component: LoginComponent,
    pathMatch: 'full'
  },

  {
    path:'signup',
    component: SignupComponent,
    pathMatch: 'full'
  },
  {
    path:'admin/editori',
    component: EditoriComponent,
    canActivate : [RouteGuardService,
      RoleGuardService
    ],
    data: {
      role: 'admin'
    }
  },
  { path : 'editori/:id' ,
  component : EditoriDetailComponent,
  canActivate : [RouteGuardService,
      RoleGuardService
    ],
    data: {
      role: 'admin'
    }
  },
  {
    path:'admin/autori',
    component: AutoriComponent,
    canActivate : [RouteGuardService,
      RoleGuardService
    ],
    data: {
      role: 'admin'
    },

  },

  {
    path:'dashboard',
    component: DashboardComponent,
    canActivate : [RouteGuardService],

  },

  {
    path:'book/:id',
    component: BookComponent,
    canActivate : [RouteGuardService],
  },

  { path : 'autori/:id' ,
  component : AutoriDetailComponent,
  canActivate : [RouteGuardService,
    RoleGuardService
  ],
  data: {
    role: 'admin'
  }
  },

  { path : 'admin/autorinew' ,
  component : AutoriCreateComponent,
  canActivate : [RouteGuardService,
    RoleGuardService
  ],
  data: {
    role: 'admin'
  }
  },

  { path : 'admin/editorinew' ,
  component : EditoriCreateComponent,
  canActivate : [RouteGuardService,
    RoleGuardService
  ],
  data: {
    role: 'admin'
  }
  },

  { path : 'admin/libri' ,
  component : LibriComponent,
  canActivate : [RouteGuardService,
    RoleGuardService
  ],
  data: {
    role: 'admin'
  }
  },

  { path : 'admin/libri/:id' ,
  component : LibriDetailComponent,
  canActivate : [RouteGuardService,
    RoleGuardService
  ],
  data: {
    role: 'admin'
  }
  },

  { path : 'admin/librinew' ,
  component : LibriCreateComponent,
  canActivate : [RouteGuardService,
    RoleGuardService
  ],
  data: {
    role: 'admin'
  }
  },

  { path : 'admin/prestiti' ,
  component : PrestitiComponent,
  canActivate : [RouteGuardService,
    RoleGuardService
  ],
  data: {
    role: 'admin'
  }
  },

  { path : 'admin/prestitinew' ,
  component : PrestitiCreateComponent,
  canActivate : [RouteGuardService,
    RoleGuardService
  ],
  data: {
    role: 'admin'
  }
  },

  { path : 'prestiti/:id' ,
  component : PrestitiDetailComponent,
  canActivate : [RouteGuardService,
    RoleGuardService
  ],
  data: {
    role: 'admin'
  }
  },

  { path : 'admin' ,
  component : NavAdminComponent,
  canActivate : [RouteGuardService]
  },

  { path : 'admin/richieste' ,
  component : RichiesteComponent,
  canActivate : [RouteGuardService,
    RoleGuardService
  ],
  data: {
    role: 'admin'
  }
  },

  { path : 'richieste/:id' ,
  component : RichiesteDetailComponent,
  canActivate : [RouteGuardService,
    RoleGuardService
  ],
  data: {
    role: 'admin'
  }
  },


  { path : 'richiesta' ,
  component : RichiesteUserComponent,
  canActivate : [RouteGuardService,],
  },


]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
  providers: [
    RouteGuardService
  ],

})
export class RoutingModuleModule { }

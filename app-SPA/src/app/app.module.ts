import { AccountEditComponent } from './accounts/account-edit/account-edit.component';
import { AccountViewComponent } from './accounts/account-view/account-view.component';
import { AccountListComponent } from './accounts/account-list/account-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule, MatInputModule, MatCardModule, MatDividerModule,
  MatToolbarModule, MatExpansionModule, MatIconModule, MatSidenavModule, MatListModule, MatMenuModule,
  MatTableModule, MatPaginatorModule, MatSortModule, MatProgressBarModule
} from '@angular/material';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostService } from './_services/post.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './posts/post/post.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { AccountComponent } from './accounts/account/account.component';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      PostComponent,
      PostCreateComponent,
      PostListComponent,
      HomeComponent,
      AccountComponent,
      AccountListComponent,
      AccountViewComponent,
      AccountEditComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatInputModule,
      MatCardModule,
      MatDividerModule,
      MatToolbarModule,
      MatExpansionModule,
      MatIconModule,
      FlexLayoutModule,
      MatSidenavModule,
      MatListModule,
      MatMenuModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      MatProgressBarModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      PostService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

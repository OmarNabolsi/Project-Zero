import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule, MatInputModule, MatCardModule, MatDividerModule,
  MatToolbarModule, MatExpansionModule, MatIconModule, MatSidenavModule, MatListModule, MatMenuModule
} from '@angular/material';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostService } from './_services/post.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './posts/post/post.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      PostComponent,
      PostCreateComponent,
      PostListComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      FormsModule,
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
      RouterModule.forRoot(appRoutes),
   ],
   providers: [
      PostService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

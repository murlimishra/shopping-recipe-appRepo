import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './COMPONENTS/navbar/navbar.component';
import { ShoppingListComponent } from './COMPONENTS/SHOPPING-LIST-MODULE/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './COMPONENTS/SHOPPING-LIST-MODULE/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './COMPONENTS/RECIPE-BOOK-MODULE/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './COMPONENTS/RECIPE-BOOK-MODULE/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './COMPONENTS/RECIPE-BOOK-MODULE/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './COMPONENTS/RECIPE-BOOK-MODULE/recipes/recipes.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

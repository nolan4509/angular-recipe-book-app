import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header.component';
import { RecipesComponent } from './Components/RecipeBook/recipes/recipes.component';
import { RecipeDetailComponent } from './Components/RecipeBook/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './Components/RecipeBook/recipe-item/recipe-item.component';
import { RecipeListComponent } from './Components/RecipeBook/recipe-list/recipe-list.component';
import { EditShoppingListComponent } from './Components/ShoppingList/edit-shopping-list/edit-shopping-list.component';
import { ShoppingListComponent } from './Components/ShoppingList/shopping-list/shopping-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeListComponent,
    EditShoppingListComponent,
    ShoppingListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    // HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

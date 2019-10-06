import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { RecipesItemlComponent } from "./recipes/recipes-list/recipes-iteml/recipes-iteml.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipesDetailComponent } from "./recipes/recipes-detail/recipes-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";


const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes',pathMatch:'full' },
    { path: 'recipes', component: RecipesComponent, children:[
        {path:'',component:RecipeStartComponent},
        {path:'new',component:RecipeEditComponent},
         {path:':id',component:RecipesDetailComponent},
         {path:':id/edit',component:RecipeEditComponent},
    ] },
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: 'something', component: ErrorPageComponent, data: { message: 'Hey I did this my own BTW the page is not found :)' } },
    { path: '**', redirectTo: 'something' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]

})
export class AppRoutingModule { } 
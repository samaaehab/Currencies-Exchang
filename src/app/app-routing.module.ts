import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componants/home/home.component';
import { DetailsComponent } from './componants/details/details.component';

const routes: Routes = [
  /*{path: 'veiw/:pId', component:ViewComponent},*/
  {path: '', component:HomeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'details/:cSymbol', component:DetailsComponent},
  {path: 'details/:cSymbol/:cTpSymbol', component:DetailsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

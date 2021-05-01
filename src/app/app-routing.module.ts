import { ContentViewerComponent } from './content-viewer/content-viewer.component';
import { ShowSpecificFolderTokenComponent } from './show-specific-folder-token/show-specific-folder-token.component';
import { ShowFileStatsComponent } from './show-file-stats/show-file-stats.component';
import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpecificPageComponentComponent } from './specific-page-component/specific-page-component.component';




const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component: StartPageComponent},
  {path: 'folderInsight/:directory', component : SpecificPageComponentComponent},
  {path: 'openContent/:textFile', component : ContentViewerComponent}
  //{path: 'showFileStats', component: ShowFileStatsComponent, outlet: 'childRouterSpace'},
      //{path: '**',redirectTo: 'folderInsight', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

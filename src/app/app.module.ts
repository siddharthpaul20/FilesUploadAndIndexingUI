import { ContentViewerService } from './content-viewer/content-viewer.service';
import { ShowDirectoryThatAreAlreadyIndexedService } from './show-directory-that-are-already-indexed/show-directory-that-are-already-indexed.service';
import { FileInputService } from './file-input/file-input.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileInputComponent } from './file-input/file-input.component';
import { ShowTokenInputComponent } from './show-token-input/show-token-input.component';
import { ShowTokenInputService } from './show-token-input/show-token-input.service';
import { SearchAKeywordInCompleteComponent } from './search-a-keyword-in-complete/search-a-keyword-in-complete.component';
import { SearchAKeywordInCompleteService } from './search-a-keyword-in-complete/search-a-keyword-in-complete.service';
import { ShowDirectoryThatAreAlreadyIndexedComponent } from './show-directory-that-are-already-indexed/show-directory-that-are-already-indexed.component';
import { UploadFolderForIndexingFormComponent } from './upload-folder-for-indexing-form/upload-folder-for-indexing-form.component';
import { SearchFileFolderWholeComponent } from './search-file-folder-whole/search-file-folder-whole.component';
import { SpecificPageComponentComponent } from './specific-page-component/specific-page-component.component';
import { StartPageComponent } from './start-page/start-page.component';
import { ShowFileStatsComponent } from './show-file-stats/show-file-stats.component';
import { ShowSpecificFolderTokenComponent } from './show-specific-folder-token/show-specific-folder-token.component';
import { ShowFileStatsService } from './show-file-stats/show-file-stats.service';
import { ShowTokenSpecificEfficientComponent } from './show-token-specific-efficient/show-token-specific-efficient.component';
import { SearchFileFolderSpecificComponent } from './search-file-folder-specific/search-file-folder-specific.component';
import { SortByFileNameSpecificComponent } from './sort-by-file-name-specific/sort-by-file-name-specific.component';
import { SortByFileSizeSpecificComponent } from './sort-by-file-size-specific/sort-by-file-size-specific.component';
import { SortByCreationDateSpecificComponent } from './sort-by-creation-date-specific/sort-by-creation-date-specific.component';
import { SortByLastModifiedDateSpecificComponent } from './sort-by-last-modified-date-specific/sort-by-last-modified-date-specific.component';
import { ShowTokenStatisticsSpecificComponent } from './show-token-statistics-specific/show-token-statistics-specific.component';
import { ShowWordCloudSpecificComponent } from './show-word-cloud-specific/show-word-cloud-specific.component';
import { TagCloudModule } from 'angular-tag-cloud-module';
import { ShowAllTokensWholeComponent } from './show-all-tokens-whole/show-all-tokens-whole.component';
import { UploadMultipleFilesFormComponent } from './upload-multiple-files-form/upload-multiple-files-form.component';
import { NetworkDriveIndexInputFormComponent } from './network-drive-index-input-form/network-drive-index-input-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContentViewerComponent } from './content-viewer/content-viewer.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ModalPopupContentViewerComponent } from './content-viewer/modal-popup-content-viewer/modal-popup-content-viewer.component';
import { ServerFolderIndexFormComponent } from './server-folder-index-form/server-folder-index-form.component';
import { ServerFolderIndexFormService } from './server-folder-index-form/server-folder-index-form.service';


@NgModule({
  declarations: [
    AppComponent,
    FileInputComponent,
    ShowTokenInputComponent,
    SearchAKeywordInCompleteComponent,
    ShowDirectoryThatAreAlreadyIndexedComponent,
    UploadFolderForIndexingFormComponent,
    SearchFileFolderWholeComponent,
    SpecificPageComponentComponent,
    StartPageComponent,
    ShowFileStatsComponent,
    ShowSpecificFolderTokenComponent,
    ShowTokenSpecificEfficientComponent,
    SearchFileFolderSpecificComponent,
    SortByFileNameSpecificComponent,
    SortByFileSizeSpecificComponent,
    SortByCreationDateSpecificComponent,
    SortByLastModifiedDateSpecificComponent,
    ShowTokenStatisticsSpecificComponent,
    ShowWordCloudSpecificComponent,
    ShowAllTokensWholeComponent,
    UploadMultipleFilesFormComponent,
    NetworkDriveIndexInputFormComponent,
    ContentViewerComponent,
    ModalPopupContentViewerComponent,
    ServerFolderIndexFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TagCloudModule,
    ReactiveFormsModule,
    InfiniteScrollModule,

  ],
  providers: [
  FileInputService,
  ShowTokenInputService,
  SearchAKeywordInCompleteService,
  ShowDirectoryThatAreAlreadyIndexedService,
  ShowFileStatsService,
  ContentViewerService,
  ServerFolderIndexFormService,
],
  bootstrap: [AppComponent]
})
export class AppModule { }

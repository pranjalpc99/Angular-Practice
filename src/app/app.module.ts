import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

import { FormsModule } from '@angular/forms';
import { PanelComponent } from './panel/panel.component';
import { StructureComponent } from './structure/structure.component';
import { PipeComponent } from './pipe/pipe.component'; // <-- NgModel lives here
import {EmpService} from './emp.service';
import { RouterComponent } from './router/router.component';
import { RouterModule} from '@angular/router';
import { InternalpipeComponent } from './pipe/internalpipe/internalpipe.component';
import { ApidataComponent } from './apidata/apidata.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    PanelComponent,
    StructureComponent,
    PipeComponent,
    RouterComponent,
    InternalpipeComponent,
    ApidataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'pipe',component:PipeComponent},
      {path:'hero',component:HeroesComponent},
      {path:'structure',component:StructureComponent},
      {path:'apidata',component:ApidataComponent},
      {path:"pipe",component:PipeComponent,children:[
        {path:"internal",component:InternalpipeComponent}
      ]},
      {path:'hero/:data',component:HeroesComponent},
      {path:'',redirectTo:'pipe',pathMatch:'full'}
    ])
  ],
  providers: [EmpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

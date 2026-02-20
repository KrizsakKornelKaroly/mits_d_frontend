import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { ChatComponent } from './components/chat/chat.component';
import { GenComponent } from './components/gen/gen.component';
import { RecComponent } from './components/rec/rec.component';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "main",
        component: MainComponent
    },
    {
        path: "chat",
        component: ChatComponent
    },
    {
        path: "gen",
        component: GenComponent
    },
    {
        path: "rec",
        component: RecComponent
    },
    {
        path: "**",
        redirectTo: "login"
    }
];

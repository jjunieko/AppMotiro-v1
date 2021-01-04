import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from "@angular/fire/auth-guard";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(["/"]);

const redirectLoggedInToChat = () => redirectLoggedInTo(["/chat-motiro"]);

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "cvv",
    loadChildren: () => import("./pages/cvv/cvv.module").then((m) => m.CvvPageModule),
  },
  {
    path: "chat-motiro",
    ...canActivate(redirectUnauthorizedToLogin),
    loadChildren: () => import("./pages/chat-motiro/chat-motiro.module").then((m) => m.ChatMotiroPageModule),
  },
  {
    path: "diario-gratidao",
    loadChildren: () =>
      import("./pages/diario-gratidao/diario-gratidao.module").then((m) => m.DiarioGratidaoPageModule),
  },
  {
    path: "sobre-suicidio",
    loadChildren: () => import("./pages/sobre-suicidio/sobre-suicidio.module").then((m) => m.SobreSuicidioPageModule),
  },
  {
    path: "como-ajudar",
    loadChildren: () => import("./pages/como-ajudar/como-ajudar.module").then((m) => m.ComoAjudarPageModule),
  },
  {
    path: "seja-voluntario",
    loadChildren: () =>
      import("./pages/seja-voluntario/seja-voluntario.module").then((m) => m.SejaVoluntarioPageModule),
  },
  {
    path: "sobre-aplicativo",
    loadChildren: () =>
      import("./pages/sobre-aplicativo/sobre-aplicativo.module").then((m) => m.SobreAplicativoPageModule),
  },
  {
    path: "configuracoes",
    loadChildren: () => import("./pages/configuracoes/configuracoes.module").then((m) => m.ConfiguracoesPageModule),
  },
  {
    path: "modal-gratidao",
    loadChildren: () => import("./pages/modal-gratidao/modal-gratidao.module").then((m) => m.ModalGratidaoPageModule),
  },
  {
    path: "contato-emergencia",
    loadChildren: () =>
      import("./pages/contato-emergencia/contato-emergencia.module").then((m) => m.ContatoEmergenciaPageModule),
  },
  {
    path: "chat-dialog",
    loadChildren: () => import("./pages/chat-dialog/chat-dialog.module").then((m) => m.ChatDialogPageModule),
  },
  {
    path: "login",
    loadChildren: () => import("./pages/login/login.module").then((m) => m.LoginPageModule),
    ...canActivate(redirectLoggedInToChat),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

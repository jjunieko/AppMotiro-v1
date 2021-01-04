import { Injectable } from "@angular/core";
import { PerfilUser } from "../pages/models/perfilUser";
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: "root",
})
export class ServiceMotiroService {
  constructor(public storage: Storage) {}

  public async getAll(): Promise<PerfilUser[]> {
    let perfilUser = await this.storage.get("perfilUser");
    perfilUser = JSON.parse(perfilUser);
    return perfilUser;
  }

  public async salvarProntuarioPerfil(PerfilPront: PerfilUser, id: number): Promise<void> {
    console.log(PerfilPront, id);
    if (id || id === 0) {
      await this.update(PerfilPront, id);
      return;
    }
    await this.save(PerfilPront);
  }

  public async save(PerfilPront): Promise<void> {
    let perfilUser = await this.getAll();
    if (!perfilUser) {
      perfilUser = [];
    }
    perfilUser.push(PerfilPront);
    await this.storage.set("perfilUser", JSON.stringify(perfilUser));
  }

  public async update(perfilUserForm: PerfilUser, id: number): Promise<void> {
    //comidaForm={Ovos} | id={2}
    let comidas = await this.getAll();
    comidas = await comidas.map((perfilLocalStorage, key) => {
      if (id == key) {
        console.log(perfilUserForm, "editando o perfil ");
        return perfilUserForm;
      }
      return perfilLocalStorage;
    });

    // ComidasAtualizadas = [1 - pizza, 2 - ovos, 3 - batata]
    await this.storage.set("perfilUser", JSON.stringify(comidas));
  }

  public async getUsersForm(key: number): Promise<PerfilUser> {
    let perfilUser = await this.getAll();
    const perfilUserProcurada = perfilUser.find((perfil, idC) => {
      if (idC === key) {
        return perfil;
      }
    });
    return perfilUserProcurada;
  }

  public async removerItem(index: number): Promise<void> {
    let perfilUser = await this.getAll();
    console.log(perfilUser);
    perfilUser.splice(index, 1);
    await this.storage.set("perfilUser", JSON.stringify(perfilUser));
    console.log(perfilUser);
  }
}

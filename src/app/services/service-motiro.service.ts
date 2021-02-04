import { Injectable } from "@angular/core";
import { PerfilUser } from "../pages/models/perfilUser";
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: "root",
})
export class ServiceMotiroService {
  constructor(public storage: Storage) {}

  // lista todos 

  public async getListarTodos(): Promise<PerfilUser[]> {
    //console.log("teste");
    let salvarItens = await this.storage.get("salvarItens");
    salvarItens = JSON.parse(salvarItens);
    console.log(salvarItens, "listamos todos");
    return salvarItens;
  }

  // remover todos
  public async removeTodos() {
    await this.storage.remove("salvarItens")
  }


     //salvar dados dentro da modal
  public async salvarDadosCv(
    salvarService: PerfilUser,
    id: number
  ): Promise<void> {
    console.log(salvarService, id,  "salvar Item");
    if (id || id === 0) {
      await this.update(salvarService, id);
      console.log(id, "meu id");
      return;
    }
    await this.save(salvarService);
  }

    // salvar modificações da modal

   public async save(salvarService): Promise<void> {
    let salvarItens = await this.getListarTodos();
    if (!salvarItens) {
      salvarItens = [];
    }
    salvarItens.push(salvarService);
    await this.storage.set("salvarItens", JSON.stringify(salvarItens));
  } 

    // atualizar lista de itens
  public async update(covidForm: PerfilUser, id: number): Promise<void> {
    //comidaForm={Ovos} | id={2}
    let salvarItem = await this.getListarTodos();
    salvarItem =  salvarItem.map((salvarlocalStorage, key) => {
      if (id === key) {
        return covidForm;
      }
      //console.log(salvarItem, "salvaritem");
      return salvarlocalStorage;
    });

    await this.storage.set("salvarItens", JSON.stringify(salvarItem));
  } 

 // deletar um item
  public async delete(index: number): Promise<void> {
    let salvarItens = await this.getListarTodos();
    salvarItens.splice(index, 1);
    await this.storage.set("salvarItens", JSON.stringify(salvarItens));
  }


    // listar todos os dados do formulário

  public async getCovidForm(index: number): Promise<PerfilUser> {
    let salvarItens = await this.getListarTodos();
    //return salvarItens;
    const CovidProcurado = salvarItens.find((salvarItem, key) => {
      if (index === key) {
        return salvarItem;
      }
    });
    return CovidProcurado;
  }
}

import { Injectable } from '@angular/core';

import { Tarefa } from 'src/app/models/tarefa.model';
import { Storage } from '@ionic/storage';


@Injectable({
    providedIn: 'root'
})
export class TarefaService{
    constructor(private storage: Storage) {
        this.storage.create();
    }

    public async gravar(tarefa: Tarefa){
        await this.storage.set(tarefa.id, tarefa);
    }

    public async deletar(id: string){
        await this.storage.remove(id);
    }

    public async obter(id: string){
        return await this.storage.get(id);
    }

    public async adicionar(key: string, value: any) {
        await this.storage.set(key, value);
      }
    

    public async editar(key: string, newValue: any) {
        await this.storage.set(key, newValue);
        this.carregar();
      }
    

    public async carregar(): Promise<Tarefa[]> {
        let listaTarefas: Tarefa[] = [];

        await this.storage.forEach((valor, id, index)=>{
            listaTarefas.push(valor);
        });

        return listaTarefas;
    }

}
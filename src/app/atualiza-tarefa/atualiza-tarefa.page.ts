import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';

import { Tarefa } from './../models/tarefa.model';
import { TarefaService } from '../services/tarefa.service';

@Component({
  selector: 'app-atualiza-tarefa',
  templateUrl: './atualiza-tarefa.page.html',
  styleUrls: ['./atualiza-tarefa.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TarefaAtualizaPage implements OnInit {
  @Input() minhaTarefa: Tarefa = {
    id: '',
    nome: '',
    data: '',
    prioridade: '',
    categoria: ''
  };

  
  public tarefaAtualizada: Tarefa = {
    id: '',
    nome: '',
    data: '',
    prioridade: '',
    categoria: ''
  };

  categorias =[ 'domestico', 'pessoal', 'trabalho' ];
  categoriaSelecionada: unknown;

  dataSelecionada: any;

  newTaskObj = {}

  constructor(private modalCtrl: ModalController, private tarefaServ: TarefaService) { }

  ngOnInit() {
    this.tarefaAtualizada.id = this.minhaTarefa.id;
    this.tarefaAtualizada.nome = this.minhaTarefa.nome;
    this.tarefaAtualizada.data = this.minhaTarefa.data;
    this.tarefaAtualizada.prioridade = this.minhaTarefa.prioridade;
    this.tarefaAtualizada.categoria = this.minhaTarefa.categoria;

    this.categoriaSelecionada = this.minhaTarefa.categoria;

    console.log('Aqui DATA!', this.minhaTarefa);

    this.dataSelecionada = this.minhaTarefa.data;
  }

  public selectCategory(index: number) {
    this.categoriaSelecionada = this.categorias[ index ];
  }

  async dismis() {
    await this.modalCtrl.dismiss();
  }
  
  async editar() {

    await this.tarefaServ.editar(this.tarefaAtualizada.id, this.tarefaAtualizada);

    this.dismis();
  }

}

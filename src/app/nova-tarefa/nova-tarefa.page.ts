import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { TarefaService } from '../services/tarefa.service';
import { Tarefa } from '../models/tarefa.model';

@Component({
  selector: 'app-tarefa-nova',
  templateUrl: './nova-tarefa.page.html',
  styleUrls: ['./nova-tarefa.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TarefaNovaPage implements OnInit {
  public categorias = [ 'domestico', 'pessoal', 'trabalho' ];
  public categoriaSelecionada: string = '';

  public dataSelecionada: string = new Date().toISOString();

  public minhaTarefa: Tarefa = {
    id: '',
    nome: '',
    data: '',
    prioridade: 'medio',
    categoria: ''
  };

  constructor(private modalCtrl: ModalController, public tarefaServ: TarefaService) { }

  ngOnInit() {
  }

  public async adicionar() {
    let uid: any = Date.now();
    uid = uid.toString(16);
    this.minhaTarefa.id = uid;

    this.minhaTarefa.data = this.dataSelecionada;
    
    this.minhaTarefa.categoria = this.categoriaSelecionada;

    console.log('Aqui!', this.minhaTarefa);
    
    if (this.minhaTarefa.nome && this.minhaTarefa.data && this.categoriaSelecionada) {
      await this.tarefaServ.adicionar(this.minhaTarefa.id, this.minhaTarefa);
    } else {
        console.log('Não é possível salvar uma tarefa vazia');
    }

    this.dismis();
  }

  public selecionarCategoria(index: number) {
    this.categoriaSelecionada = this.categorias[index];

    console.log(this.categoriaSelecionada);
  }

  public async dismis() {
    await this.modalCtrl.dismiss(this.minhaTarefa);
  }


}

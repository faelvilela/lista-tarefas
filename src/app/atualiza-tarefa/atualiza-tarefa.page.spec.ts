import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtualizaTarefaPage } from './atualiza-tarefa.page';

describe('AtualizaTarefaPage', () => {
  let component: AtualizaTarefaPage;
  let fixture: ComponentFixture<AtualizaTarefaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AtualizaTarefaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

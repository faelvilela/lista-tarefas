"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2267],{2267:(C,m,a)=>{a.r(m),a.d(m,{HomePage:()=>P});var d=a(5861),s=a(6895),g=a(433),o=a(6114),u=a(376),f=a(8646),e=a(8256),p=a(6371);function h(i,c){if(1&i){const t=e.EpF();e.TgZ(0,"ion-card",10)(1,"ion-card-header")(2,"ion-card-subtitle"),e._UZ(3,"ion-icon",11),e.TgZ(4,"strong"),e._uU(5),e.ALo(6,"uppercase"),e.qZA()()(),e.TgZ(7,"ion-card-content")(8,"ion-item")(9,"ion-label",12)(10,"strong"),e._uU(11),e.ALo(12,"uppercase"),e.qZA()()(),e.TgZ(13,"ion-label"),e._uU(14),e.ALo(15,"date"),e.qZA()(),e.TgZ(16,"ion-row")(17,"ion-item",13),e.NdJ("click",function(){const l=e.CHM(t).$implicit,_=e.oxw();return e.KtG(_.atualizar(l))}),e._UZ(18,"ion-icon",14),e.TgZ(19,"p"),e._uU(20,"Editar"),e.qZA()(),e.TgZ(21,"ion-item",13),e.NdJ("click",function(){const l=e.CHM(t).$implicit,_=e.oxw();return e.KtG(_.deletar(l.id))}),e._UZ(22,"ion-icon",15),e.TgZ(23,"p"),e._uU(24,"Cancelar"),e.qZA()()()()}if(2&i){const t=c.$implicit,n=e.oxw();e.xp6(3),e.Q6J("color",n.prioridadeCor(t.prioridade)),e.xp6(2),e.hij(" ",e.lcZ(6,5,t.categoria)," "),e.xp6(4),e.Q6J("color",n.prioridadeCor(t.prioridade)),e.xp6(2),e.hij(" ",e.lcZ(12,7,t.nome)," "),e.xp6(3),e.hij(" Vencimento ",e.xi3(15,9,t.data,"fullDate")," ")}}let P=(()=>{class i{constructor(t,n){this.modalCtrl=t,this.tarefaService=n,this.hoje=Date.now(),this.tarefasLista=[]}ngOnInit(){this.listar()}adicionar(){var t=this;return(0,d.Z)(function*(){const n=yield t.modalCtrl.create({component:u.TarefaNovaPage});return n.onDidDismiss().then(r=>{t.listar()}),yield n.present()})()}listar(){this.tarefaService.carregar().then(t=>{this.tarefasLista=t}),console.log(this.tarefasLista)}deletar(t){this.tarefaService.deletar(t).then(()=>{this.listar()})}atualizar(t){var n=this;return(0,d.Z)(function*(){const r=yield n.modalCtrl.create({component:f.TarefaAtualizaPage,componentProps:{minhaTarefa:t}});return r.onDidDismiss().then(()=>{n.listar()}),yield r.present()})()}prioridadeCor(t){let n="danger";return"medio"===t?n="warning":"baixo"===t&&(n="success"),console.log(n),n}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(o.IN),e.Y36(p.n))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-home"]],standalone:!0,features:[e.jDz],decls:15,vars:7,consts:[[3,"translucent"],["slot","start"],["lines","none"],[2,"font-weight","800","font-size","3em"],[2,"font-weight","400","color","#433465"],[3,"fullscreen"],["class","ion-margin",4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed"],["color","primary",3,"click"],["name","add"],[1,"ion-margin"],["size","small","name","ellipse",3,"color"],[3,"color"],[3,"click"],["color","primary","name","create"],["color","danger","name","trash"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),e._UZ(3,"ion-menu-button"),e.qZA(),e.TgZ(4,"ion-item",2)(5,"ion-label",3),e._uU(6," Hoje "),e.TgZ(7,"p",4),e._uU(8),e.ALo(9,"date"),e.qZA()()()()(),e.TgZ(10,"ion-content",5),e.YNc(11,h,25,12,"ion-card",6),e.TgZ(12,"ion-fab",7)(13,"ion-fab-button",8),e.NdJ("click",function(){return n.adicionar()}),e._UZ(14,"ion-icon",9),e.qZA()()()),2&t&&(e.Q6J("translucent",!0),e.xp6(8),e.hij(" ",e.xi3(9,4,n.hoje,"fullDate")," "),e.xp6(2),e.Q6J("fullscreen",!0),e.xp6(1),e.Q6J("ngForOf",n.tarefasLista))},dependencies:[o.Pc,o.Sm,o.PM,o.FN,o.Zi,o.tO,o.W2,o.IJ,o.W4,o.Gu,o.gu,o.Ie,o.Q$,o.fG,o.Nd,o.sr,s.ez,s.sg,s.gd,s.uU,g.u5],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),i})()}}]);
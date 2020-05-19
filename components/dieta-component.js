Vue.component('cmp-dieta', {
    props: ['dietas'],
    template:`
    <section id="dietas" class="row">
        <article v-for="dieta in dietas" :id="dieta.id" class="row">
            <span class="col s12">Horário: {{dieta.horario}}</span>
            <div class="col s12 m6" v-for="opcao in dieta.opcoesdieta">
                <a :href="opcao.url">
                    <div class="card small">
                        <div class="card-image">
                            <img :src="opcao.imgsrc" :alt="opcao.imgalt">
                        </div>
                        <div class="card-content">
                            <span class="card-title center-align">{{opcao.nome}}</span>							
                        </div>
                    </div>
                </a>
            </div>
        </article>
    </section>`
});
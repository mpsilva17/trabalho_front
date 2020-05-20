Vue.component('cmp-outrasopcoes', {
    props: ['outrasopcoes'],
    template:`
    <ul style="border: none !important;" class="collection col s12">
        <a v-for="opcao in outrasopcoes" :href="opcao.url">
            <li class="collection-item avatar valign-wrapper">
                <img :src="opcao.imgsrc" :data-title="opcao.imgdatatitle" :alt="opcao.imgalt" class="circle">
                <div class="col s10">
                    <span class="title" data-title="titulo">{{opcao.optionname}}</span>
                    <p data-title="descricao" class="descricao">{{opcao.optiondesc}}</p>
                </div>
            </li>
        </a>
    </ul>`
});
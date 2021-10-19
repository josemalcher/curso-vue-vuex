import Vue from "vue";
import Router from "vue-router";

import Home     from "./views/Home";
import Cursos   from "./views/Cursos"
import Curso    from "./views/Curso"

import CursoAulas       from "./views/CursoAulas"
import CursoDescricao   from "./views/CursoDescricao"

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/cursos",
            component: Cursos,
            props: true,
            children: [
                {
                    name: "curso",
                    path: ":curso",
                    component: Curso,
                    props: true,
                    children: [
                        {
                            name: "aulas",
                            path: "aulas",
                            component: CursoAulas,
                        },
                        {
                            name: "descricao",
                            path: "descricao",
                            component: CursoDescricao
                        }
                    ]
                }
            ]
        },
/*        {
            path: "/cursos/:curso",
            component: Cursos,
            props: true
        }*/
    ]
});
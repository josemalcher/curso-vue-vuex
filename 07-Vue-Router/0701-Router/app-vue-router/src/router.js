import Vue from "vue";
import Router from "vue-router";

import Home     from "./views/Home";

/*import Cursos   from "./views/Cursos"
import Curso    from "./views/Curso"
import CursoAulas       from "./views/CursoAulas"
import CursoDescricao   from "./views/CursoDescricao"*/

const Cursos         = () => import("./views/Cursos.vue")
const Curso          = () => import(/* webpackChunkName: "Curso" */"./views/Curso.vue")
const CursoAulas     = () => import(/* webpackChunkName: "Curso" */"./views/CursoAulas.vue")
const CursoDescricao = () => import(/* webpackChunkName: "Curso" */"./views/CursoDescricao.vue")

import Acoes        from "./views/Acoes"
import AcoesDados   from "./views/AcoesDados";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path:"/portal",
            redirect: "/"
        },
        {
            path:"*",
            redirect: "/"
        },
        {
            path: "/",
            // component: Home
            components:{
                default:Home,
                sidebar: Acoes,
            }
        },
        {
            path: "/acoes",
            components: {
                default: Acoes,
                sidebar: Home
            },
            children: [
                {
                    path: ":acaosimbolo",
                    component: AcoesDados,
                    props: true
                }
            ]
        },
        {
            path: "/cursos",
            component: Cursos,
            props: true,
            beforeEnter: (to, from, next) => {
                // console.log("TO", to)
                // console.log("FROM", from)
                console.log("Entrou em CURSOS")
                next()
            },
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

    ],
    scrollBehavior() {
        return window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    }
});

import Vue from "vue";
import HelloComponent from "./components/Hello.vue";
import "./styles/main.css"
import "./styles/mainl.less"
import "./styles/mains.scss"

let v = new Vue({
    el: "#app",
    template: `
    <div>
        Name: <input v-model="name" type="text">
        <hello-component :name="name" :initialEnthusiasm="5" />
    </div>
    `,
    data: { name: "World" },
    components: {
        HelloComponent
    }
});
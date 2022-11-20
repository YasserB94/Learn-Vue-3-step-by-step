import Assignment from "./Assignment.js";
export default{
    components:{
      Assignment
    },
    template:`
        <section class="border rounded border-slate-200 bg-slate-900 p-4"
        
        >
            <h2 class="text-xl font-bold">{{title}}</h2>
            <ul class="border px-2 space-y-2 mt-2 divide-y rounded bg-slate-700">
                <assignment
                    v-for="assignment in assignments"
                    :key="assignment.id"
                    :assignment="assignment"
                ></assignment>
            </ul>
        </section>
    `,
    props:{
        assignments: Array,
        title: String,
    }

}
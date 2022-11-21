import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";
export default {
    components: {
        Assignment,
        AssignmentTags
    },
    template: `
        <section
         v-show="show && assignments.length"
         class="border rounded border-slate-200 bg-slate-900 p-4"
        >
            <div class="flex w-full justify-between ">
            <h2 class="text-xl font-bold">{{title}}
            <span>({{assignments.length}})</span>
            </h2>
            <button v-show="canToggle"
            @click="show=!show"
            >&times</button>
</div>
            <assignment-tags
            v-model:currentTag="currentTag"
            :initialTags="assignments.map(a=>a.tag)"
            ></assignment-tags>
            <ul class=" mt-4 border px-2 space-y-2  divide-y rounded bg-slate-700">
                <assignment
                    v-for="assignment in filteredAssignments"
                    :key="assignment.id"
                    :assignment="assignment"
                ></assignment>
            </ul>
        </section>
    `,
    props: {
        assignments: Array,
        title: String,
        canToggle:{type:Boolean,default:false},
    },
    data() {
        return {
            currentTag: 'all',
            show:true,
        }
    },
    computed: {
        filteredAssignments() {
            if (this.currentTag === 'all') {
                return this.assignments
            }
            return this.assignments.filter(a => a.tag === this.currentTag)
        },

    }

}
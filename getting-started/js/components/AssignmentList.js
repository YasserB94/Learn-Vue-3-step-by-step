import Assignment from "./Assignment.js";

export default {
    components: {
        Assignment
    },
    template: `
        <section class="border rounded border-slate-200 bg-slate-900 p-4"
        
        >
            <h2 class="text-xl font-bold">{{title}}
            <span>({{assignments.length}})</span>
</h2>
<div class="flex gap-2">
    <button
    @click="currentTag=tag" 
    v-for="tag in tags"
    class="border duration-300 uppercase rounded px-2 mt-2 py-1 text-xs"
    :class="{
        'bg-slate-100 text-slate-600 cursor-default':tag===currentTag,
        'hover:bg-slate-500':tag!==currentTag,
    }"
    >{{tag}}</button>
</div>
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
    },
    data() {
        return {
            currentTag: 'all',
        }
    },
    computed: {
        filteredAssignments() {
            if (this.currentTag === 'all') {
                return this.assignments
            }
            return this.assignments.filter(a => a.tag === this.currentTag)
        },
        tags() {
            return ['all', ...new Set(this.assignments.map(a => a.tag))]
        }
    }

}
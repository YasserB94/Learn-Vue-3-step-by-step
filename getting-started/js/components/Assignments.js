import AssignmentList from "./AssignmentList.js";

export default {
    components: {
        AssignmentList,
    },
    template: `
       <section class="space-y-4">
      <assignment-list
        :assignments="filters.inProgress"
        title="In Progress"
      ></assignment-list>  
      <assignment-list
        :assignments="filters.completed"
        title="Completed"
      ></assignment-list>  
      <form @submit.prevent="add">
      <div class="border text-slate-700 p-2 rounded">
    <input type="text"
    class="p-2  bg-slate-50"
    v-model="newAssignment"
    >
    <button type="submit"
    class="p-2 bg-slate-50 border-l border-slate-500"
    >Add</button>
    </div>
    </form>
      </section>
    `,
    data() {
        return {
            assignments: [
                {
                    id: 1,
                    name: 'Learn Laravel',
                    completed: false
                }, {
                    id: 2,
                    name: 'Learn Vue 3',
                    completed: false
                }, {
                    id: 3,
                    name: 'Learn Inertia',
                    completed: false
                },
            ],
            newAssignment:''
        }
    },
    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => !assignment.completed),
                completed: this.assignments.filter(assignment => assignment.completed)
            }
        }
    },
    methods: {
        add() {
            this.assignments.push(
                {
                    id:this.assignments.length+1,
                    name:this.newAssignment,
                    completed:false
                }
            );
            this.newAssignment = ''
        }
    }

}
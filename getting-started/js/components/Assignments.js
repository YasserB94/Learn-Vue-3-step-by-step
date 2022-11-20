import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";
export default {
    components: {
        AssignmentList,
        AssignmentCreate
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
    <assignment-create @add="add"></assignment-create>
      </section>
    `,
    data() {
        return {
            assignments: [
                {
                    id: 1,
                    name: 'Learn Laravel',
                    completed: false,
                    tag:'programming'
                }, {
                    id: 2,
                    name: 'Learn Vue 3',
                    completed: false,
                    tag:'programming'
                }, {
                    id: 3,
                    name: 'Learn Inertia',
                    completed: false,
                    tag:'magic'
                },
            ],

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
        add(name) {
            this.assignments.push(
                {
                    id:this.assignments.length+1,
                    name:name,
                    completed:false
                }
            );
        }
    }

}
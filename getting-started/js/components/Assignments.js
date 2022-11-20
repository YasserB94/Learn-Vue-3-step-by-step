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
      </section>
    `,
    data() {
        return {
            assignments: [
                {
                    id: 1,
                    name: 'Learn Laravel',
                    completed: true
                }, {
                    id: 2,
                    name: 'Learn Vue 3',
                    completed: false
                }, {
                    id: 3,
                    name: 'Learn Inertia',
                    completed: false
                },
            ]
        }
    },
    computed: {
        filters(){
            return{
                inProgress:this.assignments.filter(assignment => ! assignment.completed),
                completed:this.assignments.filter(assignment =>  assignment.completed)
            }
        }
    }

}
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
            assignments: [],

        }
    },
    async created(){
        const url = "http://localhost:3001/assignments"
        const response = await fetch(url)
        const data = await response.json()
        this.assignments = data;
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
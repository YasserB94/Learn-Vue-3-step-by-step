
export default {
    template: `
          <form @submit.prevent="add">
      <div class="border text-slate-700 p-2 rounded">
    <input type="text"
    class="p-2  bg-slate-50 rounded-l"
    v-model.lazy="newAssignment"
    >
    <button type="submit"
    class="p-2 bg-slate-50 rounded-r border-l border-slate-500"
    >Add</button>
    </div>
    </form>`,
    data() {
        return {
            newAssignment: ''
        }
    },
    methods: {
        add() {
            this.$emit('add',this.newAssignment);
            this.newAssignment = '';


        }
    }

}
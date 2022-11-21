import Assignments from "./Assignments.js";
import Panel from "./Panel.js";
export default {
    components: {
        Assignments,
        Panel

    },
    template:`
      <assignments></assignments>
      <panel>
        <template v-slot:heading>
        Hello Heading
        </template>
        <template v-slot:default>
        Hello Panel 1
        </template>
      </panel>   
        <panel>
        <template v-slot:default>
        Hello Pannel 2
        </template>
      </panel>    
`
}

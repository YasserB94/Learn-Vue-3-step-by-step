export default {
    template:`
<div class="flex gap-2">

        <button
    @click="$emit('change',tag)" 
    v-for="tag in tags"
    class="border duration-300 uppercase rounded px-2 mt-2 py-1 text-xs"
    :class="{
        'bg-slate-100 text-slate-600 cursor-default':tag===currentTag,
        'hover:bg-slate-500':tag!==currentTag,
    }"
    >{{tag}}</button>
</div>
   `,
    props:{
        initialTags:Array,
        currentTag:String
    },

    computed:{
        tags() {
            return ['all', ...new Set(this.initialTags)]
        }
    }
}
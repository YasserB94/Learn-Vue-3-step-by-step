export default {
    template: `
                <button
                :class="{
                    'border border-slate-600 rounded px-4 py-2 text-slate-500':true,
                    'disabled:cursor-not-allowed ':true,
                    'hover:scale-105 active:scale-95':true,
                    'bg-slate-200': type=== 'primary'||type==='secondary',
                    'hover:bg-slate-500 hover:text-slate-200':type==='primary',
                    'hover:bg-transparent hover:text-slate-50':type==='secondary',
                    'hover:bg-emerald-800 text-slate-100':type==='accent',
                    'text-transparent hover:text-transparent animate-pulse rounded-full':processing,
                }"
                :disabled="processing"
                >
                <slot />
                </button>
                `
    ,
    props: {
        type: {
            type: String,
            default: 'primary'
        },
        processing: {
            type: Boolean,
            default: false
        }
    },
    mounted() {

    }
}

export default {
    template: `
                <button
                class="duration-300
                shadow rounded-xl bg-slate-200 border border-slate-500 text-slate-600 px-4 py-2
                hover:text-emerald-600 hover:border-emerald-600 hover:bg-slate-300 active:scale-90
                disabled:opacity-50 disabled:cursor-not-allowed"
                :disabled="processing"
                >
                <slot />
                </button>
                `
    ,
    data(){
        return {
            processing:false
        }
    },
    mounted() {

    }
}

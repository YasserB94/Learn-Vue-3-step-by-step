export default {
    template: `
        <div>
            <h2 v-if="$slots.heading">
                <slot name="heading" />
            </h2>
            <slot />
        </div>
    `,
    props:{
      heading:String,
    }
}
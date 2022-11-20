export default {
    template: `
        <li class="px-2 py-1">
            <label class="flex justify-between items-center">
                    {{ assignment.name }}
                <input type="checkbox" class="ml-4">
            </label>
        </li>
`,
    props:{
        assignment:Object
    }
}
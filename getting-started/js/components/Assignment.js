export default {
    template: `
        <li>
            <label>
                    {{ assignment.name }}
                <input type="checkbox" >
            </label>
        </li>
`,
    props:{
        assignment:Object
    }
}
<script setup>
defineProps({
  modelValue:String,
})
let emit = defineEmits(['update:modelValue']);
const insertTab = (e) => {
  const textArea = e.target
  const originalValue = textArea.value;
  //Get/save cursor position =>
  const cursor = {
    charsBefore: textArea.selectionStart,
    charsAfter:textArea.selectionEnd,
  }
  //Replace area content with new string including tab
  textArea.value = `${originalValue.substring(0, cursor.charsBefore)}\t${originalValue.substring(cursor.charsAfter)}`
  //Reset cursor position (After replacing text)
  textArea.selectionStart = textArea.selectionEnd = cursor.charsBefore+1
}
</script>
<template>
    <textarea
        @keydown.tab.prevent="insertTab"
        @keyup="emit('update:modelValue', $event.target.value);"
        v-text="modelValue" />
</template>
<style scoped>

</style>
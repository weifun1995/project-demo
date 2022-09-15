<template>
    <div class="editor">
        <Editor 
        class="editos" 
        :locale="zhHans" 
        @change="handleChange" 
        :value="data.content"
         />

        <Viewer 
        class="viewer" 
        :tabindex="2" 
        :value="data.content" 
        />
        
    </div>
</template>
  
<script setup lang="ts">
import 'bytemd/dist/index.css' 
import zhHans from 'bytemd/locales/zh_Hans.json'
import { Editor, Viewer } from '@bytemd/vue-next'
import 'juejin-markdown-themes/dist/juejin.min.css'
import { reactive } from 'vue'

const data = reactive({
    content: 'hello',
    pluginn: ''
})

const handleChange = function (v: any) {
    data.content = v
}

</script>
  <style scoped>
    .editor {
        height: 100%;
        overflow: hidden;
    }
    .editos, .viewer {
        height: 100%;
    }

    :deep(.bytemd) {
        height: 100%;
    }
</style>
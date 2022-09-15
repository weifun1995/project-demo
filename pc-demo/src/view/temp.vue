<script setup>
import Docxtemplater from "docxtemplater"
import PizZip from "pizzip"
import PizZipUtils from "pizzip/utils/index.js"
import { saveAs } from "file-saver"
import { reactive } from "vue"

const data = reactive({
    name: '',
    sex: '',
    job: '',
    funny: ''
})

const loadFile = function (url, callback) {
    PizZipUtils.getBinaryContent(url, callback)
}

const doDownload = () => {
    loadFile(
        "./demo.docx",
        function (error, content) {
            if (error) {
                throw error
            }

            const zip = new PizZip(content)
            const doc = new Docxtemplater(zip, {
                paragraphLoop: true,
                linebreaks: true,
            })

            doc.render({
                name: data.name,
                sex: data.sex,
                job: data.job,
                funny: data.funny
            })

            const out = doc.getZip().generate({
                type: "blob",
                mimeType:
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            });
            saveAs(out, "表格.docx")
        }
    )
}
</script>

<template>
    <div class="temp">
        <div class="form">
            <t-form>
                <t-form-item label="姓名" name="name" initialData="TDesign">
                    <t-input v-model="data.name" placeholder="请输入内容" />
                </t-form-item>
                <t-form-item label="性别" name="sex" initialData="TDesign">
                    <t-input v-model="data.sex" placeholder="请输入内容" />
                </t-form-item>
                <t-form-item label="职位" name="job" initialData="TDesign">
                    <t-input v-model="data.job" placeholder="请输入内容" />
                </t-form-item>
                <t-form-item label="爱好" name="funny" initialData="123456">
                    <t-input v-model="data.funny" placeholder="请输入内容" />
                </t-form-item>
            </t-form>
        </div>
        <div class="docView">
            <div style="float:right;margin-bottom: 10px;">
                <t-button  variant="base" @click="doDownload">下载</t-button>
            </div>
            <table border="1" style="border-collapse:collapse;width: 100%;">
                <tr>
                    <td>姓名</td>
                    <td>{{data.name}}</td>
                    <td>性别</td>
                    <td>{{data.sex}}</td>
                </tr>
                <tr>
                    <td>职位</td>
                    <td>{{data.job}}</td>
                    <td>爱好</td> 
                    <td>{{data.funny}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<style scoped>
.temp {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background: white;
}

.form {
    width: 33%;
    display: flex;
    align-items: center;
}

.docView {
    flex: 1;
    display: flex;
    align-items: start;
    flex-direction: column;
}

tr {
    border-top: 1px solid #C1C3D1;
    border-bottom: 1px solid #C1C3D1;
    color: #666B85;
    font-size: 16px;
    font-weight: normal;
    text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);
}

tr:first-child {
    border-top: none;
}

tr:last-child {
    border-bottom: none;
}

td {
    background: #FFFFFF;
    padding: 20px;
    text-align: left;
    vertical-align: middle;
    font-weight: 300;
    font-size: 18px;
    width: 25%;
    text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
    border-right: 1px solid #C1C3D1;
}
</style>





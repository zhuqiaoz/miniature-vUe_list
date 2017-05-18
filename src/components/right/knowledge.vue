<template>
    <div>
        <bread-crumb>
            <slot name="bread"></slot>
        </bread-crumb>
    </div>
</template>
<script>
    import breadCrumb from '../Breadcrumb/bread'
    export default{
        data () {
            return {
                msg:'我是相关知识'
            }
        },
        components: {
            breadCrumb
        }
    }
</script>
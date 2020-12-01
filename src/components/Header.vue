<template>
    <div>
        <header id="header">
            <h1>{{title}}</h1>
        </header>        
    </div>
</template>
<script>
export default {
    name:"Header",
    props:{
        title:{
            type:String,
            default:'化学加'
        }
    }
}
</script>
<style scoped>
    #header{
        widows: 100%;
        height: 40px;
        line-height: 40px;
        background: #F8F8F8;
        color: #000;
    }
    #header h1{
        font-size: 18px;
        text-align: center;
        
    }
</style>
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
        title:String,
        default:'化学加'
    }
}
</script>
<style scoped>
    #header{
        widows: 100%;
        height: 50px;
        background: #fff;
    }
    #header h1{
        font-size: 18px;
        text-align: center;
        line
    }
</style>
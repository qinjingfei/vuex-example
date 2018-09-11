<template>
    <div>
        <h1>计数器</h1>
        <h2>{{count}}</h2>
        <button @click="increase">+</button>
        <button @click="decrease">-</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            count:0
        }
    },
    methods: {
        increase() {
            this.count++
        },
        decrease(){
            if(this.count!==0) this.count--
            else alert(`Already 0`)
        }
    }
}
</script>

 <style scoped>
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
 </style>
 


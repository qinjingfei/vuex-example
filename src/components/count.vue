<template>
    <div>
        <h1>计数器</h1>
        <h2>{{count}}</h2>
        <button @click="increase">+</button>
        <button @click="decrease">-</button>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    computed: mapState({
        count: state => state.count.count
    }),
    methods: {
       ...mapActions({
           increase: 'count/increase',
           decrease: 'count/decrease'
       })
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
 


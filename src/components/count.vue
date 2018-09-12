<template>
    <div>
        <h1>计数器</h1>
        <h2>{{count}}</h2>
        <button type="button" @click="increase" class="btn btn-light">+</button>
        <button type="button" @click="decrease" class="btn btn-light">-</button>
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
        height: 60vh;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
 </style>
 


<template>
    <div>
      
        <nav-bar
      id="nav"
      :title="title"
      left-text='返回'
      left-arrow
      @click-left="clickLeft"
      fixed
      class="nav"/>
    </div>
</template>

<script>
import  "@/libs/common";

import apicloud from "@/libs/apicloud";
import { NavBar } from "vant";

import { XHeader } from 'vux'
export default {
components: {
     XHeader,
     NavBar
    },    
    data(){
        return {			
            title:""
        }
    },
    mounted(){	        
        this.title = api.pageParam.title;                
        api.openFrame({
            name: api.pageParam.url,
            url: api.pageParam.url,
            bounces: true,
            rect: {
                x: 0,
                y: 46,
                w: 'auto',
                h: 'auto'
            },
            pageParam:api.pageParam
        });
    },
    methods:{        
        clickLeft() {
            
            api.closeWin({
                type: "reveal",
                subType: "from_left"
            });
    }
    }
}
</script>

<style>

</style>
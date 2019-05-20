<template>
    <div class="cascader">
        <div class="trigger" @click="popoverVisible = !popoverVisible">
            
        </div>
        <div class="popover-wrapper" v-if="popoverVisible">
            <cascader-items :items="source" class="popover" :height="popoverHeight"></cascader-items>
        </div>
        <!-- <div class="popover">
            <div v-for="(item, index) in source" :key="index">
                <cascader-item :sourceItem="item"></cascader-item>
            </div>
        </div> -->
    </div>
</template>

<script>
import CascaderItems from './cascader-items'
export default {
    name: 'GuluCascader',
    components: {
        CascaderItems
    },
    props: {
        source: {
            type: Array
        },
        popoverHeight: {
            type: String
        }
    },
    data() {
        return {
            popoverVisible: false,
        }
    },
}
</script>

<style lang="scss" scoped>
    @import 'var';
    .cascader {
        position: relative;
        .trigger {
            border: 1px solid black;
            height: 32px;
            width: 100px;
        }
        .popover-wrapper {
            position: absolute;
            top: 100%;
            left: 0;
            background: #fff;
            display: flex;
            @extend .box-shadow;
        }
    }
</style>
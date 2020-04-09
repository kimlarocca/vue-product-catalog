<template>
    <div class="hawksearch-layout-options">
        <i tabindex="0"
           class="fas fa-th-large"
           @click="layout = 'grid'"
           @keypress.enter="layout = 'grid'"
           @keypress.space.prevent="layout = 'grid'">
        </i>
        <i tabindex="0"
           class="fas fa-th-list"
           @click="layout = 'list'"
           @keypress.enter="layout = 'list'"
           @keypress.space.prevent="layout = 'list'">
        </i>
    </div>
</template>

<script>
    export default {
        name: 'LayoutOptions',
        data: function () {
            return {
                layout: this.$parent.layout
            }
        },
        watch: {
            layout () {
                this.$parent.layout = this.layout
            }
        }
    }
</script>

<style lang="scss" scoped>
    .hawksearch-layout-options {
        height: 2rem;

        i {
            cursor: pointer;
            float: left;
            margin-left: .75rem;
            line-height: 2rem;
            color: $link-color;
            transition: $transition;

            &:hover {
                color: $font-color;
            }
        }
    }
</style>

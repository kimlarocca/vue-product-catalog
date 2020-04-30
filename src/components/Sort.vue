<template>
    <div class="sort">
        <label for="sort" class="hide-a11y-element">Sort By:</label>
        <select id="sort" v-model="selected">
            <option v-for="(option, index) in this.$parent.sorting" :key="index" :value="option.Value">
                {{option.Label}}
            </option>
        </select>
    </div>
</template>

<script>
    export default {
        name: 'Sort',
        data: function () {
            return {
                selected: this.$parent.sortBy
            }
        },
        watch: {
            selected () {
                this.$parent.sortBy = this.selected
                this.$parent.sortItems()
            }
        }
    }
</script>

<style lang="scss" scoped>
    .sort {
        select {
            width: 100%;
            height: 2rem;
            line-height: 2rem;
            padding: .5rem;
            background: $light-gray;
            border: none;
            border-radius: .25rem;
            color: $dark-gray;
            font-size: .75rem;
        }
    }
</style>

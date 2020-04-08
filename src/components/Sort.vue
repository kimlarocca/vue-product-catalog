<template>
    <div class="hawksearch-sort">
        <label for="sort" class="sort-by">Sort By:</label>
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
    .hawksearch-sort {
        label {
            line-height: 1rem;
            color: $link-color;
            font-size: .875rem;
            margin: 0 .5rem 0 0;
        }

        select {
            float: right;
            max-width: 100%;
            height: 2rem;
            line-height: 2rem;
            border: solid 1px $light-gray;
            border-radius: 2rem;
            padding: .5rem;

            &::placeholder {
                font-size: .875rem;
                color: $font-color;
            }
        }
    }
</style>

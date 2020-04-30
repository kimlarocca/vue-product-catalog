<template>
    <div class="refinements">
        <div class="refinements-applied">
            <ul v-if="currentRefinements.length > 0">
                <li v-for="(refinement, index) in currentRefinements"
                    :key="index"
                    @click="removeRefinementByObject(refinement)"
                >
                    {{refinement.value}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            currentRefinements () {
                let arr = []
                for (let i = 0; i < this.$parent.refinements.length; i++) {
                    if (typeof (this.$parent.refinements[i].value) !== "boolean") arr.push(this.$parent.refinements[i])
                }
                return arr
            }
        },
        methods: {
            removeRefinementByObject (refinement) {
                // remove refinement from refinements array
                this.$parent.refinements = this.$parent.refinements.filter((x) => x != refinement)
                // uncheck the refinement's checkbox
                document.querySelectorAll("input[type='checkbox'][value=" + refinement.value + "]")[0].checked = false;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .refinements-applied {
        font-size: .75rem;
        color: $link-color;

        ul {
            list-style: none;
            margin: 0;
            padding: 0;

            li {
                display: inline-block;
                margin: 0 .5rem .5rem 0;
                cursor: pointer;

                &:before {
                    content: 'X';
                    color: $font-color;
                    margin-right: 1px;
                }
            }
        }
    }
</style>

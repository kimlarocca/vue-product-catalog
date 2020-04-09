<template>
    <div class="hawksearch-refinements">
        <div class="refinements-applied">
            <template v-if="this.$parent.refinements.length === 0">No filters applied.</template>
            <ul v-else>
                <li v-for="(refinement, index) in this.$parent.refinements"
                    :key="index"
                    @click="removeRefinementByObject(refinement)"
                >
                    {{refinement.value}}
                </li>
            </ul>
        </div>
        <div class="refine-by">Refine By:</div>
        <template v-for="(refinement, index) in this.$parent.facets">
            <refinement-item
                    v-if="refinement.Values.length > 0"
                    :key="index"
                    class="refinement-item"
                    :name="refinement.Name"
                    :paramName="refinement.ParamName"
                    :refinementObject="refinement"
                    :values="refinement.Values"
                    :isCollapsed="refinement.IsCollapsedDefault"
                    :numberVisible="refinement.NofVisible"
            >
            </refinement-item>
        </template>
    </div>
</template>

<script>
    import RefinementItem from '@/components/RefinementItem.vue'

    export default {
        components: {
            RefinementItem
        },
        methods: {
            addRefinement (paramName, value) {
                // add refinement to refinements array
                this.$parent.refinements.push({"paramName": paramName, "value": value})
            },
            removeRefinement (paramName, value) {
                // remove refinement from refinements array
                this.$parent.refinements = this.$parent.refinements.filter((x) => (x.value != value && x.paramName != paramName))
            },
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
        margin-bottom: 1rem;

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

    .refine-by {
        font-family: 'FFDINStdBold', serif;
        font-size: .875rem;
        margin-bottom: .25rem;
    }
</style>

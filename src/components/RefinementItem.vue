<template>
    <div class="refinement-item">
        <div
                class="refinement-item-name"
                :class="{'open': isVisible}"
                tabindex="0"
                @click="isVisible = !isVisible"
                @keypress.enter="isVisible = !isVisible"
                @keypress.space.prevent="isVisible = !isVisible">
            {{name}}
        </div>
        <transition name="slide">
            <ul v-show="isVisible">
                <li v-for="(item, index) in values.slice(0, numberToShow)" :key="index">
                    <label>
                        <input type="checkbox"
                               :value="item.Value"
                               @change="toggleRefinement(item, paramName, item.Value, $event)">
                        {{item.Label}} ({{item.Count}})
                    </label>
                </li>
                <li @click="showMore"
                    @keypress.enter="showMore"
                    @keypress.space.prevent="showMore"
                    v-if="showShowMore"
                    class="show-more"
                    tabindex="0">show more
                </li>
            </ul>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'RefinementItem',
        props: {
            name: String,
            paramName: String,
            value: String,
            values: Array,
            numberVisible: Number,
            isCollapsed: Boolean,
            checkedItems: Array
        },
        data () {
            return {
                isVisible: !this.isCollapsed,
                numberToShow: this.numberVisible === 0 ? this.numberOfRefinementsVisible : this.numberVisible
            }
        },
        computed: {
            showShowMore () {
                return this.numberToShow <= this.values.length ? true : false
            }
        },
        methods: {
            toggleRefinement (item, paramName, value, event) {
                // if checked, add refinement
                // if unchecked, remove refinement
                if (event.target.checked) {
                    this.$parent.addRefinement(paramName, value);
                } else {
                    this.$parent.removeRefinement(item);
                }
            },
            showMore () {
                this.numberToShow = 10000
                this.showShowMore = false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .refinement-item-name {
        font-family: 'FFDINStdBold', serif;
        font-size: .75rem;
        color: $link-color;
        cursor: pointer;
        margin-bottom: .5rem;
        width: 100%;
        position: relative;

        &:after {
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            content: '\f0fe';
            font-family: $font-awesome;
            font-weight: 900;
            z-index: 10;
        }

        &.open {
            &:after {
                content: '\f146';
            }
        }
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;

        li {
            display: block;
            font-size: .75rem;
        }
    }

    input[type=checkbox] {
        margin-right: .25rem;
    }

    .show-more {
        color: $link-color;
        cursor: pointer;
        margin-bottom: 1rem;

        &:hover {
            color: $font-color;
        }
    }
</style>

<template>
    <div class="toggle-refinement-item"
         :class="{'on': isOn}"
    >
        <a
                tabindex="0"
                @click="toggleToggleRefinement(paramName)"
                @keypress.enter="toggleToggleRefinement(paramName)"
                @keypress.space="toggleToggleRefinement(paramName)"
        >
            <i v-if="isOn" class="fas fa-toggle-on"></i>
            <i v-else class="fas fa-toggle-off"></i>
            {{name}}
        </a>
    </div>
</template>

<script>
    export default {
        name: 'ToggleRefinementItem',
        props: {
            name: String,
            paramName: String,
        },
        data () {
            return {
                isOn: false
            }
        },
        methods: {
            toggleToggleRefinement (paramName) {
                this.isOn = !this.isOn
                if (this.isOn) {
                    this.$parent.addToggleRefinement(paramName)
                } else {
                    this.$parent.removeToggleRefinement(paramName)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .toggle-refinement-item {
        font-size: .75rem;
        text-transform: uppercase;
        font-weight: 600;
        color: $link-color;
        cursor: pointer;
        margin-bottom: 1rem;
        width: 100%;

        a {
            display: flex;
            align-items: center;
        }

        i {
            font-size: 1.5rem;
            margin-right: .5rem;
            color: $font-color;
        }

        &.on {
            i {
                color: $link-color;
            }
        }
    }
</style>

<template>

    <div class="card" :class="layout">
        <a v-if="hasLink" :href="link" :aria-label="title" class="link"></a>
        <div class="card-container">
            <div class="image">
            <img v-if="hasImage" :src="image" :alt="altText"/>
            </div>
        </div>
<!--        <div class="row">-->
<!--            <div class="col-5"><div class="quick-view">Quick View</div></div>-->
<!--            <div class="col-7 text-right"><div class="brand">{{ brand }}</div></div>-->
<!--        </div>-->
        <div class="content">
            <div class="brand">{{ brand }}</div>
            <hr>
            <div v-if="hasSubtitle" class="subtitle">{{ subtitle }}</div>
            <div class="title">{{ title }}</div>
            <template v-if="hasTextLink">
                <div class="learn-more caret-right">Learn more</div>
            </template>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'Card',
        props: {
            image: String,
            altText: String,
            brand: String,
            title: String,
            subtitle: String,
            link: String,
            layout: String,
            hasTextLink: {
                default: false
            }
        },
        computed: {
            hasLink () {
                return !!this.$props['link']
            },
            hasImage () {
                return !!this.$props['image']
            },
            hasSubtitle () {
                return !!this.$props['subtitle']
            }
        }
    }
</script>

<style lang="scss">
    $background: #fff;
    $border-color: #ccc;
    $header-background: #ccc;

    .card {
        width: 100%;
        height: 100%;
        opacity: 1;
        background: $background;
        transition: $transition;
        position: relative;
        border-radius: 1rem;
        border: 1px solid $border-color;

        &:hover {
            opacity: $opacity-on-hover;
            cursor: pointer;
        }

        .link {
            position: absolute;
            width: 100%;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
        }

        a,
        a:visited,
        a:active {
            color: $link-color;
            text-decoration: none;
            transition: $transition;

            &:hover {
                color: $font-color;
                text-decoration: none;
            }
        }

        .header {
            padding: 1rem;
            background: $header-background;
            text-transform: uppercase;
            font-weight: 700;
        }

        img {
            top: 0;
            left: 0;
            width: 100%;
            height: auto;
            border-top-left-radius: 1rem;
            border-top-right-radius: 1rem;
            padding: 1rem 2rem;
        }

        .quick-view {
            color: $link-color;
            padding: .75rem;
            font-size: .5rem;
            text-transform: uppercase;
            transition: $transition;

            &:hover {
                color: $font-color;
            }
        }

        .content {
            padding-bottom: .75rem;

            .brand {
                padding: 0 .75rem;
                font-size: .5rem;
                text-align: right;
            }

            .subtitle {
                padding: 0 .75rem;
                font-size: .75rem;
                color: $font-color;
            }

            .title {
                padding: 0 .75rem;
                margin-bottom: 0;
                color: $link-color;
                font-size: .75rem;
                font-weight: bold;
            }

            .learn-more {
                padding: 0 .75rem;
                font-weight: 700;
                color: $link-color;
            }
        }

        &.list {
            img {
                height: 150px;
                width: auto;
            }
        }

    }
</style>

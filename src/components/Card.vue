<template>

    <div class="card" :class="layout">
        <a v-if="hasLink" :href="link" :aria-label="title" class="link"></a>
        <div class="image">
            <img v-if="hasImage" :src="image" :alt="altText"/>
        </div>
        <div class="content">
            <div class="brand">{{ brand }}</div>
            <div class="preTitle">{{ preTitle }}</div>
            <div class="title">{{ title }}</div>
            <div class="itemNumber">Item #: {{itemNumber}}</div>
            <div class="size"><strong>Size</strong>: {{size}}</div>
            <div class="unitOfMeasure"><strong>Selling Unit of Measure</strong>: {{unitOfMeasure}}</div>
            <div class="cta">{{ cta }} <i class="fas fa-arrow-right"></i></div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'Card',
        props: {
            image: String,
            altText: String,
            cta: String,
            brand: String,
            preTitle: String,
            title: String,
            itemNumber: String,
            size: String,
            unitOfMeasure: String,
            link: String,
            layout: String
        },
        computed: {
            hasLink () {
                return !!this.$props['link']
            },
            hasImage () {
                return !!this.$props['image']
            }
        }
    }
</script>

<style lang="scss" scoped>
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
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        padding-bottom: .75rem;
        color: $font-color;

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

        img {
            top: 0;
            left: 0;
            width: 100%;
            height: auto;
            border-top-left-radius: 1rem;
            border-top-right-radius: 1rem;
            padding: 1rem 2rem;
        }

        .brand {
            padding: 0 .75rem .5rem .75rem;
            font-size: .75rem;
            text-align: right;
            border-bottom: solid 1px $light-gray;
            margin-bottom: 1rem;
            color: $font-color;
        }

        .preTitle {
            font-size: .875rem;
            padding: 0 .75rem;
        }

        .title {
            padding: 0 .75rem;
            margin-bottom: 0;
            color: $link-color;
            font-size: .875rem;
            font-family: 'FFDINStdBold', serif;
        }

        .itemNumber,
        .size,
        .unitOfMeasure {
            display: none;
        }

        .cta {
            display: none;
            padding: 0 .75rem;
            font-weight: 700;
            color: $link-color;
            text-transform: uppercase;
            font-size: .875rem;
        }

        &.list {
            flex-direction: row;
            padding-bottom: 0;
            align-items: center;

            .image {
                height: 100%;
                flex-basis: 20%;
                text-align: center;

                img {
                    height: 150px;
                    width: auto;
                    padding: .75rem;
                }
            }

            .content {
                border-left: solid 1px $light-gray;
                flex-basis: 75%;
                padding: .75rem 0;
            }

            .brand {
                border-bottom: none;
                text-align: left;
                font-size: 1rem;
                margin-bottom: 0;
                padding: 0 .75rem;
            }

            .preTitle {
                display: none;
            }

            .title {
                font-size: 1rem;
            }

            .itemNumber {
                margin-bottom: 1rem;
            }

            .itemNumber,
            .size,
            .unitOfMeasure {
                display: block;
                font-size: .875rem;
                padding: 0 .75rem;
            }

            .unitOfMeasure {
                margin-bottom: 1rem;
            }

            .cta {
                display: block;
                font-family: 'FFDINStdBold', serif;
            }
        }

    }
</style>

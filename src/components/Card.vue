<template>
    <div class="card" :class="layout">
        <a v-if="hasURL" :href="url" :aria-label="title" class="link"></a>
        <div class="image">
            <img v-if="hasImage" :src="image" :alt="imageAlt"/>
        </div>
        <div class="content">
            <div class="brand">{{ brand }}</div>
            <div class="title">{{ title }}</div>
            <div v-if="!isOnSale" class="price">${{ price }}</div>
            <div v-else class="sale-price">
                <del>${{ price }}</del>
                ${{ salePrice }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Card',
        props: {
            id: String,
            image: String,
            imageAlt: String,
            brand: String,
            title: String,
            price: String,
            salePrice: String,
            isOnSale: Boolean,
            url: String,
            layout: String
        },
        computed: {
            hasURL () {
                return !!this.$props['url']
            },
            hasImage () {
                return !!this.$props['image']
            }
        }
    }
</script>

<style lang="scss" scoped>
    $background: #fff;
    $box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.075);

    .card {
        width: 100%;
        height: 100%;
        opacity: 1;
        background: $background;
        transition: $transition;
        position: relative;
        border: none;
        border-radius: .25rem;
        box-shadow: $box-shadow;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        padding: .75rem;
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
            width: 100%;
            height: auto;
        }

        .brand {
            font-size: .75rem;
            margin: 1rem 0 0;
            color: $font-color;
        }

        .title {
            color: $link-color;
            font-size: .875rem;
            font-weight: 700;
        }

        .price,
        .sale-price {
            margin-bottom: 0;
            font-size: 1.25rem;
            font-weight: 700;
        }

        .sale-price {
            color: red;

            del {
                color: $font-color;
            }
        }

        &.list {
            flex-direction: row;
            padding: 0;
            align-items: center;

            .image {
                height: 100%;
                flex-basis: 20%;
                text-align: center;
                padding: .75rem;
            }

            .brand {
                margin-top: 0;
            }

            .content {
                flex-basis: 75%;
                padding: .75rem;
            }
        }

    }
</style>

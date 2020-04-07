<template>

    <div class="intro-card">
        <img :src="image" :alt="altText"/>
        <div class="content">
            <h3 class="title">{{ title }}</h3>
            <div class="description">{{ description }}</div>
            <a class="learn-more" :href="link">{{ cta }}</a>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'Card',
        props: {
            image: String,
            altText: String,
            title: String,
            description: String,
            link: String,
            cta: String
        }
    }
</script>

<style lang="scss" scoped>
    $background: transparent;
    $padding: 1.5rem;
    $border-radius: .75rem;
    $aqua: #68c4dd;
    $green: #81c216;
    $navy: $link-color;
    $purple: #777ba5;

    .intro-card {
        width: 100%;
        height: 100%;
        opacity: 1;
        background: $background;
        position: relative;

        img {
            top: 0;
            left: 0;
            border-top-left-radius: $border-radius;
            border-top-right-radius: $border-radius;
            max-width: 100%;
            height: auto;
            border-bottom: solid 5px $aqua;
        }

        &:nth-child(4n+2) {
            img {
                border-bottom: solid 5px $green;
            }
        }

        &:nth-child(4n+3) {
            img {
                border-bottom: solid 5px $navy;
            }
        }

        &:nth-child(4n) {
            img {
                border-bottom: solid 5px $purple;
            }
        }

        .content {
            padding: $padding;
            border-bottom-left-radius: $border-radius;
            border-bottom-right-radius: $border-radius;
            box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);

            .title {
                margin-bottom: .25rem;
                font-family: 'FFDINStdBold', serif;
            }

            .description {
                font-size: .875rem;
                margin-bottom: 1rem;
            }

            .learn-more {
                text-transform: uppercase;
                font-family: 'FFDINStdBold', serif;
                color: $link-color;
                font-size: .875rem;
            }
        }

    }
</style>

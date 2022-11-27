<template>
    <div class="content-chat-text" v-show="msg.messageType === 'text'">
        {{msg.messageContent}}
    </div>
</template>
<script setup>
// eslint-disable-next-line vue/no-setup-props-destructure, no-undef
const { msg } = defineProps({
    msg: {
        required: true,
        type: Object,
    },
})
</script>
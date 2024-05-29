<template>
  <span :class="classes" v-text="formattedAmount" :title="formattedAmount" />
</template>

<script lang="ts" setup>
import { getUserLocale } from 'get-user-locale'
import { computed } from 'vue'

import Helper from '../helpers/index'
import './money-amount.scss';

const props = withDefaults(
  defineProps<{
    amount: number
    currency: string
    isFractionated?: boolean
    hasColors?: boolean
    locale?: string
    minimumFractionDigits?: number
  }>(),
  {
    isFractionated: true,
    hasColors: true,
    locale: null,
    minimumFractionDigits: 0
  }
)

const classes = computed(() => {
  if (!props.hasColors) {
    return ''
  }

  if (props.amount > 0) {
    return 'money-amount--positive'
  }
  if (props.amount < 0) {
    return 'money-amount--negative'
  }

  return 'money-amount--zero'
})

const formattedAmount = computed(() => {
  const options = {
    isFractionated: props.isFractionated,
    locale: props.locale || getUserLocale(),
    minimumFractionDigits: props.minimumFractionDigits
  }

  return Helper.formatMoneyAmount(props.amount, props.currency, options)
})
</script>

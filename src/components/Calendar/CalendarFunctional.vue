<template>
    <div>
        <!-- {{calendarData.selectedDate}} -->
        <FunctionalCalendar
            v-model="calendarData"
            :is-date-picker="true"
            :date-format="'yyyy-mm-dd'"
            :limits="localLimits"
            :key="renderId"
            :ref="`calendar${uuid}`"
            @choseDay="choseDay"
        ></FunctionalCalendar>
    </div>
</template>
<script>
import { FunctionalCalendar } from 'vue-functional-calendar';
import { uidMixin, uuid } from '@/components/_mixins.js'
import dayjs from 'dayjs'
export default {
    mixins: [uidMixin],
    data: () => ({
        localLimits: false,
        calendarData: {},
        renderId: uuid()
    }),
    components: {
        FunctionalCalendar
    },
    props: {
        value: {
            type: [String, Number, Date],
            default: ''
        },
        limits: {
            type: [Object, Boolean],
            default: () => {
                return false
            }
        }
    },
    watch: {
        limits: {
            handler: function(newValue, oldValue) {
                const newValueString = JSON.stringify(newValue)
                const oldValueString = JSON.stringify(oldValue)
                if (newValueString !== oldValueString) {
                    let localLimits = false
                    const { min, max } = newValue
                    const hasMinValue = (newValue.hasOwnProperty('min') && min)
                    const hasMaxValue = (newValue.hasOwnProperty('max') && max)
                    if (hasMinValue && hasMaxValue) {
                        localLimits = {
                            min: this.formatDate(min),
                            max: this.formatDate(max)
                        }
                    } else if (hasMinValue) {
                        localLimits = {
                            min: this.formatDate(min),
                            max: '2200-1-1'
                        }
                    } else if (hasMaxValue) {
                        localLimits = {
                            min: '1900-1-1',
                            max: this.formatDate(max)
                        }
                    }
                    this.localLimits = localLimits
                    // IMPORTANT: Force calendar rerender, and eveny line below matters
                    const calendarDataCopy = JSON.parse(JSON.stringify(this.calendarData))
                    const { selectedDate } = calendarDataCopy
                    this.renderId = uuid()
                    const calendarElement = this.$refs[`calendar${this.uuid}`]
                    this.$nextTick(() => {
                        this.calendarData = calendarDataCopy
                        if (selectedDate) {
                            calendarElement.ChooseDate(selectedDate);
                        }
                    })
                }
            },
            deep: true
        },
    },
    methods: {
        choseDay(day) {
            const formattedDate = dayjs(day.date).format('YYYY-MM-DDTHH:mm:ss')
            this.$emit('input', formattedDate)
        },
        formatDate(date) {
            const formattedDate = dayjs(date).format('YYYY-MM-DD')
            return formattedDate
        }
    }
}
</script>
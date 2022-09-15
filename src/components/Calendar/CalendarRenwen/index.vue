<template>
    <div class="calendarRW">
        <div v-if="selectorName==='day'" class="calendarRW__body">
            <div class="calendarRW__header">
                <div>
                    <button
                        class="header__title"
                        @click="openYearSelector()"
                    >{{selectMonth.thisYear}}</button>
                    <button
                        class="header__title header__title--month"
                        @click="openMonthSelector()"
                    >{{month_name[selectMonth.thisMonth]}}</button>
                </div>
                <div class="header__buttonGroup">
                    <button class="header__button" @click="clickPre($event)">
                        <img class="button__icon" src="./Righ-Left.svg" alt />
                    </button>
                    <button class="buttonGroup__today" @click="resetToday()">{{$t('today')}}</button>
                    <button class="header__button" @click="clickNext($event)">
                        <img class="button__icon" src="./right-arrow-01.svg" alt />
                    </button>
                </div>
            </div>
            <div class="calendarRW__weeksGroup">
                <ul class="weeksGroup__list">
                    <li
                        class="weeksGroup__list__item"
                        v-for="(item,i) in week_name"
                        :key="i"
                    >{{$t(`week${i+1}`)}}</li>
                </ul>
                <ul class="weeksGroup__list days" :ref="'days'">
                    <li
                        class="weeksGroup__list__item cursor-pointer"
                        v-for="(item,i) in selectMonth.every"
                        :key="i"
                    >
                        <button
                            @click="clickChooseTheDay($event,item)"
                            class="item__button"
                            :class="{
                                'item__button--thisMonth':item.getMonth()===selectMonth.thisMonth,
                                'today':item.getFullYear()===todayMonth.thisYear&&item.getDate()===todayMonth.thisDay&&item.getMonth()===todayMonth.thisMonth,
                                'item__button--selected':item.getFullYear()===chooseTheDay.thisYear&&item.getDate()===chooseTheDay.thisDay&&item.getMonth()===chooseTheDay.thisMonth
                            }"
                        >{{item.getDate()}}</button>
                    </li>
                </ul>
            </div>
        </div>
        <div class="calendarRW__body" v-if="selectorName==='month'">
            <div class="calendarRW__header">
                <button @click="closeMonthSelector" class="header__button">
                    <img class="button__icon" src="./Righ-Left.svg" alt />
                    <span class="button__text">{{$t('back')}}</span>
                </button>
                <span class="header__title">{{$t('selectMonth')}}</span>
            </div>
            <ul class="calendarRW__list">
                <li class="calendarRW__list__item" v-for="(item,i) in month_name" :key="i">
                    <button
                        @click="setSelectMonth(i)"
                        class="item__button"
                        :class="{'item__button--selected':selectMonth.thisMonth===i }"
                    >
                        <span
                            v-if="$i18n.locale==='zh-TW'"
                            class="button__name button__name--month"
                        >{{month_cname[i]}}</span>
                        <span class="button__name button__name--month">{{item}}</span>
                        <span
                            v-if="$i18n.locale!=='zh-TW'"
                            class="button__name button__name--month"
                        >{{month_cname[i]}}</span>
                    </button>
                </li>
            </ul>
        </div>
        <div class="calendarRW__body yearOption" v-if="selectorName==='year'">
            <div class="calendarRW__header">
                <button @click="back" class="header__button">
                    <img class="button__icon" src="./Righ-Left.svg" alt />
                    <span class="button__text">{{$t('back')}}</span>
                </button>
                <span class="header__title">{{$t('selectYear')}}</span>
            </div>
            <ul class="calendarRW__list">
                <li class="calendarRW__list__item" v-for="(item,i) in yearOption" :key="i">
                    <button
                        @click="setSelectYear(item)"
                        class="item__button"
                        :class="{'item__button--selected':item.getFullYear()===selectMonth.thisYear }"
                    >
                        <span class="button__name">{{item.getFullYear()}}</span>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import dayjs from 'dayjs'
import i18nJson from './i18n.json';
export default {
    data: () => ({
        month_name: ["January", "Febrary", "March", "April", "May", "June", "July", "Auguest", "September", "October", "November", "December"],
        month_cname: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        week_name: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
        selectMonth: {
            thisYear: new Date().getFullYear(),
            thisMonth: new Date().getMonth(),
            thisDay: new Date().getDate(),
            every: []
        },
        beforeSelectMonth: [],
        afterSelectMonth: [],
        todayMonth: {
            thisYear: new Date().getFullYear(),
            thisMonth: new Date().getMonth(),
            thisDay: new Date().getDate(),
            every: []
        },
        chooseTheDay: {
            thisYear: new Date().getFullYear(),
            thisMonth: new Date().getMonth(),
            thisDay: new Date().getDate()
        },
        yearOption: [],
        readyToSelect: {
            thisYear: new Date().getFullYear(),
            thisMonth: new Date().getMonth()
        },
        selectorName: 'day',
        yearLowBias: 5,
        yearHighBias: 5
    }),
    props: {
        value: {
            type: [String, Date],
            default: ''
        },
        format: {
            type: String,
            default: 'YYYY-MM-DD'
        }
    },
    watch: {
        yearSelector: function() {
            if (this.yearSelector == true) {
                this.$nextTick(() => {
                    let h = document.querySelector('.yearOption').querySelector('ul').scrollHeight;
                    document.querySelector('.yearOption').querySelector('ul').scrollTop = h / 2 - 42;
                })
            }
        },
        value(newValue) {
            /**
             * 重設為預設值時使用
             */
            const dayJsInstance = dayjs(newValue)
            const thisYear = dayJsInstance.get('year')
            const thisMonth = dayJsInstance.get('month')
            const thisDay = dayJsInstance.get('date')
            this.chooseTheDay = {
                thisYear,
                thisMonth,
                thisDay
            }
        }
    },
    methods: {
        refreshDate: function() {
            let beforeSelectMonth = [];
            let selectMonthEvery = [];
            let afterSelectMonth = [];
            let yearOption = [];
            let selectY = this.selectMonth.thisYear;
            let selectM = this.selectMonth.thisMonth;
            for (let i = 0; i < this.startOnWeekDay; i++) {
                beforeSelectMonth.push(new Date(selectY, selectM, -i))
            }
            beforeSelectMonth.reverse();
            // // 加入之前月份日期

            for (let i = 1; i < this.thisMonthLength + 1; i++) {
                let newDate = new Date(selectY, selectM, i);
                selectMonthEvery.push(newDate);
            }
            this.beforeSelectMonth = beforeSelectMonth;


            // 加入之後月份日期
            let cellUnit = this.thisMonthLength + this.beforeSelectMonth.length;

            if (cellUnit < 35) {
                for (let i = 1; i <= (35 - cellUnit); i++) {
                    let newDate = new Date(selectY, selectM + 1, i);
                    afterSelectMonth.push(newDate);
                }
            } else if (cellUnit > 35 && cellUnit < 42) {
                for (let i = 1; i <= (42 - cellUnit); i++) {
                    let newDate = new Date(selectY, selectM + 1, i);
                    afterSelectMonth.push(newDate);
                }
            } else if (cellUnit > 42 && cellUnit < 49) {
                for (let i = 1; i <= (49 - cellUnit); i++) {
                    let newDate = new Date(selectY, selectM + 1, i);
                    afterSelectMonth.push(newDate);
                }
            } else if (cellUnit > 49 && cellUnit < 56) {
                for (let i = 1; i <= (56 - cellUnit); i++) {
                    let newDate = new Date(selectY, selectM + 1, i);
                    afterSelectMonth.push(newDate);
                }
            }
            this.selectMonth.every = beforeSelectMonth.concat(selectMonthEvery).concat(afterSelectMonth);

            //年份選單
            const yearLowBound = this.todayMonth.thisYear - this.yearLowBias - 1
            const yearUpBound = this.todayMonth.thisYear + this.yearHighBias
            for (let i = yearLowBound; i <= yearUpBound; i++) {
                yearOption.push(new Date(i, 0, 1));
            }
            this.yearOption = yearOption;
        },
        clickNext: function(e) {
            e.preventDefault();
            this.selectMonth.thisMonth++;
            if (this.selectMonth.thisMonth > 11) {
                this.selectMonth.thisYear++;
                this.selectMonth.thisMonth = 0;
            }
            this.refreshDate();
        },
        clickPre: function(e) {
            e.preventDefault();
            this.selectMonth.thisMonth--;
            if (this.selectMonth.thisMonth < 0) {
                this.selectMonth.thisYear--;
                this.selectMonth.thisMonth = 11;
            }
            this.refreshDate();
        },
        clickChooseTheDay: function(e, item) {
            e.preventDefault();
            const year = item.getFullYear()
            const month = item.getMonth()
            const day = item.getDate()

            this.chooseTheDay.thisYear = year
            this.chooseTheDay.thisMonth = month
            this.chooseTheDay.thisDay = day

            /**
             * 元件外部跟元件內部的接駁處徹底分開
             * 保持元件內部的獨立運作
             * 可能後續維護好維護一點
             */
            const calendarDate = `${year}-${month + 1}-${day}` // +1月份好煩阿Orz
            const dayJsDate = dayjs(calendarDate)
            const formattedDate = dayJsDate.format(this.format)
            this.$emit('input', formattedDate)
        },
        openMonthSelector: function() {
            this.selectorName = 'month'
        },
        openYearSelector: function() {
            this.selectorName = 'year'
        },
        closeMonthSelector: function() {
            this.selectorName = 'day'
        },
        closeYearSelector: function() {
            this.selectorName = 'day'
        },
        clickPreY: function() {
            this.readyToSelect.thisYear--;
        },
        clickNextY: function() {
            this.readyToSelect.thisYear++;
        },
        resetReadyToSelect: function() {
            this.readyToSelect.thisYear = new Date().getFullYear();
            this.readyToSelect.thisMonth = new Date().getMonth();
        },
        setSelectMonth: function(i) {
            // this.readyToSelect.thisYear =this.selectMonth.thisYear ; 
            this.selectMonth.thisMonth = i;
            this.closeMonthSelector();
            this.refreshDate();
            // this.resetReadyToSelect();
        },
        setSelectYear: function(item) {
            this.selectMonth.thisYear = item.getFullYear();
            this.closeYearSelector();
            this.closeMonthSelector();
            this.refreshDate();
            // this.resetReadyToSelect();
        },
        back: function() {
            this.closeYearSelector();
            this.closeMonthSelector();
        },
        resetToday: function() {
            this.setSelectYear(new Date())
            this.setSelectMonth(this.chooseTheDay.thisMonth)
        }
    },
    computed: {
        startOnWeekDay() {
            let selectY = this.selectMonth.thisYear;
            let selectM = this.selectMonth.thisMonth;
            let tmpDate = new Date(selectY, selectM, 1);
            return (tmpDate.getDay());
        },
        lastOnWeekDay() {
            let selectY = this.selectMonth.thisYear;
            let selectM = this.selectMonth.thisMonth;
            let tmpDate = new Date(selectY, selectM, this.thisMonthLength);
            return (tmpDate.getDay());
        },
        thisday() {
            let selectY = this.selectMonth.thisYear;
            let selectM = this.selectMonth.thisMonth;
            let tmpDate = new Date(selectY, selectM, this.selectMonth.thisDay);
            return tmpDate;
        },
        thisMonthLength() {
            let selectY = this.selectMonth.thisYear;
            let selectM = this.selectMonth.thisMonth;
            const date1 = new Date(selectY, selectM, 1);
            const date2 = new Date(selectY, (selectM + 1), 1);
            return (Math.abs(date1 - date2)) / (1000 * 60 * 60 * 24);
        }
    },
    mounted() {
        for (let lang in i18nJson) {
            const langJson = i18nJson[lang]
            this.$i18n.mergeLocaleMessage(lang, langJson)
        }
        this.refreshDate();
    }
}
</script>
<style lang="scss" scoped>
.calendarRW {
    border-radius: 4px;
    box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.04);
    background-color: #ffffff;
    padding: 16px 24px;
    .calendarRW__body {
        position: relative;
        .calendarRW__list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 100%;
            height: 248px;
            margin-top: 21px;
            .calendarRW__list__item {
                box-sizing: border-box;
                width: 72px;
                .item__button {
                    height: 67px;
                    padding: 13px 0;
                    border-radius: 10px;
                    background-color: #f0eff1;
                    display: flex;
                    flex-direction: column;
                    font-size: 13px;
                    letter-spacing: -0.3px;
                    width: 100%;
                    transition: all 0.3s;
                    .button__name {
                        width: 72px;
                        margin: auto;
                    }
                    .button__name--month {
                        width: 72px;
                        margin: auto;
                        color: #00c05e;
                    }
                    .button__name--year {
                        color: black;
                    }
                }
                .item__button--selected {
                    border-radius: 33.5px;
                    background-color: #00c05e;
                    .button__name {
                        color: white;
                    }
                }
            }
        }
    }
    .calendarRW__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 24px;
        line-height: 24px;
        .header__buttonGroup {
            display: flex;
            .buttonGroup__today {
                margin: 0 4px;
                color: rgba(65, 64, 66, 0.5);
            }
        }
        .header__button {
            width: 24px;
            height: 24px;
            line-height: 16px;
            background-color: unset;
            border: none;
            display: flex;
            font-size: 14px;
            .button__icon {
                width: 16px;
                height: 16px;
            }
            .button__text {
                margin-left: 8px;
                white-space: nowrap;
            }
        }
        .header__title {
            font-size: 17px;
            background-color: unset;
            border: none;
            height: 24px;
            font-weight: bold;
            padding: 0;
        }
        .header__title--month {
            margin-left: 12px;
        }
    }
    .calendarRW__weeksGroup {
        margin-top: 8px;
        .selectedDay {
            color: #2f3bf5;
            border: 1px solid #2f3bf5;
            background: #fdfdfd;
            border-radius: 50%;
            &:hover {
                border: 1px solid #2f3bf5;
            }
        }
        .today {
            color: #6ac13c;
            border: 1px solid #6ac13c;
            background: #e9f8df;
        }
        .weeksGroup__list {
            color: #a8a8a8;
            width: 100%;
            font-family: arial;
            font-weight: bold;
            font-size: 14px;
            display: flex;
            flex-wrap: wrap;
            .weeksGroup__list__item {
                width: 14.28%;
                margin-top: 16px;
                .item__button {
                    width: 32px;
                    height: 32px;
                    line-height: 32px;
                    list-style-type: none;
                    display: block;
                    box-sizing: border-box;
                    text-align: center;
                    font-size: 13px;
                    background-color: unset;
                    border: none;
                    outline: none;
                    border-radius: 50%;
                    cursor: pointer;
                    color: #d0d0d0;
                }
                .item__button--thisMonth {
                    color: #282828;
                }
                .item__button--selected {
                    color: white;
                    border: 1px solid #00cb37;
                    background: #00cb37;
                    border-radius: 50%;
                    &:hover {
                        border: 1px solid #00cb37;
                    }
                }
            }
        }
    }
}
</style>
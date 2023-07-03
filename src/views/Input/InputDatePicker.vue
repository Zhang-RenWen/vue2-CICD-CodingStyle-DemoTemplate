<template>
  <div class="inputDatePicker">
    <div class="wrapper-dropdownMaybe">
      <div class="calendar" />
    </div>
    <div class="wrapper-dropdownMaybe">
      <div class="calendar" />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {}
  },

  mounted() {
    function refreshDate(dom, index) {
      let thisYear = new Date().getFullYear()
      let thisMonth = new Date().getMonth()
      let thisDay = new Date().getDate()
      let month_leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      let month_normal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      let month_name = [
        'January',
        'Febrary',
        'March',
        'April',
        'May',
        'June',
        'July',
        'Auguest',
        'September',
        'October',
        'November',
        'December'
      ]
      let week_name = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

      let calendar = document.querySelectorAll('.calendar')[index]
      calendar.innerHTML = ''

      /// //////////////////////////*生成架構和按鈕 *///////////////////////////////////////

      let title = document.createElement('div')
      title.classList.add('title')
      let h1 = document.createElement('h1')
      h1.classList.add('calendar-title')
      h1.classList.add('green')
      h1.textContent = thisYear
      let h2 = document.createElement('h2')
      h2.classList.add('calendar-year')
      h2.classList.add('green')
      h2.classList.add('small')
      h2.textContent = month_name[thisMonth]
      let ap = document.createElement('a')
      ap.classList.add('prev')
      ap.textContent = 'prev'
      let an = document.createElement('a')
      an.classList.add('next')
      an.textContent = 'next'
      title.appendChild(h1)
      title.appendChild(h2)
      title.appendChild(ap)
      title.appendChild(an)
      calendar.appendChild(title)

      /// //////////////////////////*生成 cells 容器*///////////////////////////////////////

      let bodyCalendar = document.createElement('div')
      bodyCalendar.classList.add('body-calendar')

      let weekList = document.createElement('div')
      weekList.classList.add('lightgrey')
      weekList.classList.add('body-list')
      weekList.classList.add('weekList')
      let weeks = document.createElement('ul')
      weeks.classList.add('weeks')
      for (let i = 0; i < week_name.length; i++) {
        let week = document.createElement('li')
        week.textContent = week_name[i]
        weeks.appendChild(week)
      }
      let daysList = document.createElement('div')
      daysList.classList.add('darkgrey')
      daysList.classList.add('body-list')
      daysList.classList.add('daysList')
      let days = document.createElement('ul')
      days.classList.add('days')

      daysList.appendChild(days)
      weekList.appendChild(weeks)
      bodyCalendar.appendChild(weekList)
      bodyCalendar.appendChild(daysList)
      calendar.appendChild(bodyCalendar)

      /// //////////////////////////*生成日曆 cells*///////////////////////////////////////
      function newAllCells() {
        calendar.querySelector('.days').innerHTML = ''
        let dayUL = dom.querySelector('.days')
        // let prev = dom.querySelector('.prev')
        // let next = dom.querySelector('.next')
        // let ctitle = dom.querySelector('.calendar-title')
        // let cyear = dom.querySelector('.calendar-year')

        function dayStart(month, year) {
          let tmpDate = new Date(year, month, 1)
          return tmpDate.getDay()
        }
        function thisday(month, year, date) {
          let tmpDate = new Date(year, month, date + 1)
          return tmpDate
        }
        // 閏年計算 套用一個月幾天
        function daysMonth(month, year) {
          let tmp = year % 4
          if (tmp == 0) {
            return month_leapYear[month]
          } else {
            return month_normal[month]
          }
        }
        let totalDay = daysMonth(thisMonth, thisYear) // 該月總天數
        let beforeFirstDayEmpty = dayStart(thisMonth, thisYear) // 該月第一天禮拜幾?算出前面補多少格

        function newEmptyLi() {
          let li = document.createElement('li')
          li.classList.add('cell')
          li.setAttribute('data-item', '')
          dayUL.appendChild(li)
        }
        function newBeforeTodayLi(d) {
          let li = document.createElement('li')
          li.classList.add('cell')
          li.classList.add('thisM')
          li.classList.add('darkgrey')
          li.setAttribute('data-item', '')
          li.textContent = d
          dayUL.appendChild(li)
        }
        function newAfterTodayLi(d) {
          let li = document.createElement('li')
          li.classList.add('cell')
          li.classList.add('thisM')
          li.classList.add('white')
          li.setAttribute('data-item', '')
          li.textContent = d
          dayUL.appendChild(li)
        }
        function newTodayLi(d) {
          let li = document.createElement('li')
          li.classList.add('cell')
          li.classList.add('thisM')
          li.classList.add('white')
          li.classList.add('selectDay')
          li.setAttribute('data-item', '')
          li.textContent = d
          dayUL.appendChild(li)
        }

        for (let i = 1; i < beforeFirstDayEmpty; i++) {
          newEmptyLi()
        }
        for (let i = 1; i <= totalDay; i++) {
          // 先看傳入天 是否為今天
          if (
            (i < thisDay &&
              thisYear === new Date().getFullYear() &&
              thisMonth === new Date().getMonth()) ||
            thisYear < new Date().getFullYear() ||
            (thisYear == new Date().getFullYear() && thisMonth < new Date().getMonth())
          ) {
            newBeforeTodayLi(i) // 今日之前樣式
          } else if (
            i === thisDay &&
            thisYear === new Date().getFullYear() &&
            thisMonth === new Date().getMonth()
          ) {
            newTodayLi(i) // 今日樣式
          } else {
            newAfterTodayLi(i) // 今日之後樣式
          }
        }
        let cell = dom.querySelectorAll('.cell')
        let thisM = dom.querySelectorAll('.thisM')
        let cellUnit = cell.length
        if (cellUnit < 35) {
          for (let i = 0; i < 35 - cellUnit; i++) {
            newEmptyLi()
          }
        } else if (cellUnit > 35 && cellUnit < 42) {
          for (let i = 0; i < 42 - cellUnit; i++) {
            newEmptyLi()
          }
        } else if (cellUnit > 42 && cellUnit < 49) {
          for (let i = 0; i < 49 - cellUnit; i++) {
            newEmptyLi()
          }
        } else if (cellUnit > 49 && cellUnit < 56) {
          for (let i = 0; i < 56 - cellUnit; i++) {
            newEmptyLi()
          }
        }
        for (let i = 0; i < thisM.length; i++) {
          thisM[i].dataset.item = thisday(thisMonth, thisYear, i)
          thisM[i].onclick = function(e) {
            e.preventDefault()
            let cellsInfo = new Date(Date.parse(e.target.dataset.item))
            alert(cellsInfo)
          }
        }
      }
      newAllCells()

      let p = dom.querySelector('.prev')
      let n = dom.querySelector('.next')

      p.onclick = function(e) {
        e.preventDefault()
        thisMonth -= 1
        if (thisMonth < 0) {
          thisYear -= 1
          thisMonth = 11
        }
        newAllCells()
        h1.textContent = thisYear
        h2.textContent = month_name[thisMonth]
      }

      n.onclick = function(e) {
        e.preventDefault()
        thisMonth += 1
        if (thisMonth > 11) {
          thisYear += 1
          thisMonth = 0
        }
        newAllCells()
        h1.textContent = thisYear
        h2.textContent = month_name[thisMonth]
      }
    }

    for (let i = 0; i < document.querySelectorAll('.wrapper-dropdownMaybe').length; i++) {
      let calendar = document.querySelectorAll('.wrapper-dropdownMaybe')[i]
      refreshDate(calendar, i)
    }
  },

  methods: {}
}
</script>

<style lang="scss">
.inputDatePicker {
  display: flex;
  justify-content: space-around;

  > div {
    width: 40%;
  }

  .calendar {
    width: 100%;
    background: black;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .title * {
    width: 25%;
    text-align: center;
    display: block;
    height: 100px;
    line-height: 100px;
    margin: 0;
    padding: 0;
  }

  .title a {
    color: aqua;
    text-decoration: none;
  }

  .body-list ul {
    width: 100%;
    font-weight: bold;
    font-size: 14px;
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
  }

  .body-list ul li {
    width: 14.28%;
    height: 100px;
    line-height: 100px;
    list-style-type: none;
    display: block;
    text-align: center;
    border: #e9f8df 1px solid;
    font-size: 26px;
  }

  .white {
    color: #fff;
  }

  .lightgrey {
    color: #a8a8a8;
  }

  .darkgrey {
    color: #565656;
  }

  .green {
    color: #6ac13c;
  }

  .greenbox {
    border: 1px solid #6ac13c;
    background: #e9f8df;
  }

  .selectDay {
    color: #6ac13c;
    border: 1px solid #6ac13c;
    background: #e9f8df;
  }
}
</style>

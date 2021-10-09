import './style.css'
import MyCalendar from './utils/calendar'
import createPDF from './utils/pdf'
import userConfig from './utils/userConfig'

const $ = selector => document.querySelector(selector)

document.addEventListener('DOMContentLoaded', function () {
  MyCalendar()

  $('.menu').addEventListener('click', (e) => {
    if (e.target.checked === true) {
      $('.list').style.display = 'block'
    } else {
      $('.list').style.display = 'none'
    }
  })

  $('.download').addEventListener('click', () => {
    createPDF()
  })

  $('.config').addEventListener('click', (e) => {
    e.preventDefault()
    userConfig($)
  })
})

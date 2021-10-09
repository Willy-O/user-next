import './style.css'
import MyCalendar from './components/calendar'
import createPDF from './components/pdf'
import userConfig from './components/userConfig'

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

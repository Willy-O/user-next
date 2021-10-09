export default function userConfig ($) {
  const IS_HIDDEN = 'is-hidden'
  const modalClasses = $('.container-user-config').classList

  if (modalClasses.contains(IS_HIDDEN) === true) modalClasses.remove(IS_HIDDEN)

  $('.close-modal').addEventListener('click', () => {
    modalClasses.add(IS_HIDDEN)
  })

  $('.save-data').addEventListener('click', (e) => {
    e.prevenDefault()
  })
}

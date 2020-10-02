import moment from 'moment'

export default function(expenses, { sortBy, sortIn, text, textFieldToSearch }) {
  return expenses
    .filter(expense => {
      if (text) {
        return (
          expense['description']
            .trim()
            .toLowerCase()
            .includes(text.trim().toLowerCase()) ||
          expense['category']
            .trim()
            .toLowerCase()
            .includes(text.trim().toLowerCase())
        )
      } else return true
    })
    .sort((a, b) => {
      if (sortIn === 1) {
        if (sortBy === 'date') {
          return moment(a.date) < moment(b.date) ? 1 : -1
        } else if (sortBy === 'amount') {
          return a.amount < b.amount ? 1 : -1
        }
      } else {
        if (sortBy === 'date') {
          return moment(a.date) > moment(b.date) ? 1 : -1
        } else if (sortBy === 'amount') {
          return a.amount > b.amount ? 1 : -1
        }
      }
    })
  // return expenses
}

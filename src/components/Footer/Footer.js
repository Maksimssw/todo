function Footer(props) {
  return (
    <footer className='footer container'>
      <div className="footer__wrapper grid-row">
        <p className='footer__count'>{props.countTasks} item</p>
        <button
          className='footer__clear'
          onClick={props.allClear}
        >
          Clear All
        </button>
      </div>
    </footer>
  )
}

export default Footer
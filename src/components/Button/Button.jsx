import css from './Button.module.css'

function Button({loadMore}) {
    return (<button className={css.Button} onClick={loadMore}>
        Load more...
    </button>)
}

export default Button;